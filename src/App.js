import {useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import axios from 'axios';

function App() {
  const [users, setUsers]= useState ([]);
  const getDataUsers = async () => {
    try {
      const {data} = await axios.get('https://jsonplaceholder.typicode.com/')
      setUsers(data)
    } catch (error) {
      console.log(error); 
      }
      
    }
    useEffect(() => {
     getDataUsers();
    }, []);
    console.log(users);
      return (
        <div className="App">
          {users.map((el) => (
            <Card key={el.id} style={{width: "18rem"}}>
              <Card.Body>
                <Card.Title>{el.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {el.email}
                </Card.Subtitle>
                <Card.Text>
                  {el.phone}
                </Card.Text>
                <Card.Text>
                  {el.website}
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
          
        </div>
      );
    }

export default App;
