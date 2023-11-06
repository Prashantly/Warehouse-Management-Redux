import { FETCH_WAREHOUSES, SET_SEARCH_QUERY, SET_CITY_FILTER, SET_CLUSTER_FILTER, SET_SPACE_LIMIT_FILTER, UPDATE_WAREHOUSE } from "../actions"


const initialState = {
    wareHouseList: [],
    searchQuery: "",
    cityFilter: "",
    clusterFilter: "",
    spaceLimitFilter: 0,
}

export function warehouseReducer(state = initialState, action) {

    switch (action.type) {
        case FETCH_WAREHOUSES:
            return {
                ...state,
                wareHouseList: [...action.payload]
            }
        case SET_SEARCH_QUERY:
            return {
                ...state,
                searchQuery: action.payload,
            }
        case SET_CITY_FILTER:
            return {
                ...state,
                cityFilter: action.payload,
            }

        case SET_CLUSTER_FILTER:
            return {
                ...state,
                clusterFilter: action.payload,
            }

        case SET_SPACE_LIMIT_FILTER:
            return {
                ...state,
                spaceLimitFilter: action.payload
            }

        case UPDATE_WAREHOUSE:
            let warehouses = state.wareHouseList;
            const index = warehouses.findIndex((warehouse) => parseInt(warehouse.id) === parseInt(action.payload.id));

            if (index !== -1) {
                // Update the warehouse at the found index
                warehouses[index] = { ...warehouses[index], ...action.payload.warehouse };
            }

            return {
                ...state,
                wareHouseList: [...warehouses],
            };



        default:
            return state;

    }
}