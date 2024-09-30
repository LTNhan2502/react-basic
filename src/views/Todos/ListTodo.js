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
        ],
        editTodo: {}
    }

    addNewTodo = (todo) => {
        this.setState({
            listTodos: [...this.state.listTodos, todo]
        })

        toast.success("Add anew successfully!")
    }

    onDeleteTodo = (todo) => {
        let currentTodos = this.state.listTodos
        currentTodos = currentTodos.filter((item) => item.id !== todo.id)
        this.setState({
            listTodos: currentTodos
        })
        toast.success("Delete successfully!")
        
    }

    onEditTodo = (todo) => {
        let {listTodos, editTodo} = this.state
        let isEmptyObject = Object.keys(editTodo).length === 0
        
        //Save case
        if(isEmptyObject === false && editTodo.id === todo.id){
            let listTodosCopy = [...listTodos]
            let objIndex = listTodosCopy.findIndex(item => item.id === todo.id);
            listTodosCopy[objIndex].title = editTodo.title
            
            this.setState({
                listTodos: listTodosCopy,
                editTodo: {}
            })
            toast.success("Update todo successfully!")
            return
        }

        this.setState({
            editTodo: todo
        })
    }

    onChangeEditTodo = (e) => {
        let editTodoCopy = {...this.state.editTodo}
        editTodoCopy.title = e.target.value
        this.setState({
            editTodo: editTodoCopy
        })
    }

    render(){
        let {listTodos, editTodo} = this.state
        // <=> let listTodos = this.state.listTodos
        //Check empty object
        let isEmptyObject = Object.keys(editTodo).length === 0
        return(            
            <div className="list-todo-container">
                <div>This is Todo page</div>
                <AddTodo addnewTodo={this.addNewTodo}/>
                <div className="list-todo-content">
                    {
                        listTodos && listTodos.length > 0 &&
                        listTodos.map((item, index) => {
                            return(
                                <div className="todo-child" key={item.id}>
                                    {
                                        isEmptyObject === true ?
                                        <span>{index+1} - {item.title} </span>
                                        :
                                        <>
                                            {
                                                editTodo.id === item.id ?
                                                <span>
                                                    {index+1} - 
                                                    <input value={editTodo.title}
                                                        onChange={(e) => this.onChangeEditTodo(e)}
                                                    />
                                                    </span>
                                                :
                                                <span>{index+1} - {item.title} </span>
                                            }
                                        </>
                                    }
                                    <button type="button" className="edit" 
                                        onClick={() => this.onEditTodo(item)}
                                    >
                                        {
                                            isEmptyObject === false && editTodo.id === item.id ?
                                            'Save' : 'Edit'
                                        }
                                    </button>
                                    <button type="button" className="delete"
                                        onClick={() => this.onDeleteTodo(item)}
                                    >Delete</button>
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