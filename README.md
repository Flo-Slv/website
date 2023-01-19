# My personal website

<a href="https://flo-slv.dev" target="_blank">www.flo-slv.dev</a>

I am using HTML, CSS, React.js and Vite.js.

---

This project was bootstrapped with Vite.js (https://vitejs.dev)

## Available Scripts

In the project directory, you can run:
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `dist` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

---

### Pour la prod
```sh
npm run build
```

- Push le code sur GitHub.
- Se connecter en `ssh` sur le server.
- Supprimer le dossier `website`.
- `git clone https://github.com/Flo-Slv/website.git`
- `cd website`
- `rm -rf public`
- `ln -s dist/ public`
