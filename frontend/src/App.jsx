import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';


function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios.get('/api/v1/jokes')
      .then((response) => {        
        setJokes(response.data)
        console.log(response);
      }).catch((error) => {
        console.log(error);
      })
  });

  return (
    <>
      <h1>My Web Site</h1>
      <p>Number of Jokes: {jokes.length}</p>
      <div>
        {
          jokes.map((joke, index) => (
            <div key={joke.id}>
              <h3>{joke.title}</h3>
              <p>{joke.content}</p>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default App
