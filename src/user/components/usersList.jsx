import React from "react"
import "./usersList.css";
import UserItem from "./userItem";
import Card from "../../shared/components/UIElements/card";

function UserList(props){
    if(props.items.length === 0){
        return(
            <div className="center">
                <Card>
                    <h2>no users found.</h2>
                </Card> 
            </div>
        )
    }
    return(
    <ul className="users-list">
        {props.items.map((user) =>{
             return <UserItem 
                key={user.id}
                id = {user.id}
                image = {user.image}
                name = {user.name}
                placeCount = {user.place}
            />
        })}
    </ul>   
    )
    
}

export default UserList