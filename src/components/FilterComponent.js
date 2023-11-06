import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setCityFilter, setClusterFilter, setSpaceLimitFilter } from '../states/actions';
import styles from "../styles/Filter_styles.module.css"

const FilterComponent = () => {
    const dispatch = useDispatch();
    const [city, setCity] = useState('');
    const [cluster, setCluster] = useState('');
    const [spaceLimit, setSpaceLimit] = useState(0);

    const applyFilters = () => {
        // Dispatch actions to set the filter values in the Redux store
        dispatch(setCityFilter(city));
        dispatch(setClusterFilter(cluster));
    };

    const handleSpaceChange = (e) => {
        setSpaceLimit(Number(e.target.value));
        dispatch(setSpaceLimitFilter(spaceLimit));
    };

    return (
        <div className={styles.filterContainer}>
            <input
                type="text"
                placeholder="Filter by city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className={styles.filterInput}
            />
            <input
                type="text"
                placeholder="Filter by cluster"
                value={cluster}
                onChange={(e) => setCluster(e.target.value)}
                className={styles.filterInput}
            />
            <label htmlFor="spaceLimitRange" className={styles.filterLabel}>
                Filter by space available limit:
            </label>
            <input
                type="range"
                id="spaceLimitRange"
                min="0"
                max="3000000" // Set the maximum value as needed
                step="500" // Set the step size as needed
                value={spaceLimit}
                onChange={handleSpaceChange}
                className={styles.rangeInput}
            />
            <span className={styles.rangeValue}>{spaceLimit}</span>
            <button onClick={applyFilters} className={styles.filterButton}>
                Apply Filters
            </button>
        </div>
    );
};

export default FilterComponent;
