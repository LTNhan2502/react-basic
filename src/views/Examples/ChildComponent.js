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
                        <div>
                        {
                            arrJobs.map((item, index) => {
                                return(
                                    <div key={item.id}>
                                        {item.title} - {item.salary}
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
