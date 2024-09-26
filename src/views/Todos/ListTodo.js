import React from "react";
import './ListTodo.scss';
import AddTodo from "./AddTodo";
import { toast } from 'react-toastify';

class ListTodo extends React.Component{
    state = {
        listTodos: [
            {id: "todo1", title: "Working"},
            {id: "todo2", title: "Reading books"},
            {id: "todo3", title: "Listening to music"},
        ]
    }

    addNewTodo = (todo) => {
        this.setState({
            listTodos: [...this.state.listTodos, todo]
        })

        toast.success("Add anew successfully!")
    }

    render(){
        let {listTodos} = this.state
        // <=> let listTodos = this.state.listTodos

        return(            
            <div className="list-todo-container">
                <AddTodo addnewTodo={this.addNewTodo}/>
                <div className="list-todo-content">
                    {
                        listTodos && listTodos.length > 0 &&
                        listTodos.map((item, index) => {
                            return(
                                <div className="todo-child" key={item.id}>
                                    <span>{index+1} - {item.title} </span>
                                    <button type="button" className="edit">Edit</button>
                                    <button type="button" className="delete">Delete</button>
                                </div>
                            )
                        })
                    }
                    
                    
                </div>
            </div>            
        )
    }    
}

export default ListTodo