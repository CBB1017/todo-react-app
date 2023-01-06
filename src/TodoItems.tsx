import {List, Paper} from "@mui/material";
import Todo from "./Todo";
import React from "react";
interface Item{
    id: string,
    title: string,
    done: boolean
}

const TodoItems = ({items}: any ) => {
    return (
        <Paper style={{margin: 16}}>
            <List>
                {
                    items.map((item : Item , idx : number )=>(
                        <Todo {...item} key={idx}/>
                    ))
                }
            </List>
        </Paper>
    )

}

export default TodoItems