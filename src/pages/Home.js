import React, { useEffect } from 'react';
import Warehouse from '../components/Warehouse';
import { useDispatch, useSelector } from 'react-redux';
import data from '../warehouse_data'; // Import the data source
import { fetchWarehouses } from '../states/actions'; // Import the action for fetching warehouses
import Search from '../components/Search';
import FilterComponent from '../components/FilterComponent';
import styles from "../styles/Home.module.css"

const Home = () => {
    const dispatch = useDispatch();
    const warehouses = useSelector((state) => state.warehouses.wareHouseList); // Select the list of warehouses from the Redux store
    const searchQuery = useSelector((state) => state.warehouses.searchQuery); // Select the search query filter
    const city = useSelector((state) => state.warehouses.cityFilter); // Select the city filter
    const cluster = useSelector((state) => state.warehouses.clusterFilter); // Select the cluster filter
    const space = useSelector((state) => state.warehouses.spaceLimitFilter); // Select the space limit filter

    useEffect(() => {
        dispatch(fetchWarehouses(data)); // Fetch warehouses from the 'warehouse_data' source when the component mounts
    }, [dispatch]); // The effect depends on the 'dispatch' function

    return (
        <div className={styles.homeContainer}>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-sm-12 filter-column mt-5">
                        <div className={styles.sidebar}>
                            <p className={styles.heading}>Filters</p>
                            <Search /> {/* Render the search component */}
                            <FilterComponent /> {/* Render the filter component */}
                        </div>
                    </div>
                    <div className="col-md-8 col-sm-12">
                        <h1 className={styles.pageTitle}>Warehouse List</h1>
                        <Warehouse
                            warehouses={warehouses} // Pass the list of warehouses as a prop
                            searchQuery={searchQuery} // Pass the search query as a prop
                            city={city} // Pass the city filter as a prop
                            cluster={cluster} // Pass the cluster filter as a prop
                            space={space} // Pass the space limit filter as a prop
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;


