import React, {Component} from 'react'
/*class Car {
  constructor(name,model) {
    this.model = model;
	this.name = name;
  }
}
class Car extends React.Component {
  render() {
    return <h2 style={{textAlign:"center"}}>I am  {this.props.name} {this.props.fname}!</h2>;
  }
}

class Garage extends React.Component {
  render() {
    return (
      React.createElement('a',this.props,this.props.linktext)
    );
  }
}*/
/*class Clock extends Component{
	constructor(props){
		super(props)
		this.state={
			currenttime:new Date().toLocaleString()
		}
		this.updateTime();
	}
	updateTime(){
		setInterval(()=>{
			this.setState({
				currenttime:new Date().toLocaleString()
			})
		},1000)
	}
	render(){
		return(
		<h1>{this.state.currenttime}</h1>
		)
	}
}*/
class Myevents extends React.Component{
	constructor(props){
		super(props)
		this.state={
			username:''
		}
		//this.incrementCounter = this.incrementCounter.bind(this);
	}
	incrementCounter = (a) =>{
		//alert(a.type)
		this.setState({
			username:a.target.value
		})
	}
	render(){
		
		return(
				<div>
				<form>
				<h1 style={{textAlign:"center"}}>Please Welcome {this.state.username}</h1>
				<p>Please Enter Your Name</p>
					<input type='text' onChange={this.incrementCounter}/>
				</form>
					
					
				</div>	
		)
	}
}
export default Myevents
