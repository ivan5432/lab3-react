import React from "react";

export default class Login extends React.Component{
   
    render(){
        const login=event=>{

            event.preventDefault();
            let username=event.target.username.value
            let password=event.target.password.value
            if (username==="Admin" && password==="12345"){
                localStorage.setItem("auth", "true");

                this.props.history.push("/profile");
            } else{
                alert("Ім'я користувача або пароль введені не вірно");
            }
            return 0; 
        }
        return(
            <form onSubmit={login}>
               <input type="text" placeholder="username" name="username" required></input> 
                <br></br>
               <input type="password" placeholder="password" name="password" required></input> 
                <br></br>
               <input type="submit"></input> 
            </form>
        ); 
    }
}