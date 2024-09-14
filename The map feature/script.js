// Initialize the map
var map = L.map('map').setView([19.0760, 72.8777], 12); // Mumbai coordinates and initial zoom level

// Add a tile layer from OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Define tourist attraction markers with coordinates and pop-up information
var attractions = [
    // Landmarks
    { name: "Gateway of India", lat: 18.9220, lon: 72.8347, category: "landmarks" },
    { name: "Chhatrapati Shivaji Terminus", lat: 18.9402, lon: 72.8337, category: "landmarks" },
    { name: "Elephanta Caves", lat: 18.9865, lon: 72.8233, category: "landmarks" },
    { name: "Marine Drive", lat: 18.9416, lon: 72.8247, category: "landmarks" },
    { name: "Worli Sea Face", lat: 19.0160, lon: 72.8164, category: "landmarks" },
    { name: "Bandra-Worli Sea Link", lat: 19.0291, lon: 72.8151, category: "landmarks" },
    { name: "Global Vipassana Pagoda", lat: 18.9840, lon: 72.9117, category: "landmarks" },
    { name: "Worli Sea Face Promenade", lat: 19.0150, lon: 72.8213, category: "landmarks" },
    { name: "Flora Fountain", lat: 18.9312, lon: 72.8337, category: "landmarks" },
    { name: "Sewri Fort", lat: 19.0002, lon: 72.8569, category: "landmarks" },
    { name: "Mumbai Film City", lat: 19.1557, lon: 72.9087, category: "landmarks" },
    { name: "Mani Bhavan Gandhi Sangrahalaya", lat: 18.9624, lon: 72.8054, category: "landmarks" },
    { name: "Chor Bazaar", lat: 18.9582, lon: 72.8258, category: "landmarks" },
    { name: "Dharavi Slum", lat: 19.0392, lon: 72.8505, category: "landmarks" },
    
    // Beaches
    { name: "Juhu Beach", lat: 19.1070, lon: 72.8261, category: "beaches" },
    { name: "Girgaum Chowpatty", lat: 18.9513, lon: 72.8156, category: "beaches" },
    { name: "Madh Island Beach", lat: 19.1872, lon: 72.7852, category: "beaches" },
    { name: "Versova Beach", lat: 19.1373, lon: 72.8133, category: "beaches" },
    { name: "Aksa Beach", lat: 19.1869, lon: 72.7957, category: "beaches" },
    { name: "Chowpatty Beach", lat: 18.9519, lon: 72.8140, category: "beaches" },
    { name: "Gorai Beach", lat: 19.2410, lon: 72.7834, category: "beaches" },
    
    // Temples
    { name: "Mahalakshmi Temple", lat: 18.9827, lon: 72.8104, category: "temples" },
    { name: "Babulnath Temple", lat: 18.9712, lon: 72.8039, category: "temples" },
    { name: "Shree Siddhivinayak Ganapati Temple", lat: 19.0177, lon: 72.8304, category: "temples" },
    
    // Museums
    { name: "Nehru Science Centre", lat: 18.9904, lon: 72.8191, category: "museums" },
    { name: "Mani Bhavan Gandhi Sangrahalaya", lat: 18.9624, lon: 72.8054, category: "museums" },
    { name: "Nehru Planetarium", lat: 18.9881, lon: 72.8196, category: "museums" },
    { name: "Sassoon Dock Art Project", lat: 18.9020, lon: 72.8150, category: "museums" },
    
    // Parks
    { name: "Sanjay Gandhi National Park", lat: 19.2204, lon: 72.8647, category: "parks" },
    { name: "Kamala Nehru Park", lat: 18.9565, lon: 72.8139, category: "parks" },
    { name: "Jijamata Udyaan (Byculla Zoo)", lat: 18.9795, lon: 72.8344, category: "parks" },
    { name: "Powai Garden", lat: 19.1242, lon: 72.9113, category: "parks" },
    { name: "Sion Fort", lat: 19.0415, lon: 72.8610, category: "parks" },
    { name: "Kamala Nehru Park", lat: 18.9565, lon: 72.8139, category: "parks" },
    { name: "Jijamata Udyaan (Byculla Zoo)", lat: 18.9795, lon: 72.8344, category: "parks" },
    { name: "Powai Garden", lat: 19.1242, lon: 72.9113, category: "parks" },
    { name: "Sion Fort", lat: 19.0415, lon: 72.8610, category: "parks" },
    
    // Aquariums
    { name: "Taraporewala Aquarium", lat: 18.9226, lon: 72.8272, category: "aquariums" },
   
    // Entertainment
    { name: "EsselWorld", lat: 19.2304, lon: 72.8042, category: "entertainment" },
    { name: "Mumbai Film City", lat: 19.1557, lon: 72.9087, category: "entertainment" },
    { name: "Water Kingdom", lat: 19.2304, lon: 72.8042, category: "entertainment" },
    { name: "EsselWorld", lat: 19.2304, lon: 72.8042, category: "entertainment" },
    { name: "Mumbai Film City", lat: 19.1557, lon: 72.9087, category: "entertainment" },
    { name: "Water Kingdom", lat: 19.2304, lon: 72.8042, category: "entertainment" },
    { name: "EsselWorld", lat: 19.2304, lon: 72.8042, category: "entertainment" },
    { name: "Mumbai Film City", lat: 19.1557, lon: 72.9087, category: "entertainment" },
    { name: "Water Kingdom", lat: 19.2304, lon: 72.8042, category: "entertainment" },
    
    // Religious Sites
    { name: "Haji Ali Dargah", lat: 18.9826, lon: 72.8106, category: "religious" },
    { name: "Siddhivinayak Temple", lat: 19.0186, lon: 72.8302, category: "religious" },
    { name: "Mahalakshmi Temple", lat: 18.9827, lon: 72.8104, category: "religious" },
    { name: "Babulnath Temple", lat: 18.9712, lon: 72.8039, category: "religious" },
  

    
    // Forts
    { name: "Vasai Fort", lat: 19.3638, lon: 72.8423, category: "forts" },
    { name: "Sion Fort", lat: 19.0415, lon: 72.8610, category: "forts" },
    
  
    { name: "Sewri Fort", lat: 19.0002, lon: 72.8569, category: "forts" },
 
    
    // Lakes
    { name: "Powai Lake", lat: 19.1234, lon: 72.9070, category: "lakes" },
   
    
    // Sports Venues
    { name: "Wankhede Stadium", lat: 18.9388, lon: 72.8258, category: "sports" },
    { name: "DY Patil Stadium", lat: 19.0455, lon: 73.0223, category: "sports" },
    { name: "Brabourne Stadium", lat: 18.9330, lon: 72.8270, category: "sports" },

    
    // Markets
    { name: "Colaba Causeway", lat: 18.9154, lon: 72.8258, category: "markets" },
   
    { name: "Linking Road", lat: 19.0647, lon: 72.8343, category: "markets" },
    { name: "Crawford Market", lat: 18.9452, lon: 72.8337, category: "markets" },
    { name: "Zaveri Bazaar", lat: 18.9519, lon: 72.8309, category: "markets" },
    { name: "Colaba Causeway", lat: 18.9154, lon: 72.8258, category: "markets" },
    { name: "Fashion Street", lat: 18.9352, lon: 72.8300, category: "markets" },
   
    { name: "Crawford Market", lat: 18.9452, lon: 72.8337, category: "markets" },
   
    
    // Zoos
    { name: "Sanjay Gandhi National Park Lion and Tiger Safari", lat: 19.2176, lon: 72.9110, category: "zoos" },
    { name: "Nehru Science Centre", lat: 18.9904, lon: 72.8191, category: "zoos" },
    { name: "Kamala Nehru Park", lat: 18.9565, lon: 72.8139, category: "zoos" },
    
    // Hospitals
    { name: "Jaslok Hospital and Research Centre", lat: 18.9640, lon: 72.8086, category: "hospitals" },
    { name: "KEM Hospital", lat: 18.9933, lon: 72.8363, category: "hospitals" },
    { name: "Lilavati Hospital and Research Centre", lat: 19.0471, lon: 72.8319, category: "hospitals" },
    
    // Theatres
    { name: "Royal Opera House", lat: 18.9544, lon: 72.8131, category: "theatres" },
    { name: "NCPA - National Centre for the Performing Arts", lat: 18.9235, lon: 72.8240, category: "theatres" },
    { name: "Royal Opera House", lat: 18.9544, lon: 72.8131, category: "theatres" },
    { name: "Prithvi Theatre", lat: 19.1060, lon: 72.8262, category: "theatres" }
    // Add more attractions and categories as needed
];

