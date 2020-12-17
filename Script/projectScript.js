$(document).ready(function() {
    $.ajax({
        type: "get",
        url: "JSON/projects.json",
        error: function(xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json",
        success: function(data) {
            for(var project of data.projects){
                //Data enclose in the HTML elements
                title = $("<h1></h1>").text(project.name);
                title.attr("class", "text-center subheading");

                background = $("<div></div>").attr("class", "background");

                for(var activity of project.projects){
                    container = $("<div></div>").attr("class", "card-container");
                    cardClass = $("<div></div>").attr("class", "card classes");
                    cardLeft = $("<div></div>").attr("class", "card-left");
                    cardName = $("<div></div>").attr("class", "card-resume-time subheading");
                    cardName.text(activity.name);
                    cardTitle = $("<div></div>").attr("class", "card-resume-title");
                    cardTitle.text(activity.date);
                    cardRight = $("<div></div>").attr("class", "card-right");
                    cardLink = $("<div></div>").attr("class", "card-classes-gpa");
                    cardInteract = $("<a></a>").attr("href", activity.link);
                    cardInteract.text(activity.link);

                    cardLink.append(cardInteract);
                    cardRight.append(cardLink);
                    cardLeft.append(cardName);
                    cardLeft.append(cardTitle);
                    cardClass.append(cardLeft);
                    cardClass.append(cardRight);
                    container.append(cardClass);
                    background.append(container);
                }
                //Data added to main element
                $("#tabs").append(title);
                $("#tabs").append(background);
            }
        }
    });
});