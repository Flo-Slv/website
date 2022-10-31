const authEndpoint = 'https://accounts.spotify.com/api/token';
const clientId = import.meta.env.VITE_SPOTIFY_PUBLIC;
const clientSecret = import.meta.env.VITE_SPOTIFY_SECRET;
const data = { grant_type: 'client_credentials' };
const headers = {
	headers: {
		'Accept': 'application/json',
		'Content-Type': 'application/x-www-form-urlencoded'
	},
	auth: {
		username: clientId,
		password: clientSecret
	}
};

export const accesParams = {
	url: authEndpoint,
	data,
	headers,
	client_id: clientId,
	client_secret: clientSecret
}

const playlistId = '3SA9WytiHYOyQiFq2cn17f'; // Lily Meola
export const playlistEndpoint = `https://api.spotify.com/v1/playlists/${playlistId}`;
