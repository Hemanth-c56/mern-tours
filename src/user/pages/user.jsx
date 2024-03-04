import React from "react"
import UserList from "../components/usersList"

function User(){
    const USERS = [
        {
            id : 'u1',
            name : 'hemanth',
            image : 'https://img.freepik.com/free-photo/portrait-lion-ai-generated_268835-4278.jpg',
            place : 3  
        },
        {
            id : 'u2',
            name : 'john',
            image : 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Ferrari_488_GTB.jpg/799px-Ferrari_488_GTB.jpg?20151111100742',
            place : 1  
        }
    ]

    return (
        <UserList items={USERS} />
    )
}

export default User