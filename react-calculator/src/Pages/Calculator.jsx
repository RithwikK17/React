import React,{Component} from 'react'
import Keypad from '../Components/Keypad'
import Display from '../Components/Display'

class Calculator extends Component{
    constructor(props){
        super(props)
        this.state = {
            inp:"",
            out:"",
            keys:["%","C","CE","BS","1/x","x2","sqrt","/","7","8","9","*","4","5","6","-","1","2","3","+","+/-","0",".","="]
        }
    }
    btnHandler(val){
        console.log("btn =",val)
        switch(val){            
            case "C":
                this.setState({
                    inp: ""
                })
                break;
            case "CE":
                this.setState({
                    inp: "",
                    out: ""
                })
                break;
            case "BS":
                this.setState({
                    inp: this.state.inp.slice(0,-1)
                })
                break;
            case "1/x":
                break;
            case "x2":
                break;
            case "sqrt":
                break;            
            case "=":
                this.setState({
                    out: eval(this.state.inp)
                })
                break;
            case "+/-":
                break;
            default: this.setState({
                inp: this.state.inp + val
            })
                
        }
    }
    render(){
        return(
            <section className="calculator">
                <Display inp={this.state.inp} out={this.state.out}/>
                <Keypad keys={this.state.keys} handler={this.btnHandler.bind(this)}/>
            </section>
        )
    }
}
export default Calculator