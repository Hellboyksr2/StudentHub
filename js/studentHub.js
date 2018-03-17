var StudentHub = function() {};

StudentHub.prototype = {
    
    /**
     * Function to Intitilaize the Page
     */
    init : function() {

        // Invoke the eventHandelers on page load.
        this.eventHandelers();

        // Create the Left Panal.
        studentHub.appendTheSections(data);

        // Select the first element by Default
        $("#stundent-hub-list-selection a:first-child").trigger('click');
    },

    eventHandelers : function() {

        $(document).on('click', '#stundent-hub-list-selection a', function() {

            // Remove the Previous Selection.
            $("#stundent-hub-list-selection a.active").removeClass('active');

            // Add the Ative Selection to the Current Selection.
            $(this).addClass('active');

            // Add the Right Panel Details.
            studentHub.appendTheLinksForSelectedSection( data , $(this).text());
        })
    },

    appendTheSections : function(data) {
        var html = "";

        // Loop through the Data Object and Create the Left Panal Sections.
        $(Object.keys(data)).each(function(idx, section) {
            html = html + '<a href="#" class="list-group-item">' + section + '</a>';
        });

        // Set the Data to the DOM.
        $("#stundent-hub-list-selection").html(html);
    },

    appendTheLinksForSelectedSection : function(data, selectedSection) {
        var sectionDetails = data[selectedSection];
        var html = "";
        if(sectionDetails) {
            $(sectionDetails).each(function(idx , link) {
                html = html + '<a href="' + link + '" class="list-group-item">' + link + '</a>'
            })
        }

        $('#links').html(html);
    }
}


var studentHub = new StudentHub();
studentHub.init();