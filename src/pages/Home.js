import React, { useEffect } from 'react';
import Warehouse from '../components/Warehouse';
import { useDispatch, useSelector } from 'react-redux';
import data from '../warehouse_data';
import { fetchWarehouses } from '../states/actions';
import Search from '../components/Search';
import FilterComponent from '../components/FilterComponent';
import styles from "../styles/Home.module.css"

const Home = () => {
    const dispatch = useDispatch();
    const warehouses = useSelector((state) => state.warehouses.wareHouseList);
    console.log(warehouses)
    const searchQuery = useSelector((state) => state.warehouses.searchQuery);
    const city = useSelector((state) => state.warehouses.cityFilter);
    const cluster = useSelector((state) => state.warehouses.clusterFilter);
    const space = useSelector((state) => state.warehouses.spaceLimitFilter);

    useEffect(() => {
        dispatch(fetchWarehouses(data));
    }, [dispatch]);

    return (
        <div className={styles.homeContainer}>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-sm-12 filter-column mt-5">
                        <div className={styles.sidebar}>
                            <p className={styles.heading}>Filters</p>
                            <Search />
                            <FilterComponent />
                        </div>
                    </div>
                    <div className="col-md-8 col-sm-12">
                        <h1 className={styles.pageTitle}>Warehouse List</h1>
                        <Warehouse
                            warehouses={warehouses}
                            searchQuery={searchQuery}
                            city={city}
                            cluster={cluster}
                            space={space}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;

