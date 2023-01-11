import React, {useEffect, useState} from "react";
import {TextField, Paper, Button, Grid} from "@mui/material";
import useAxios from "./UseAxios";


const AddTodo = ({items, setItem} :any) => {

    const [todo, setTodo] = useState("");
    const onClickAddTodo = () => {
        setItem((current: any[])=> [...current,{id:String(items.length), title:todo, done:false}] );
        setTodo("");
    }

    const onChangeTodoText = (event : React.ChangeEvent<HTMLTextAreaElement>) => {
        setTodo(event.target.value);
    }
    const onKeyDownTodoText = (event :  React.KeyboardEvent<HTMLDivElement>) => {
        if(event.key === "Enter")
            onClickAddTodo();
    }

    return (
        <Paper style={{margin: 16, padding: 16}}>
            <Grid container>
                <Grid xs={11} md={11} item style={{paddingRight: 16}}>
                    <TextField placeholder="Add Todo here" fullWidth onChange={onChangeTodoText} onKeyDown={onKeyDownTodoText} value={todo}/>
                </Grid>
                <Grid xs={1} md={1} item>
                    <Button fullWidth color="secondary" variant="outlined" onClick={onClickAddTodo} >
                        +
                    </Button>
                </Grid>
            </Grid>
        </Paper>
    )
}
export default AddTodo