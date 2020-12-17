$(document).ready(function() {
    $.ajax({
        type: "get",
        url: "JSON/classes.json",
        error: function(xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json",
        success: function(data) {
            for(var semester of data.school){
                //Data enclose in the HTML elements
                title = $("<h1></h1>").text(semester.name);
                title.attr("class", "text-center subheading");

                background = $("<div></div>").attr("class", "background");

                for(var classes of semester.classes){
                    container = $("<div></div>").attr("class", "card-container");
                    cardClass = $("<div></div>").attr("class", "card classes");
                    cardLeft = $("<div></div>").attr("class", "card-left");
                    cardName = $("<div></div>").attr("class", "card-resume-time subheading");
                    cardName.text(classes.name);
                    cardTitle = $("<div></div>").attr("class", "card-resume-title");
                    cardTitle.text(classes.title);
                    cardRight = $("<div></div>").attr("class", "card-right");
                    cardGrade = $("<div></div>").attr("class", "card-classes-gpa");
                    cardGrade.text(classes.grade);

                    cardRight.append(cardGrade);
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