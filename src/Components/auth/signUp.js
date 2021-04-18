import React, { Component } from 'react'


class signUp extends Component {
    
    state ={
        firstName:'',
        lastName:'',
        email :'',
        password:''
    }
    
    handleChange =(e) => {
        //console.log(e);
        this.setState({
            [e.target.id] : e.target.value
        })
    
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
            <div className="container">
                <form className="white" onSubmit={this.handleSubmit}>
                    <h5 className="grey-text text-darken-5">
                        Sign Up
                    </h5>
                    <div className="input-field">
                        <label htmlFor="firstName">firstName</label>
                        <input type="text" id="firstName" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="lastName">lastName</label>
                        <input type="text" id="lastName" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="email">e-mail</label>
                        <input type="email" id="email" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">password</label>
                        <input type="password" id="password" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
                    </div>
                </form>
                
            </div>
        )
    }
}

export default signUp
