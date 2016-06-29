// content.js for dist page

var dist_id;
var distribution_append;

function lookupBounceBacks(){
	console.log("bounce");
	chrome.tabs.create({"url":"http://itwiki.corp.qualtrics.com:4040/#/homesumo-search-general"});
	distribution_append = ' _index=mail2 logBouncedEmail'
	chrome.tabs.onUpdated.addListener(sendDistToSumo)
	//window.setTimeout(sendDistToSumo, 3000);
};

function lookupGeneralSearch(){
	console.log("general");
	chrome.tabs.create({"url":"http://itwiki.corp.qualtrics.com:4040/#/homesumo-search-general"});
	distribution_append = ''
	chrome.tabs.onUpdated.addListener(sendDistToSumo)
}

function sendDistToSumo(tabid, info){
	if(info.status == 'complete'){
		console.log('sending_message')
		chrome.tabs.sendMessage(tabid, {"msg_type":"sumo_send", "dist_id":dist_id+distribution_append})
		//clearing dist id so no ghosts
		dist_id = ''			
		chrome.tabs.onUpdated.removeListener(sendDistToSumo);
	}
}

function showDistID(){
	alert(dist_id)
}


chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse){
		if(request.msg_type === 'dist_id'){
			dist_id = request.distribution_id
			console.log(dist_id);
			console.log('received message')
		}
	}
)



var parent = chrome.contextMenus.create({"title":"Sumo Search"});
var child1 = chrome.contextMenus.create({"title":"Check BounceBacks", 
									"parentId": parent, "onclick": lookupBounceBacks});
var child2 = chrome.contextMenus.create({"title":"Check Distribution", 
									"parentId": parent, "onclick": lookupGeneralSearch})
var child2 = chrome.contextMenus.create({"title":"Show Distribution ID", 
									"parentId": parent, "onclick": showDistID})
