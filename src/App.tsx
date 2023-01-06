import React, {useEffect, useState} from 'react';
import './App.css';
import {Container} from "@mui/material";
import AddTodo from "./AddTodo";
import TodoItems from "./TodoItems";

function App() {
    const [items, setItem] = useState([]);
    useEffect(()=>console.log(items),[items])
    return (
        <div className="App">
            <Container>
                <AddTodo items={items} setItem={setItem}/>
                <div className="TodoList">
                    {items.length > 0 && <TodoItems items={items} setItem={setItem}/>}
                </div>
            </Container>
        </div>
    );
}

export default App;
