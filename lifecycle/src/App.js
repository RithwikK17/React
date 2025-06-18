import React, {Component} from "react";
import ReactDOM from 'react-dom/client';
import './App.css';
import Counter from "./Pages/Counter";

class App extends Component{
  constructor(props){
    super(props);
    this.root = ""; // React root for rendering the Counter component
    this.unmountHandler = this.unmountHandler.bind(this);
  }

  //mount
  mountHandler(){
    console.log('mounted')
    this.root = ReactDOM.createRoot(document.getElementById('renderHere'))
    this.root.render(
      <React.StrictMode>
        <Counter num={0} root={this.root} />
      </React.StrictMode>
    )
  }

  //unmount
  unmountHandler(){
    console.log('unmounted')
    this.root.unmount();
  }

  render(){
    return (
      <div className="container">
        <div className="title">
          <h1>React lifecycle</h1>
        </div>

        <div className="blk">
          <button className="mountBtn" onClick={this.mountHandler.bind(this)}>Mount</button>
          <button className="unmount" onClick={() => this.unmountHandler()}>UnMount</button>
        </div>

        <section id="renderHere"></section>
      </div>
    );
  }
}

export default App;