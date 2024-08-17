````js

npm init
npm install express


npm run start
````

Create server.js
````js
import express from 'express'

const app = express();

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.get('/jokes', (req, res) => {
    const jokes = [
        
    ]

    res.json(jokes)
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`server at http://localhost:${port}`);
});
````
modified package.json
````js
{
  "name": "backend",
  "version": "1.0.0",
  "main": "server.js",
  "type": "module",
  "scripts": {
    "start": "node server.js"
  },
  "author": "Salim Shaikh",
  "license": "ISC",
  "description": "",
  "dependencies": {
    "express": "^4.19.2"
  }
}
````
add type: module to use module instead of commanjs. 
and add start: "node server.js"


````js
npm install dotenv
````

## Install CORS
(https://www.npmjs.com/package/cors)[https://www.npmjs.com/package/cors]
````js
npm install cors
````

Proxy in vite.config.js
````js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy : {
      '/api' : 'http://localhost:3000'
    }
  },
  plugins: [react()],
})


axios.get('http://localhost:3000/api/v1/jokes')
to
axios.get('/api/v1/jokes')

````
(https://create-react-app.dev/docs/proxying-api-requests-in-development/)[https://create-react-app.dev/docs/proxying-api-requests-in-development/]
Now code working because we have use proxy in vite config. Not used CORS