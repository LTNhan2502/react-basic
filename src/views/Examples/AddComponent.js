import React from 'react'

class AddComponent extends React.Component{
    state = {
        titleJob: '',
        salary: '',
    }

    onChangeTitleJob = (e) => {
        this.setState({
            titleJob: e.target.value
        })
    }

    onChangeSalary = (e) => {
        this.setState({
            salary: e.target.value
        })
    }

    onSubmitForm = (e) => {
        e.preventDefault()
        if(!this.state.titleJob || !this.state.salary){
            alert("Missing required parameters!")
            return
        }
        console.log(">> check data from AddComponent: ", this.state)

        this.props.addNewJob({            
            id: Math.floor(Math.random() * 100),
            title: this.state.titleJob,
            salary: this.state.salary        
        })
        this.setState({
            titleJob: '',
            salary: ''
        })
        
    }

    render() {
        return(
            <form>
                <label htmlFor="fname">Title Job:</label><br/>
                <input type="text" value={this.state.titleJob}
                    onChange={(e) => this.onChangeTitleJob(e)}
                />
                <br/>
                <label htmlFor="lname">Salalry:</label><br/>
                <input type="text" value={this.state.salary}
                    onChange={(e) => this.onChangeSalary(e)}
                />
                <br/>
                <br/>
                <input type="submit" value="Submit"
                    onClick={(e) => this.onSubmitForm(e)}
                />
            </form> 
        )
    }
}

export default AddComponent;
