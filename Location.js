function ipLookUp() {
    $.ajax('https://ip-api.com/json')
        .then(
            function success(response) {
                console.log('User\'s Location Data is ', response);
                console.log('User\'s Country', response.country);
                getAddress(response.lat, response.lon);
                document.getElementById("locationText").innerHTML = "Hello visitor from " + response.country + "!";
            },

            function fail(data, status) {
                console.log('Request failed.  Returned status of',
                    status);
            }
        );
}

function getAddress(latitude, longitude) {
    $.ajax('https://maps.googleapis.com/maps/api/geocode/json?' +
        'latlng=' + latitude + ',' + longitude + '&key=' +
        'AIzaSyDtAdi_4DbRMWWtcgVmrwHwbxvQ_UeRphc')
        .then(
            function success(response) {
                console.log('User\'s Address Data is ', response);
                
                
                
            },
            function fail(status) {
                console.log('Request failed.  Returned status of',
                    status)
            }
        )
}

if ("geolocation" in navigator) {
    // check if geolocation is supported/enabled on current browser
    navigator.geolocation.getCurrentPosition(
        function success(position) {
            // for when getting location is a success
            console.log('latitude', position.coords.latitude,
                'longitude', position.coords.longitude);
            getAddress(position.coords.latitude,
                position.coords.longitude)
            ipLookUp()
        },
        function error(error_message) {
            // for when getting location results in an error
            console.error('An error has occured while retrieving' +
                'location', error_message)
            ipLookUp()
        });
} else {
    // geolocation is not supported
    // get your location some other way
    console.log('geolocation is not enabled on this browser')
    ipLookUp()
}
