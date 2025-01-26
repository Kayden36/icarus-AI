<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Get User Location</title>
</head>
<body>
    <h1>Find Your Location</h1>
    <button id="getLocation">Get Location</button>
    <p id="location">Location will appear here...</p>

    <script>
        document.getElementById('getLocation').addEventListener('click', function() {
            if ('geolocation' in navigator) {
                navigator.geolocation.getCurrentPosition(
                    function(position) {
                        document.getElementById('location').textContent = 
                            'Latitude: ' + position.coords.latitude + 
                            ', Longitude: ' + position.coords.longitude;
                    },
                    function(error) {
                        document.getElementById('location').textContent = 
                            'Error: ' + error.message;
                    }
                );
            } else {
                document.getElementById('location').textContent = 'Geolocation not supported by your browser.';
            }
        });
    </script>
</body>
</html>
