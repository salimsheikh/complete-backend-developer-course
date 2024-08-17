require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

const githubData = {
    "login": "salimsheikh",
    "id": 9528866,
    "node_id": "MDQ6VXNlcjk1Mjg4NjY=",
    "avatar_url": "https://avatars.githubusercontent.com/u/9528866?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/salimsheikh",
    "html_url": "https://github.com/salimsheikh",
    "followers_url": "https://api.github.com/users/salimsheikh/followers",
    "following_url": "https://api.github.com/users/salimsheikh/following{/other_user}",
    "gists_url": "https://api.github.com/users/salimsheikh/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/salimsheikh/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/salimsheikh/subscriptions",
    "organizations_url": "https://api.github.com/users/salimsheikh/orgs",
    "repos_url": "https://api.github.com/users/salimsheikh/repos",
    "events_url": "https://api.github.com/users/salimsheikh/events{/privacy}",
    "received_events_url": "https://api.github.com/users/salimsheikh/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Salim Shaikh",
    "company": "InfoSoft Solution",
    "blog": "https://plugins.infosofttech.com/",
    "location": "Mumbai",
    "email": null,
    "hireable": true,
    "bio": "PHP Developer",
    "twitter_username": "salimsheikh",
    "public_repos": 43,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2014-11-03T10:09:11Z",
    "updated_at": "2024-08-15T10:44:37Z"
}

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/login', (req, res) => {
    res.send('Login Page')
})

app.get('/github', (req, res) => {
    res.json(githubData);
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})