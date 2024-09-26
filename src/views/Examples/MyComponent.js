import React from 'react'
import ChildComponent from './ChildComponent'
import AddComponent from './AddComponent'

class MyComponent extends React.Component{
    state = {        
        arrJobs: [
            {id: "job1", title: "Developers", salary: "500"},
            {id: "job2", title: "Testers", salary: "400"},
            {id: "job3", title: "Project managers", salary: "1000"},
        ]
    }

    addNewJob = (job) => {
        // console.log(">> Check job from parent: ", job)
        this.setState({
            arrJobs: [...this.state.arrJobs, job]
        })
    }

    deleteAJob = (job) => {
        let currentJobs = this.state.arrJobs
        currentJobs = currentJobs.filter((item) => item.id !== job.id)
        this.setState({
            arrJobs: currentJobs
        })
    }

    render(){    
        console.log(">> check data: ", this.state)    
        return (
            <>
                <AddComponent addNewJob={this.addNewJob}/>
                <br/>
                <ChildComponent 
                    arrJobs={this.state.arrJobs}
                    deleteAJob={this.deleteAJob}
                />
               
            </>
        )
    }
}


export default MyComponent;
