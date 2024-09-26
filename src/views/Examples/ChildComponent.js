import React from 'react'

class ChildComponent extends React.Component{
    state = {
        isShowJobs: false,
    }

    onShowHide = () => {
        this.setState({
            isShowJobs: !this.state.isShowJobs
        })
    }

    onDeleteJob = (job) => {
        console.log(">> onDeleteJob: ", job)
        this.props.deleteAJob(job)
    }

    render(){ 
        let {arrJobs} = this.props
        let {isShowJobs} = this.state
        return (
            <>
                {isShowJobs === false ? 
                    <div>
                        <button onClick={() => this.onShowHide()}>Show</button>
                    </div>                
                    :
                    <>
                        <div className='job list'>
                        {
                            arrJobs.map((item, index) => {
                                return(
                                    <div key={item.id}>
                                        {item.title} - {item.salary}
                                        <></> <span onClick={() => this.onDeleteJob(item)}>x</span>
                                    </div>
                                )
                            })
                        }
                        </div>
                        <div>
                            <button onClick={() => this.onShowHide()}>Hide</button>
                        </div>
                    </>
                }
                
            </>
        )
    }
}

// const ChildComponent = (props) => {
//     console.log(">> Check child props:", props);
//     let { arrJobs } = props
//     return(
//         <>
//             <div className='jobs-title'>
//                 {
//                     arrJobs.map((item, index) => {
//                         if(item.salary >= 500){
//                             return(
//                                 <div key={item.id}>
//                                     {item.title} - {item.salary}$
//                                 </div>
//                             )
//                         }
//                     })
//                 }
//             </div>
//         </>
//     )
// }
export default ChildComponent;
