import { useCallback , useReducer } from "react";


function formReducer(state, action) {
    switch (action.type) {
      case "INPUT_CHANGE":
        let formIsValid = true;
        for (const inputId in state.inputs) {
          if(!state.inputs[inputId]){
            continue
          }
          if (inputId === action.inputId) {
            formIsValid = formIsValid && action.isValid;
          } else {
            formIsValid = formIsValid && state.inputs[inputId].isValid;
          } 
        }
        return {
          ...state,
          inputs: {
            ...state.inputs,
            [action.inputId]: { value: action.value, isValid: action.isValid },
          },
          isValid: formIsValid,
        };

      case "SET_DATA":
        return{
          inputs: action.value,
          isValid : action.isValid
        };

      default: 
        return state;
    }
  }

export const useForm = (initialInputs,initialFormValidity)=>{
    const [formState, dispatch] = useReducer(formReducer, {
    inputs:  initialInputs ,
    isValid: initialFormValidity,
  });


  const inputHandler = useCallback((id, value, isValid) => {
    dispatch({
      type: "INPUT_CHANGE",
      value: value,
      isValid: isValid,
      inputId: id,
    });
},[]);

  const setFormData = useCallback((initialInputs,initialFormValidity)=>{
    dispatch({
      type: "SET_DATA",
      value: initialInputs,
      isValid: initialFormValidity
    })
  }
,[])

    return [formState , inputHandler , setFormData]
}

