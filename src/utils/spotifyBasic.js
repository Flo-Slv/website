import axios from 'axios';

const authEndpoint = 'https://accounts.spotify.com/api/token';

const clientId = import.meta.env.VITE_SPOTIFY_PUBLIC;
const clientSecret = import.meta.env.VITE_SPOTIFY_SECRET;

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

const data = { grant_type: 'client_credentials' };

export const getSpotifyPlaylist = async () => {
	try {
		// Get Spotify access token.
		const res = await axios.post(authEndpoint, data, headers);

		// Get Spotify playlist.
		if (res.data.access_token) {
			const playlistId = '3SA9WytiHYOyQiFq2cn17f'; // Lily Meola
			const playlistEndpoint = `https://api.spotify.com/v1/playlists/${playlistId}`;
			const playlistHeaders = {
				headers: { 'Authorization': `Bearer ${res.data.access_token}` }
			};

			try {
				const playlist = await axios.get(playlistEndpoint, playlistHeaders);

				console.log('playlist.data: ', playlist.data);

				return Boolean(true);
			} catch (err) {
				console.error(err);
			}
		}
	} catch (err) {
		console.error(err);
	}
};

