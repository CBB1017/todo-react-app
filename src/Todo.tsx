import React, {useEffect, useMemo, useState} from "react";
import {ListItem, ListItemText, InputBase, Checkbox, ListItemSecondaryAction, IconButton} from "@mui/material";
import {DeleteOutline} from "@mui/icons-material";
import {Item} from "./interface"
import UseAxios from "./UseAxios";

const Todo = ({id, title, done, setItem} : Item) => {
    const [newTitle, setNewTitle] = useState("");
    const [newDone, setNewDone] = useState(false);
    const [delTodo, setDelTodo] = useState({id:"", title:"", done:false})
    const [updateTodo, setUpdateTodo] = useState({})

    useEffect(() => {
        setNewTitle(title);
        setNewDone(done);
        setUpdateTodo({id, title, done});
        UseAxios("/todo", "PUT", updateTodo);
    }, [title, newDone]);

    const onClickDeleteTodo = () => {
        try {
            console.log("click delete")
            let delItem = {
                title: "",
                id: "",
                done: false
            };
            setItem((currentItems : Item[])=> currentItems.filter(item => {
                console.log(currentItems)
                if (item.id === id) {
                    delItem = {...item};
                    return false;
                }else
                    return true;
            }));
            setDelTodo( (current) => {
                return {...current, ...delItem}
            });
        }catch(e){
            console.log(e)
        }
    }

    useEffect(() => {
        console.log("delete")
        UseAxios("/todo", "DELETE", delTodo);
    }, [delTodo]);

    const onFocusEachInput = () => {
        setItem((currentItems : Item[])=>
            currentItems.map(item => {
                return item.id === id ? {...item, title : newTitle} : {...item};
            }
        ));
        setUpdateTodo({id, title:newTitle, done});
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
    const onClickCheckBox = (event :   React.ChangeEvent<HTMLInputElement>) => {
        setItem((currentItems : Item[])=>
            currentItems.map(item => {
                return item.id === id ? {...item, done : !newDone} : {...item};
            })
        );
        setUpdateTodo({id, title, done: !newDone});
        setNewDone(!newDone);
    }
    return (
        <ListItem>
            <Checkbox tabIndex={0} checked={newDone} onChange={onClickCheckBox}/>
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
                    tabIndex={1}
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