function filterByCategory() {
    var selectedCategory = document.getElementById('category-select').value;

    // Clear all markers from the map
    map.eachLayer(function (layer) {
        if (layer instanceof L.Marker) {
            map.removeLayer(layer);
        }
    });

    // Filter and display places based on the selected category
    attractions.forEach(function (attraction) {
        if (selectedCategory === 'all' || attraction.category === selectedCategory) {
            var marker = L.marker([attraction.lat, attraction.lon])
                .addTo(map)
                .bindPopup(attraction.name)
                .openPopup();
        }
    });
}



// Add markers for tourist attractions
attractions.forEach(function (attraction) {
    L.marker([attraction.lat, attraction.lon])
        .addTo(map)
        .bindPopup(attraction.name)
        .openPopup();
});

// Function to search for a location
function searchLocation() {
    var searchTerm = document.getElementById('location-search').value.toLowerCase();

    // Loop through the attractions and check if the name contains the search term
    attractions.forEach(function (attraction) {
        var attractionName = attraction.name.toLowerCase();
        var marker = L.marker([attraction.lat, attraction.lon]);
        
        if (attractionName.includes(searchTerm)) {
            // Highlight the marker if the name matches the search term
            marker.addTo(map);
            marker.bindPopup(attraction.name).openPopup();
        } else {
            // Remove the marker if it doesn't match the search term
            map.removeLayer(marker);
        }
    });
}

