import { GET_DRIVERS,GET_TEAMS,GET_DRIVERS_BY_NAME,GET_DRIVERS_BY_TEAM,GET_DRIVERS_BY_ORIGIN,GET_DRIVERS_BY_ORDER,
    ADVANCE_PAGE, GO_BACK_PAGE, SET_CURRENT_PAGE, RESET_PAGE } from "../actions";


let initialState = {allDrivers:[], driversCopy: [], allTeams:[],currentPage: 1,}

function rootReducer(state=initialState,action){
    switch (action.type) {

        case RESET_PAGE:
            return {
                ...state,
                currentPage: 1, // Restablecer la página actual a 1
            };
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
            switch (action.payload.origin) {
                case "api":
                    return {
                        ...state,
                        currentPage: 1, // Restablecer la página actual a 1
                        allDrivers: action.payload.drivers.filter(driver => driver.created === false),
                      };
                case "bdd":
                    return {
                        ...state,
                        currentPage: 1, // Restablecer la página actual a 1
                        allDrivers: action.payload.drivers.filter(driver => driver.created === true),
                      };
                case "all":
                    return {
                        ...state,
                        currentPage: 1, // Restablecer la página actual a 1
                        allDrivers: action.payload.drivers,
                      };
                default:
                    return {...state};
            }
        case GET_DRIVERS_BY_ORDER:
            console.log("se esta ejecutando aaaa", action.payload.order);
                switch (action.payload.order) {
                    case "orden":
                        return {
                            ...state,
                            /* allDrivers: [...state.driversCopy], */
                            currentPage: 1 // Restablecer la página actual a 1
                        };
                    case "ascendente":
                        console.log("se esta ejecutando estaaaaaaaaaaaaaa", action.payload.order);
                        return {
                            ...state,
                            allDrivers: [...state.allDrivers].sort((a, b) => a.name.localeCompare(b.name)),
                            currentPage: 1 // Restablecer la página actual a 1
                        };
                    case "descendente":
                        return {
                            ...state,
                            allDrivers: [...state.allDrivers].sort((a, b) => b.name.localeCompare(a.name)),
                            currentPage: 1 // Restablecer la página actual a 1
                        };
                    case "fechaNacimiento":
                        return {
                            ...state,
                            allDrivers: [...state.allDrivers].sort((a, b) => new Date(a.dob) - new Date(b.dob)),
                            currentPage: 1 // Restablecer la página actual a 1
                        };
                    default:
                        return state;
                }
            
        default:
            return {...state};
    }
}

export default rootReducer;

