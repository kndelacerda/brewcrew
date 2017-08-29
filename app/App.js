// ================================================================================================
// ================================================================================================
// *** Start Calendar requirements/calls ***
// ================================================================================================

var Cronofy = require('cronofy');

var cronofyClient = new Cronofy({
    client_id: 'U8BSeuygfRWhVSL3yrZVUQ3vcy0qoU3G',
    client_secret: 'HxXyfrZ3XeS6x_7ji_XfPlW',
    access_token: 'BZffcdwX8C9JmG4Fi8sJgt9ocne3dKJI',
    domain: 'http://82ed90ff.ngrok.io',
    google_maps_embed_api_key: 'AIzaSyCbZy_ehxaas24IudOpNxp0gteULntMYow'
        // refresh_token: '5hdSBZHgjA4xcQAelyAYWDfezZv0-9yP'
});

var options = {
    access_token: 'BZffcdwX8C9JmG4Fi8sJgt9ocne3dKJI',
    // code: 'asdkfj213sdf',
    redirect_uri: 'https://brew-crew.herokuapp.com//',
    // 'tzid' = Time Zone Identifier
    tzid: 'Etc/UTC',
    calendar_id: [],
    event_id: [],
    summary: [],
    description: [],
    start: [],
    end: [],
    location: {
        description: []
    }
};

cronofyClient.requestAccessToken(options)
    .then(function(response) {
        console.log(response);
    });

// Alternatively as a callback
cronofyClient.requestAccessToken(options, function(err, response) {
    if (err) throw err;
    console.log(response);
});

// Retrieve a List of Calendars -------------------------------------------------------------------
client.listCalendars(options)
    .then(function(response) {
        var calendars = response.calendars;
    });

// Add or Update an Event -------------------------------------------------------------------------
client.createEvent(options)
    .then(function() {
        // Success
    });

// Delete an Event --------------------------------------------------------------------------------
client.deleteEvent(options)
    .then(function(response) {
        // success
    });

// Read Events Across All Calendars ---------------------------------------------------------------
client.readEvents(options)
    .then(function(response) {
        var events = response.events;
    });

// ================================================================================================
// *** End Calendar requirements/calls ***
// ================================================================================================
// ================================================================================================