// Function to highlight a location on the map when clicked in the list
function highlightLocation(lat, lon) {
    map.setView([lat, lon], 15); // Set a higher zoom level to highlight the location
}

// Function to show suggestions in the dropdown
function showSuggestions() {
    var searchTerm = document.getElementById('location-search').value.toLowerCase();
    var suggestionsList = document.getElementById('suggestions-list');
    
    // Clear previous suggestions
    suggestionsList.innerHTML = '';

    if (searchTerm.trim() === '') {
        // Hide the suggestions dropdown when no input is entered
        document.querySelector('.suggestions').style.display = 'none';
    } else {
        // Filter and display suggestions based on the search term
        attractions.forEach(function (attraction) {
            var attractionName = attraction.name.toLowerCase();

            if (attractionName.includes(searchTerm)) {
                var suggestionItem = document.createElement('li');
                suggestionItem.innerHTML = `<a href="#" onclick="selectSuggestion('${attractionName}')">${attraction.name}</a>`;
                suggestionsList.appendChild(suggestionItem);
            }
        });

        // Show the suggestions dropdown when there are suggestions
        if (suggestionsList.children.length > 0) {
            document.querySelector('.suggestions').style.display = 'block';
        } else {
            document.querySelector('.suggestions').style.display = 'none';
        }
    }
    
}
// Function to select a suggestion and populate the search box
function selectSuggestion(selectedSuggestion) {
    document.getElementById('location-search').value = selectedSuggestion;
    document.querySelector('.suggestions').style.display = 'none';

    // Find the selected place in the attractions list
    var selectedAttraction = attractions.find(function (attraction) {
        return attraction.name.toLowerCase() === selectedSuggestion;
    });

    // If the selected place is found, center the map on it and display a popup
    if (selectedAttraction) {
        var lat = selectedAttraction.lat;
        var lon = selectedAttraction.lon;
        var placeName = selectedAttraction.name;

        // Remove any existing popups from the map
        map.eachLayer(function (layer) {
            if (layer instanceof L.Popup) {
                map.removeLayer(layer);
            }
        });

        map.setView([lat, lon], 15); // Set a higher zoom level to highlight the location

        // Create a popup and open it at the selected location
        var popup = L.popup()
            .setLatLng([lat, lon])
            .setContent(`<b>${placeName}</b>`)
            .openOn(map);
    }
}