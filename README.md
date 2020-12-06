# DevBook
DevBook is a social media platform for developers. Create a developer profile/portfolio, share posts and get help from other developers.
Check out the live project [here](https://aqueous-sierra-51843.herokuapp.com/). 

# Tech Stack
<p align="center">
<img src="https://devicons.github.io/devicon/devicon.git/icons/mongodb/mongodb-original.svg" alt="mongodb" width="40" height="40"/>
<img src="https://devicons.github.io/devicon/devicon.git/icons/express/express-original.svg" alt="express" width="40" height="40"/>
<img src="https://devicons.github.io/devicon/devicon.git/icons/react/react-original.svg" alt="react" width="40" height="40"/>
<img src="https://devicons.github.io/devicon/devicon.git/icons/nodejs/nodejs-original.svg" alt="nodejs" width="40" height="40"/>
</p>


# Quick Start 🚀

### Add a default.json file in config folder with the following

```
{
  "mongoURI": "<your_mongoDB_Atlas_uri_with_credentials>",
  "jwtSecret": "secret",
  "githubToken": "<yoursecrectaccesstoken>"
}
```

### Install server dependencies

```bash
npm install
```

### Install client dependencies

```bash
cd client
npm install
```

### Run both Express & React from root

```bash
npm run dev
```

### Build for production

```bash
cd client
npm run build
```

### Test production before deploy

After running a build in the client 👆, cd into the root of the project.  
And run...

Linux/Unix 
```bash
NODE_ENV=production node server.js
```
Windows Cmd Prompt or Powershell 
```bash
$env:NODE_ENV="production" node server.js
```

Check in browser on [http://localhost:5000/](http://localhost:5000/)
