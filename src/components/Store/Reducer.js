const initialState ={
    count:0
}

export const reducer = (state= initialState , action) =>{

    switch(action.type){
        case 'INCREMENT':{
            return{
...state , count : state.count+1
            }
        }
        case 'DECREMENT':{
            return{
...state , count : state.count-1
            }
        }

        case "INCREMENT_BY_VALUE":{
            return{
                ...state , count: state.count+action.payload 
            }
        }
        case "RESET":{
            return {
              ...initialState
            };
        }
        default : {
            return state
        }
    }


}