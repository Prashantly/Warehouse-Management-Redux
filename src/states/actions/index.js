export const FETCH_WAREHOUSES = "FETCH_WAREHOUSES"
export const SET_SEARCH_QUERY = "SET_SEARCH_QUERY"
export const SET_CITY_FILTER = "SET_CITY_FILTER";
export const SET_CLUSTER_FILTER = "SET_CLUSTER_FILTER";
export const SET_SPACE_LIMIT_FILTER = "SET_SPACE_LIMIT_FILTER";
export const UPDATE_WAREHOUSE = "UPDATE_WAREHOUSE";

export const fetchWarehouses = (warehouses) => {
    return {
        type: FETCH_WAREHOUSES,
        payload: warehouses.warehouseData
    }
}

export const setSearchQuery = (query) => {
    return {
        type: SET_SEARCH_QUERY,
        payload: query
    }
}

export const setCityFilter = (city) => {
    return {
        type: SET_CITY_FILTER,
        payload: city
    }
}

export const setClusterFilter = (cluster) => {
    return {
        type: SET_CLUSTER_FILTER,
        payload: cluster
    }
}

export const setSpaceLimitFilter = (space) => {
    return {
        type: SET_SPACE_LIMIT_FILTER,
        payload: space
    }
}

export const updateWarehouse = (warehouse, id) => {
    return {
        type: UPDATE_WAREHOUSE,
        payload: {
            warehouse,
            id
        }
    }
}