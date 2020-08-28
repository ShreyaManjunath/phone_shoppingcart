import React, { Component } from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ButtonContainer } from "../components/Buttton";
import Title from './Title';

export default class Login extends Component {
    state={
        name:"",
        phone:"",
        email:"",
        password:''
        
    } 
    handleChange=(e) =>{
        this.setState({
            [e.target.id]:e.target.value

        });
    }
    
    render() {
        return (
            <Loginform>
           
            <div className="container">
            
            <form>
            
            {/* <h5 className="grey-text text-darken-3" style={{fontFamily:"inherit"}}>Sign In</h5> */}
            <Title name="sign" title="in"></Title>
            <br></br>

            <br />
            <label htmlFor="text" className="text-capitalize ">Name :</label>
            <input style={{width:"100%",margin:"4px 0",padding:"2px 2px",display:"inline-block",boxSizing:"border-box",border:"none",boxShadow:"5px 5px 3px #adad85"}}
             type="text" id="password" onChange={this.handleChange} placeholder="Enter Username" required/>

            <br />
            <label htmlFor="number" className="text-capitalize ">Phone.no :</label>
            <input style={{width:"100%",margin:"4px 0",padding:"2px 2px",display:"inline-block",boxSizing:"border-box",border:"none",boxShadow:"5px 5px 3px #adad85"}} 
            type="number" id="password" onChange={this.handleChange} placeholder="Enter Phone number" required/>
            <br />

            <label htmlFor="email" style={{paddingBottom:"1rem"}}>Email :  </label>
            <input style={{width:"100%",margin:"4px 0",padding:"2px 2px",display:"inline-block",boxSizing:"border-box",border:"none",boxShadow:"5px 5px 3px #adad85"}}
            
              type="email" id="email" onChange={this.handleChange} placeholder="Enter email" required/>
            <br />
            <label htmlFor="password" className="text-capitalize ">password :</label>
            <input style={{width:"100%",margin:"4px 0",padding:"2px 2px",display:"inline-block",boxSizing:"border-box",border:"none",boxShadow:"5px 5px 3px #adad85"}}
             type="password" id="password" onChange={this.handleChange} placeholder="Enter password" required/>
            <br></br>
            <Link to='/'>
                <ButtonContainer 
                style={{color:"black",fontSize:"1.2rem",borderColor:"#ff4d4d",boxShadow:"5px 5px 3px #ffb3d1"}}>
                <span className="mr-2">
              
            </span>
            Login
                </ButtonContainer>
            </Link>
            </form>
            </div>
            
           
            </Loginform>
        )
    }
}


const Loginform = styled.div`
color:"#3399ff";
font-size:1.2rem;
padding:10px;
background:"#80bfff";
widht:100%;
height:100vh;
`
