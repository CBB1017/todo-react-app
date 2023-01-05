import React from "react";
import {ListItem, ListItemText, InputBase, Checkbox} from "@mui/material";

interface Item{
    id: string,
    title: string,
    done: boolean
}
const Todo = ({id, title, done} : Item) => {

    return (
        <ListItem>
            <Checkbox checked={done} />
            <ListItemText>
                <InputBase
                    inputProps={{"aria-label" : "naked"}}
                    type="text"
                    id={id}
                    name={id}
                    value={title}
                    multiline={true}
                    fullWidth={true}
                />
            </ListItemText>
        </ListItem>
    )
}

export default Todo;