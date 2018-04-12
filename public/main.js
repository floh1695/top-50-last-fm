const LastFmApplicationName = 'ProProTop';
const LastFmApiKey = '6e2f7b2e8f40a75ab774a63f160236c8';
const LastFmSharedSecret = '3a04bc0453034af5820d10b7d51b2ea2';
const LastFMRegisteredTo = 'floh1695';

angular
  .module('top50App', [])
  .controller('top50Controller', ($scope, $http) => {
    $scope.artists = [];

    $http({
      method: 'GET',
      url: `http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=${LastFmApiKey}&format=json`
    })
    .then(response => {
      if (response.status === 200) {
        return response.data
      }
      console.log('Bad data');
    })
    .then(data => data.artists.artist)
    .then(artistsArr => 
      artistsArr.forEach(artist => {
        newArtist = {
          name: artist.name,
          playCount: artist.playcount,
          listeners: artist.listeners,
          image: artist.image[1]['#text']
        };
        console.log(newArtist);
        $scope.artists.push(newArtist);
      }));
  });
