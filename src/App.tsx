import React, {useState} from 'react';
import './App.css';
import Todo from "./Todo";
import {List, Paper} from "@mui/material";
interface obj{
    id: string,
    title: string,
    done: boolean
}
function App() {

    const  [items , setItem] : [obj[], Function] = useState([{id: "0", title: "Hello World 1", done: true}, {id: "1", title: "Hello World 2", done: true}]);
  return (
    <div className="App">
        <Paper style={{margin: 16}}>
            <List>
                {items.map((item, key)=>{
                    return (
                        <Todo {...item} key={key}/>
                    )
                })}
            </List>
        </Paper>
    </div>
  );
}

export default App;
