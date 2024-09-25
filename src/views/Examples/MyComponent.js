import React, { useState } from 'react'

class MyComponent extends React.Component{
    state = {
        name: "Trong Nhan",
        age: 20
    }

    onChangeName = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    onClickBtn = () => {
        alert("Click Click")
    }
    render(){
        
        return (
            <>
                <div>
                    <input type='text' value={this.state.name}
                        onChange={(e) => this.onChangeName(e)}
                    />
                </div>
                <div className='first'>
                    This is MyComponent, and my name is {this.state.name}
                </div>
                <div className='second'>
                    I'm {this.state.age} years old
                </div>
                <button onClick={() => this.onClickBtn()} >Click me</button>
            </>
        )
    }
}


export default MyComponent;
