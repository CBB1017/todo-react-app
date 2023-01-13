import React, {useEffect, useState} from 'react';
import './App.css';
import {Container} from "@mui/material";
import AddTodo from "./AddTodo";
import TodoItems from "./TodoItems";
import UseAxios from "./UseAxios";

const App = () => {

    try {
        useEffect(() => {
            UseAxios("/todo", "GET", setItem);
        }, [])
    } catch (e) {
        console.log(e)
    }
    const [items, setItem] = useState([{id:"1", title:"title", done: false}]);
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
