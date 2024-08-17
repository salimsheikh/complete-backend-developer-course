import express from 'express'

const app = express();
/*
app.get("/", (req, res) => {
    res.send("Hello World");
});*/

app.get('/api/v1/jokes', (req, res) => {
    const jokes = [
        {
            "id": 1,
            "title": "Skeleton Fight",
            "content": "Why don't skeletons fight each other? They don't have the guts."
        },
        {
            "id": 2,
            "title": "Fake Spaghetti",
            "content": "What do you call fake spaghetti? An impasta."
        },
        {
            "id": 3,
            "title": "Scarecrow Award",
            "content": "Why did the scarecrow win an award? Because he was outstanding in his field!"
        },
        {
            "id": 4,
            "title": "Penguin House",
            "content": "How does a penguin build its house? Igloos it together."
        },
        {
            "id": 5,
            "title": "Trusting Atoms",
            "content": "Why don't scientists trust atoms? Because they make up everything!"
        }
    ]

    res.json(jokes)
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`server at http://localhost:${port}`);
});