export const formReducer = (state, event) => {  
    console.log('reducer state, event', state, event)
    return {
        ...state,
        [event.name]: event.value,      
      }
  } 