import React from 'react';
import OutputScreen from './outputScreen.js';
import Button from './button.js';




class Calculator extends React.Component {

  constructor() {
  super();
  this.state = {
    question: '',
    answer: ''
  }

  this.handleClick = this.handleClick.bind(this);
}
	render() 
	{ 
	return ( 
	<div className="frame"> 
	<div className="mainCalc"> 
    <OutputScreen answer = {this.state.answer} question = {this.state.question}/>
	<div className="button-row"> 
	<Button label={'Clear'} style={{ width: '80px' }} handleClick = {this.handleClick}/> 
	<Button label={'='} style={{backgroundColor:"#d12c4d"}} handleClick = {this.handleClick}/> 
	<Button label={'+'} style={{backgroundColor:"#d12c4d"}} handleClick = {this.handleClick}/> 
	</div> 
	<div className="button-row"> 
	<Button label={'7'} handleClick = {this.handleClick}/> 
	<Button label={'8'} handleClick = {this.handleClick}/> 
	<Button label={'9'} handleClick = {this.handleClick}/> 
	<Button label={'-'} style={{backgroundColor:"#d12c4d"}} handleClick = {this.handleClick}/> 
	</div> 
	<div className="button-row"> 
	<Button label={'4'} handleClick = {this.handleClick} /> 
	<Button label={'5'} handleClick = {this.handleClick} /> 
	<Button label={'6'} handleClick = {this.handleClick} /> 
	<Button label={'×'} style={{backgroundColor:"#d12c4d"}} handleClick = {this.handleClick}/> 
	</div> 
	<div className="button-row"> 
	<Button label={'1'} handleClick = {this.handleClick}/> 
	<Button label={'2'} handleClick = {this.handleClick}/> 
	<Button label={'3'} handleClick = {this.handleClick}/> 
	<Button label={'÷'} style={{backgroundColor:"#d12c4d"}} handleClick = {this.handleClick}/> 
	</div> 
	<div className="button-row"> 
	<Button label={'.'} handleClick = {this.handleClick}/> 
	<Button label={'0'} handleClick = {this.handleClick}/> 
	<Button label={'Delete'} style={{ width: '80px' }} handleClick = {this.handleClick}/>
	</div>
	</div> 
	</div> 
	);
}

  handleClick(event,ch=false){

    const value = ch?event:event.target.value;

    switch (value) {
      case '=': {
    		if(this.state.question!=='')
        {
    			var ans='';
    		  try
    			{
    				ans = eval(this.state.question);
    			}
    			catch(err)
    			{
    				this.setState({answer: "Math Error"});
    			}
    			if(ans===undefined)
    				this.setState({answer: "Math Error"});
    			else
    				this.setState({ answer: ans , question: ''});
    			break;
    		}
      }
      case 'Clear': {
        this.setState({ question: '', answer: '' });
        break;
      }

	  case 'Delete': {
		let str;
		if(this.state.question==""){
			str=this.state.answer.toString();
			this.setState({question:str,answer:""});
		}
		else
	    	str = this.state.question;
  		str = str.substr(0,str.length-1);
  		this.setState({question: str});
  		break;
	  }
	  case '×':{
		if(this.state.question=="")
			this.setState({question: this.state.answer += "*",answer: ""});
		else
			this.setState({ question: this.state.question += '*'});
        break;
	  }
	  case '÷':{
		if(this.state.question=="")
			this.setState({question: this.state.answer += "/",answer: ""});
		else
			this.setState({ question: this.state.question += '/'});
        break;
	  }

    default: {
		if(this.state.question=="")
			this.setState({question: this.state.answer += value,answer: ""});
		else
        	this.setState({ question: this.state.question += value})
        break;
      }
    }
  }
}
	

export default Calculator; 