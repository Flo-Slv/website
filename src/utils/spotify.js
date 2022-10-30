// To require Spotify user authentification. Do not need yet ! Will see.

// Generate random string.
const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
const generateRandomString = length => {
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
};

// Generate SHA-256 hash.
const generateCodeChallenge = async codeVerifier => {
	const digest = await window.crypto.subtle.digest(
		'SHA-256',
		new TextEncoder().encode(codeVerifier)
	);

	return btoa(String.fromCharCode(...new Uint8Array(digest)))
		.replace(/=/g, '')
		.replace(/\+/g, '-')
		.replace(/\//g, '_');
};

// Get access token - not working - WIP !
// export const getTokenUrl = () => {
// 	return window.location.hash
// 		.substring(1)
// 		.split('&')
// 		.reduce((initial, item) => {
// 			var parts = item.split('=');
// 			initial[parts[0]] = decodeURIComponent(parts[1]);
// 			return initial;
// 		}, {});
// };

export const authEndpoint = 'https://accounts.spotify.com/authorize';

const scopes = ['user-read-currently-playing', 'user-read-playback-state'];

// PKCE extension.
const codeVerifier = generateRandomString(64);
window.sessionStorage.setItem('code_verifier', codeVerifier); // Store it.

// All needed params.
const params = new URLSearchParams({
	response_type: 'code', // Required.
	client_id: '6c1f239f50cd44fa84217b702d7b0fb0', // Required.
	// redirect_uri: 'https://flo-slv.dev', // Required. Prod.
	redirect_uri: 'http://localhost:5173', // Required. Dev.
	scope: scopes.join(' '), // Optional.
	state: generateRandomString(16), // Optional but recommended.
	// PKCE extension.
	code_challenge_method: 'S256', // Required.
	code_challenge: generateCodeChallenge(codeVerifier) // Required.
});
// console.log('params: ', params);

export const loginUrl = `${authEndpoint}?${params}`;
