import React from 'react'

class ChildComponent extends React.Component{
    state = {
        firstName: '',
        lastName: ''
    }

    render(){ 
        console.log(">> Check props: ", this.props);
        // let name = this.props.name
        // let age = this.props.age

        let {name, age} = this.props
               
        return (
            <>
                <div>Child component: {name} - {age}</div>
            </>
        )
    }
}


export default ChildComponent;
