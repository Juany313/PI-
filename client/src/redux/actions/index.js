import axios from "axios";

export const GET_DRIVERS = "GET_DRIVERS";
export const GET_DRIVERS_BY_NAME = "GET_DRIVERS_BY_NAME";
export const GET_TEAMS = "GET_TEAMS";
export const GET_DRIVERS_BY_TEAM = "GET_DRIVERS_BY_TEAM";
export const GET_DRIVERS_BY_ORIGIN = "GET_DRIVERS_BY_ORIGIN";
export const GET_VALOR_PAGE = "GET_VALOR_PAGE";

export const POST_DRIVER = 'POST_DRIVER';



export function getDriversByOrigin(origin) {
    return async function (dispatch) {
      try {
        const response = await axios("http://localhost:3001/drivers");
        dispatch({
          type: GET_DRIVERS_BY_ORIGIN,
          payload: { drivers: response.data, origin },
        });
      } catch (error) {
        console.error("Error fetching drivers:", error);
      }
    };
  }
  
export function getDrivers(){
    return async function(dispatch){
        const response = await axios("http://localhost:3001/drivers")
        return dispatch({
            type: GET_DRIVERS,
            payload: response.data
        })
    }
}
export function getDriversByName(name){
    return async function(dispatch){
        const response = await axios(`http://localhost:3001/drivers?name=${name}`)
        return dispatch({
            type: GET_DRIVERS_BY_NAME,
            payload: response.data
        })
    }
}
export function getDriversByTeam(team,valor){
    return async function(dispatch){
        const response = await axios(`http://localhost:3001/drivers?team=${team}`)
        return dispatch({
            type: GET_DRIVERS_BY_TEAM,
            payload: {response:response.data, valor}
        })
    }
}


export function postDriver(driver) {
    return async function(dispatch) {
        try {
        const response = await axios.post('http://localhost:3001/drivers', driver);

        return dispatch({
            type: POST_DRIVER,
            payload: response.data,
        });
        } catch (error) {
        console.error(error);
        }
    };
}

export function getTeams(){
    return async function(dispatch){
        const response = await axios("http://localhost:3001/teams")
        return dispatch({
            type: GET_TEAMS,
            payload: response.data
        })
    }
}
export function getValorPage(valorPage){
        return function(dispatch){

            return dispatch({
                type: GET_VALOR_PAGE,
                payload: valorPage
            })
        }
    }


