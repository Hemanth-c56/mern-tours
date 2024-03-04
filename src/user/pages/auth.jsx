import React, { useState , useContext} from "react"

import "./auth.css"

import Input from "../../shared/components/FormElements/input"
import { VALIDATOR_EMAIL , VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from "../../shared/util/validators"
import Button from "../../shared/components/FormElements/button"
import { useForm } from "../../shared/hooks/form-hook"
import Card from "../../shared/components/UIElements/card"
import { AuthContext } from "../../shared/components/context/auth-context"

function Auth(){

    const auth = useContext(AuthContext);

    const [isLoginMode , setIsLoginMode] = useState(true);

    const [formState , inputHandler , setFormData] =useForm(
        {
            email:{
                value : "",
                isValid : false
            },
            password:{
                value: "",
                isValid : false
            }
        },
        false
    )

    const authSubmitHandler = event =>{
        event.preventDefault();
        auth.login();
    }

    function switchModeHandler(){
        if(!isLoginMode){
            setFormData(
                {
                    ...formState.inputs,
                    name : undefined
                },
                formState.inputs.email.isValid && formState.inputs.password.isValid
            );
        } 
        else{
            setFormData(
                {
                    ...formState.inputs,
                    name: {
                        value : '',
                        isValid : false
                    }
                },
                false
            );
        }
        setIsLoginMode(preval => !preval)
    }

    return(
        <Card className="authentication">
            <h2>Login Required</h2>
            <hr />
            <form onSubmit={authSubmitHandler}>
                {!isLoginMode &&     
                <Input 
                    id="name" 
                    element="input"
                    type="name"
                    label="Name"
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText="please enter a name"
                    onInput={inputHandler}
                />
                }
                <Input 
                    id="email" 
                    element="input"
                    type="email"
                    label="Email"
                    validators={[VALIDATOR_EMAIL()]}
                    errorText="please enter a valid email."
                    onInput={inputHandler}
                />
                <Input 
                    id="password" 
                    element="input"
                    type="password"
                    label="Password"
                    validators={[VALIDATOR_MINLENGTH(5)]}
                    errorText="please enter a correct Password."
                    onInput={inputHandler}
                />
                <Button type="submit" disabled={!formState.isValid}>{isLoginMode?"LOGIN":"SIGNUP"}</Button>
            </form>
            <Button inverse onClick = {switchModeHandler}>SWITCH TO {isLoginMode?"SIGN-UP":"SIGN-IN"} </Button>
        </Card>
    )
}

export default Auth