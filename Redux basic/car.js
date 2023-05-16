import {Component} from "react";
import {connect} from 'react-redux';
import { Button,Modal} from 'react-bootstrap';
class Car extends Component{
styles={
    fontstyle:"italic",
     color:"red"
  }
//   Buttonchange=()=>{this.setState({message:"Thank you !!!"})}
   render(){
  return(
    <>
    <h2>Welcome</h2>
     <h1 style={this.styles}>{this.props.message}</h1>
     <Button variant='primary' onClick={this.props.Buttonchange} >Subscribe</Button>
    </>
  
  );
  
   }
  
  
  }
  const mapstateprops=(state)=>{
    return{
      message:state.message
    };
   };
  
   const mapdispatch =(dispath)=>{
    return{
     Buttonchange:()=>dispath({type:"Message change"}),
    };
  
   };

export default connect(mapstateprops, mapdispatch)(Car);
