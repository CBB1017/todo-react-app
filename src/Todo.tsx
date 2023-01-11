import React, {useEffect, useState} from "react";
import {ListItem, ListItemText, InputBase, Checkbox, ListItemSecondaryAction, IconButton} from "@mui/material";
import {DeleteOutline} from "@mui/icons-material";
import {Item} from "./interface"

const Todo = ({id, title, done, setItem} : Item) => {
    const [newTitle, setNewTitle] = useState(title);
    useEffect(() => {
        setNewTitle(title);
    }, [title])
    const [newDone, setNewDone] = useState(done);
    const onClickDeleteTodo = () => {
        setItem((currentItems : Item[])=> currentItems.filter(item => item.id !== id))
    }
    const onFocusEachInput = () => {
        setItem((currentItems : Item[])=>
            currentItems.map(item => {
                return item.id === id ? {...item, title : newTitle} : {...item};
            }
        ));
    }
    const onChangeEachInput = (event : React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setNewTitle(event.target.value);
    }

    const onKeyDownTodoText = (event :   React.KeyboardEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        if(event.key === "Enter"){
            event.preventDefault();
            event.stopPropagation();
            onFocusEachInput();
        }
    }
    const onClickCheckBox = (event :  React.MouseEvent<HTMLButtonElement>) => {
        setNewDone(!newDone);
        setItem((currentItems : Item[])=>
            currentItems.map(item => {
                return item.id === id ? {...item, done : newDone} : {...item};
            })
        );
    }
    return (
        <ListItem>
            <Checkbox checked={newDone} onClick={onClickCheckBox}/>
            <ListItemText>
                <InputBase
                    inputProps={{
                        "aria-label" : "naked",
                        readOnly : false,
                        "aria-readonly" : false
                    }}
                    type="text"
                    id={id}
                    name={id}
                    value={newTitle}
                    multiline={true}
                    fullWidth={true}
                    onKeyDown={onKeyDownTodoText}
                    onChange={onChangeEachInput}
                    tabIndex={0}
                    onBlur={onFocusEachInput}
                    readOnly={false}
                />
            </ListItemText>

            <ListItemSecondaryAction>
                <IconButton aria-label="Delete Todo" onClick={onClickDeleteTodo}>
                    <DeleteOutline />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    )
}

export default Todo;