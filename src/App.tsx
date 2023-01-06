import React, {useEffect, useState} from 'react';
import './App.css';
import Todo from "./Todo";
import {Container, List, Paper} from "@mui/material";
import AddTodo from "./AddTodo";
import TodoItems from "./TodoItems";

function App() {
    const [items , setItem] = useState([{id: "0", title: "Hello World 1", done: true}, {id: "1", title: "Hello World 2", done: true}]);
    useEffect(()=> {
        console.log(items)
    }, [items])
    return (
    <div className="App">
        <Container>
            <AddTodo items={items} setItem={setItem} />
            <div className="TodoList">
                { items.length > 0 && <TodoItems items={[...items]} />}
            </div>
        </Container>
    </div>
    );
}

export default App;
