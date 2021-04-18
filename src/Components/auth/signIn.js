import React, { Component } from 'react'


class signIn extends Component {
    
    state ={
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
                        Sign In
                    </h5>
                    <div className="input-field">
                        <label htmlFor="email">e-mail</label>
                        <input type="email" id="email" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">password</label>
                        <input type="password" id="password" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Log In</button>
                    </div>
                </form>
                
            </div>
        )
    }
}

export default signIn
