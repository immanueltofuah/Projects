import React from 'react'
import '../App.css'
class ClassCounter extends React.Component{
    constructor(){
        super();
        this.state = {
            count:0};
        }
    
        HandleIncrease() {
            this.setState({
                count: this.state.count + 1,
            });
        }
        HandleDecrease() {
            this.setState({
                count: this.state.count - 1,
        });
    }
    render(){
        return(
            <div>
                <h1 className="counter">{this.state.count} </h1>
                <div>
                    <button className="buts" onClick={()=> this.HandleDecrease()}>
                        Decrease value
                    </button>
                
                    <button className="buts" onClick={()=> this.HandleIncrease()}>
                        Increase value
                    </button>
                </div>
            </div>
        )
    }
}
 export default ClassCounter;