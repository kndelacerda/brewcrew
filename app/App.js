// ================================================================================================
// ================================================================================================
// *** Start Calendar requirements/calls ***
// ================================================================================================

var Cronofy = require('cronofy');

var cronofyClient = new Cronofy({
    // client_id: 'armzr1h5NPQST93XTFL9iIULXxfdDlmV',
    // client_secret: 'aPPwd-ASDFAsdfasdfasdfsadfasdfASDFSADF_asdfasdfasdf',
    access_token: 'BZffcdwX8C9JmG4Fi8sJgt9ocne3dKJI',
    // refresh_token: '5hdSBZHgjA4xcQAelyAYWDfezZv0-9yP'
});

var options = {
    access_token: 'BZffcdwX8C9JmG4Fi8sJgt9ocne3dKJI',
    // code: 'asdkfj213sdf',
    redirect_uri: 'https://www.xyz.com/',
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