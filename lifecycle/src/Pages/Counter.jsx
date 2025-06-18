import React, {Component} from "react";

class Counter extends Component{
    constructor(props){
        super(props)
        console.log(`constructor called with num: ${props.num}`)
        this.state = {
            view: false
        }
    }

    static getDerivedStateFromProps(nextProps, prevState){
    console.log(`getDerivedStateFromProps called with num: ${nextProps.num}`);
    //if the view state is false, update it to true
    if(nextProps.num >=5){
        return{view: true};
    }
    //Otherwise, return null to indicate no stage change
        return null;
    }

// Lifecycle method that runs after the component is mounted
    incrementCount = () =>{
        this.props.root.render(
            <React.StrictMode>
                <Counter num={this.props.num + 1} root={this.props.root}/>
            </React.StrictMode>
        );
    }

    componentDidMount(){
        console.log(`componentDidMount caled with num: ${this.props.num}`)
    }

    //update state methods
    shouldComponentUpdae(nextProps, nextState){
        console.log(`shouldComponentUpdate called with num: ${nextProps.num}`);
        console.log(`shouldComponentUpdate called with view state: ${nextState.view}`);
        // Allow the component to update if the view state is false
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log(`getSnapshotBeforeUpdate called with prev num: ${prevProps.num} and current num: ${this.props.num}`);
        // Return null as we don't need to capture any snapshot
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log(`componentDidUpdate called with prev num: ${prevProps.num} and current num: ${this.props.num}`);
        // if the view state has changed, log it
        if(prevState.view !== this.state.view){
            console.log(`view state changed to: ${this.state.view}`);
        }
    }

    //unmount method
    componentWillUnmount(){
        console.log(`componentWillUnmount called with num: ${this.props.num}`);
        //Perform any cleanup if necessary
    }


    render(){
        console.log(`component rendered with num: ${this.props.num}`)
        return(
            <div className="container">
                <h2 className="title">Counter Component { this.state.view ? null : this.props.num }</h2>
                

                <div className="blk">

                    <h3>
                        {
                            this.state.view ? "Welcome to the counter Component!" : "Click the button to update Counts."
                        }
                    </h3>
                    {
                        this.state.view ? null : <button className="mountBtn" onClick={this.incrementCount.bind(this)}>Inrecment Count</button>
                    }
                </div>
            </div>
        );
    }
}

export default Counter;