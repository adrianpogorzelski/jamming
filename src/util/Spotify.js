let accessToken;
const clientID = "3d8cbfc7009e417d95bcd324cb24f5ad";
const redirectURI = "http://localhost:3000/";
const Spotify = {

    getAccessToken() {
        if(accessToken) {
            return accessToken;
        }

        const tokenMatch = window.location.href.match(/access_token=([^&]*)/)
        const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/)

        if (tokenMatch && expiresInMatch) {
            accessToken = tokenMatch[1];
            const expiresIn = Number(expiresInMatch[1]);
            window.setTimeout(() => accessToken = '', expiresIn * 1000);
            window.history.pushState('Access Token', null, '/');
            return accessToken;
        } else {
            const redirectURL = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`
            window.location = redirectURL;
        }
    },

    search(term) {
        const accessToken = Spotify.getAccessToken()
        return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`,
        {headers: {Authorization: `Bearer ${accessToken}`}
        }).then(response => {
            response.json();
        }).then(jsonResponse => {
            if(!jsonResponse.tracks) {
                 return [];
            } else {
                return.jsonResponse.tracks.map(track => {
                   id: track.id,
                   name: track.name,
                   artist: track.artists[0].name,
                   album: track.album.name,
                   uri: track.uri
                });
            }
        })
    }
}
export default Spotify;