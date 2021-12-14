import React from "react"
import Login from "./Login"

export default class Profile extends React.Component{
    render(){
        if (localStorage.getItem("auth")!=="true"){
            this.props.history.push("/login");
        }
        return <h2>Profile</h2>
    }
}