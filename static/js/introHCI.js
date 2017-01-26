'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("The best way is to just observe the noise of the world.");
		$("#testjs").text("Please wait...");
		$(".jumbotron p").toggleClass("active");
	});

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
/*
 * Function that prevents the default behavior then change the
 * color of the project node
 */
 function projectClick(e) {
 	//prevent the page from reloading
 	e.preventDefault();

 	//in an event handler, $(this) refers to 
 	//the object that triggerred the event
 	$(this).css("background-color", "#7fff00");

 	//var containingProject = $(this).closest(".project");
    //containingProject.append("<div class='project-description'><p>Description of the project.</p></div>");
    var containingProject = $(this).closest(".project");
    var description = $(containingProject).find(".project-description");
    if (description.length == 0) {
       $(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>");
    } 
    else {
       //description.html("<p>Stop clicking on me! You just did it at " + (new Date()) + "</p>");
       $("#.containingProject").fadeOut();
    }
 }
}