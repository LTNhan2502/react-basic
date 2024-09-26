import React from 'react'
import ChildComponent from './ChildComponent'

class MyComponent extends React.Component{
    state = {
        firstName: '',
        lastName: '',
        arrJobs: [
            {id: "job1", title: "Developers", salary: "500"},
            {id: "job2", title: "Testers", salary: "400"},
            {id: "job3", title: "Project managers", salary: "1000"},
        ]
    }

    onChangeFirstName = (e) => {
        this.setState({
            firstName: e.target.value
        })
    }

    onChangeLastName = (e) => {
        this.setState({
            lastName: e.target.value
        })
    }

    onSubmitForm = (e) => {
        e.preventDefault()
        console.log(">> check data: ", this.state)
        
    }

    render(){    
        console.log(">> check data: ", this.state)    
        return (
            <>
                <form>
                    <label htmlFor="fname">First name:</label><br/>
                    <input type="text" value={this.state.firstName}
                        onChange={(e) => this.onChangeFirstName(e)}
                    />
                    <br/>
                    <label htmlFor="lname">Last name:</label><br/>
                    <input type="text" value={this.state.lastName}
                        onChange={(e) => this.onChangeLastName(e)}
                    />
                    <br/>
                    <br/>
                    <input type="submit" value="Submit"
                        onClick={(e) => this.onSubmitForm(e)}
                    />
                </form> 
                <br/>
                <ChildComponent 
                    name={this.state.firstName}
                    age={'20'}
                    arrJobs={this.state.arrJobs}
                />
               
            </>
        )
    }
}


export default MyComponent;
