let accessTokenaccessToken;
const Spotify = {
    getAccessToken() {
        if(accessToken) {
            return accessToken;
        } else {
            const token = window.location.href.match(/access_token=([^&]*)/)
            const expires = window.location.href.match(/expires_in=([^&]*)/)
        }
    }
}
export default Spotify;