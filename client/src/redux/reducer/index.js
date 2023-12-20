import { GET_DRIVERS } from "../actions";


let initialState = {allDrivers:[], driversCopy: [], posts:[]}

function rootReducer(state=initialState,action){
    switch (action.type) {

        case GET_DRIVERS:
            return {
                ...state,
                allDrivers: action.payload,
                driversCopy: action.payload,
              };

    
        default:
            return {...state};
    }
}

export default rootReducer;

/* import { ADD_FAV, REMOVE_FAV } from "./actions-types";

const initialState = {
  myFavorites: [],
  allCharacters: []
};

 const rootReducer = (state=initialState, action)=>{
  switch (action.type) {
  
    case ADD_FAV:
      return { ...state, myFavorites: action.payload, allCharacters: action.payload};

    case REMOVE_FAV:
      return { ...state,
         myFavorites: action.payload
        }; */