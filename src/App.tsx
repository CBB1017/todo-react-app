import React, {useState} from 'react';
import './App.css';
import {Container} from "@mui/material";
import AddTodo from "./AddTodo";
import TodoItems from "./TodoItems";
import UseAxios from "./UseAxios";

const App = () => {
    const [items, setItem] = useState([{}]);
    try {
        UseAxios("/todo", "GET", setItem);
    } catch (e) {
        console.log(e)
    }
    console.log(items)
    return (
        <div className="App">
            <Container>
                <AddTodo items={items} setItem={setItem}/>
                <div className="TodoList">
                    {items && items.length > 0 && <TodoItems items={items} setItem={setItem}/>}
                </div>
            </Container>
        </div>
    );
}

export default App;
