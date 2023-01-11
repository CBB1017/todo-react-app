import {List, Paper} from "@mui/material";
import Todo from "./Todo";
import React from "react";
import {Item} from "./interface"

const TodoItems = ({items, setItem}: any) => {


    return (
        <Paper style={{margin: 16}}>
            <List>
                {
                    items.map((item: Item, idx: number) => (
                        <Todo {...item} setItem={setItem} key={idx}/>
                    ))
                }
            </List>
        </Paper>
    )

}

export default TodoItems