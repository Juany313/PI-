import { GET_DRIVERS,GET_TEAMS,GET_DRIVERS_BY_NAME,GET_DRIVERS_BY_TEAM,GET_DRIVERS_BY_ORIGIN,
    ADVANCE_PAGE, GO_BACK_PAGE, SET_CURRENT_PAGE } from "../actions";


let initialState = {allDrivers:[], driversCopy: [], allTeams:[],currentPage: 1,}

function rootReducer(state=initialState,action){
    switch (action.type) {


        case ADVANCE_PAGE:
            return {
                ...state,
                currentPage: state.currentPage + 1,
            };
        case GO_BACK_PAGE:
            return {
                ...state,
                currentPage: state.currentPage - 1,
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.payload,
            };

        case GET_DRIVERS:
            return {
                ...state,
                allDrivers: action.payload,
                driversCopy: action.payload,
              };
        case GET_DRIVERS_BY_NAME:
            return {
                ...state,
                allDrivers: action.payload,
              };
        case GET_DRIVERS_BY_TEAM:
            return {
                ...state,
                allDrivers: action.payload.response,
                valorPage: action.payload.valor,
              };
        case GET_TEAMS:
            return {
                ...state,
                allTeams: action.payload,
              };
        case GET_DRIVERS_BY_ORIGIN:
            console.log("action.payload.drivers",action.payload.drivers[0].created);
            
            switch (action.payload.origin) {
                case "api":
                    return {
                        ...state,
                        allDrivers: action.payload.drivers.filter(driver => driver.created === false),
                      };
                case "bdd":
                    return {
                        ...state,
                        allDrivers: action.payload.drivers.filter(driver => driver.created === true),
                      };
                case "all":
                    return {
                        ...state,
                        allDrivers: action.payload.drivers,
                      };
                default:
                    return {...state};
            }

    
        default:
            return {...state};
    }
}

export default rootReducer;

