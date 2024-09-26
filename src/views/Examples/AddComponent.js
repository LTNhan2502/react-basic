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
        console.log(">> check data: ", this.state)
        
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
