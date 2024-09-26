import React from "react";
import { toast } from 'react-toastify';

class AddTodo extends React.Component{
    state = {
        title: '',
    }

    onChangeInput = (e) => {
        this.setState({
            title: e.target.value
        })
    }

    onAddTodo = () => {
        if(!this.state.title){
            toast.error("Missing title!")
            return
        }
        let todo = {
            id: Math.floor(Math.random() * 10000),
            title: this.state.title
        }

        this.props.addnewTodo(todo)
        this.setState({
            title: ''
        })
    }

    render() {
        let {title} = this.state
        return(
            <div className="add-todo">
                <input type="text" value={title}
                    onChange={(e) => this.onChangeInput(e)}
                ></input>
                <button type="button" className="add"
                    onClick={() => this.onAddTodo()}
                >Add</button>
            </div>
        )
    }

}

export default AddTodo;