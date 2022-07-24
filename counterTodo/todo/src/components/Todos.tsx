import axios, { AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";
import TodosInput from "./TodosInput";
import TodosItem from "./TodosItem";

export interface ITodoItems {
    id: number;
    title: string;
    status: boolean;
}

const Todos = () => {
    const [todos, setTodos] = useState<ITodoItems[]>([]);
    const handleAdd = (title: string) => {
       const payload = {
        title,
        status: false,
        
       };
       return axios
       .post("http://localhost:8080/todos", payload)
       .then(getTodos);
      //  setTodos([...todos, payload]);
    };
    // console.log(todos);


    const getTodos = () => {
        axios.get("http://localhost:8080/todos")
        // .then(({data}: {data: ITodoItems[] }) => {
        //     setTodos(data);
        // });
        .then((response: AxiosResponse<ITodoItems[]>) => {
            const {data} = response;
            setTodos(data);
        })
    };

    useEffect(() => {
        getTodos()
    }, []);
    return (
        <div>
            <h1>Todos</h1>
            <TodosInput onClick={handleAdd}/>
            {
                todos.length > 0 && 
                todos.map((item) => {
                    return <TodosItem key={item.id} {...item} />
                })
            }
        </div>
    );
};

export default Todos;