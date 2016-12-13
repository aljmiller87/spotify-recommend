var getFromApi = function(endpoint, query) {
    var url = 'https://api.spotify.co/v1/' + endpoint;

    var queryString = Qs.stringify(query);
    if (queryString) {
        url += '?' + queryString;
    };

    return fetch(url).then(function(response) {
        if (!response.ok) {
            return Promise.reject(response.statusText);
        }
        return response.json();
    });
};


var artist;
var getArtist = function(name) {
    var query = {
        q: name,
        limit: 1,
        type: 'artist'
    }
    return getFromApi ('search', query)
        .then(function(item){
            artist = item.artists.items[0];
            return artist;
        }).catch(function(error) {
            console.log(error);
        });
}

