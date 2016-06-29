console.log("Insights on Fire extension is loaded up and ready to perform");

/*************************************************/
/**********                            ***********/
/**********      Terms of Service      ***********/
/**********                            ***********/
/*************************************************/


if( $('.terms-of-service') != null ) {
	$('.terms-of-service .Q_WindowFooter .RightButtons').append("<a class='btn btn-danger' id='BypassTOS'>Bypass Terms of Service</a>");
	$(".terms-of-service").on("click", "#BypassTOS", function() {
		removeTerms();
	})
}

function removeTerms() {
    $('.terms-of-service').remove();
    $('.Overlay_QTOS').remove();
}

/*************************************************/
/**********                            ***********/
/**********         ID Retrieval       ***********/
/**********                            ***********/
/*************************************************/

function addRightClickMenu() {
	console.log("Adding the right click for block surveys");
	var surveys = document.getElementsByClassName("project-bar");
	console.log(surveys);
	for (var i=0; i<surveys.length; i++) {
		surveys[i].addEventListener("contextmenu", function(ev) {
		    ev.preventDefault();
		    //copySurveyIDtoClipboard(this.id)
		    copySurveyIDtoClipboard(this.id)
		    alert("SID: " + this.id);
		    return false;
		}, false);
	}
	console.log("Adding the right click for list view surveys");
	var surveys = document.getElementsByClassName("survey-project-row");
	console.log(surveys);
	for (var i=0; i<surveys.length; i++) {
		surveys[i].addEventListener("contextmenu", function(ev) {
		    ev.preventDefault();
		    //copySurveyIDtoClipboard(this.id)
		    copySurveyIDtoClipboard(this.id)
		    alert("SID: " + this.id);
		    return false;
		}, false);
	}
	console.log("Adding the right click for contacts");
	var contacts = document.getElementsByClassName("group-bar");
	console.log(contacts);
	for (var i=0; i<contacts.length; i++) {
		contacts[i].addEventListener("contextmenu", function(ev) {
		    ev.preventDefault();
		    //copySurveyIDtoClipboard(this.id)
		    alert("PanelID: " + this.id);
		    return false;
		}, false);
	}
	//depricated due to use of sumo checker. All features should be at parity. Talk to //
	//carlm for further details //

	// console.log("Adding the right click for distributions");
	// var distributions = document.getElementsByClassName("distribution-details");
	// console.log(distributions);
	// for (var i=0; i<distributions.length; i++) {
	// 	distributions[i].addEventListener("contextmenu", function(ev) {
	// 	    ev.preventDefault();
	// 	    //copySurveyIDtoClipboard(this.id)
	// 	    alert("DistributionID: " + this.getAttribute("distribution-id"));
	// 	    console.log(this);
	// 	    return false;
	// 	}, false);
	// }
	console.log("Adding the right click for printed reports");
	var reports = document.getElementsByClassName("ReportRow");
	console.log(reports);
	for (var i=0; i<reports.length; i++) {
		reports[i].addEventListener("contextmenu", function(ev) {
		    ev.preventDefault();
		    //copySurveyIDtoClipboard(this.id)
		    alert("ReportID: " + this.getAttribute("clickcallback").split(",")[1]);
		    console.log(this);
		    return false;
		}, false);
	}
}

// for some reason it isn't running the copy but it is doing everything else
function copySurveyIDtoClipboard(id) {
	// Add Hidden Input with Survey ID into DOM
	// $(".top-level-nav-container").after('<textarea id="hiddenInput" style="position:absolute;z-index:-100;opacity:0">The Test</textarea>');
	var node = document.createElement("input");
	node.setAttribute("id", "hiddenInput");
	node.setAttribute("style", "position: absolute; display:none;");
	document.getElementsByClassName('top-level-nav-container')[0].appendChild(node);
	// Set Hidden Input to variable
	var hiddenInput  = document.getElementById("hiddenInput");
	// Set hidden input text area value with survey ID
	hiddenInput.value = id;
	// Select Content from Hidden Input
	hiddenInput.focus();
	hiddenInput.select();
	// Copy to clipboard
	document.execCommand("Copy");
	// Flash Copied in GUI
	// alert("Survey ID Copied --> " + id);
}
window.setTimeout(addRightClickMenu, 3000);
