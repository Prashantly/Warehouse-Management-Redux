import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { setSearchQuery } from "../states/actions"
import styles from "../styles/search.module.css"

const Search = () => {
    const dispatch = useDispatch();
    const [search, setSearch] = useState("");

    console.log(search)
    const handleSearchQuery = (e) => {
        // Get the search query from the input field
        const query = e.target.value;

        // Update the local state with the query
        setSearch(query);
        if (query.length > 3) {
            // Dispatch action to search warehouses
            dispatch(setSearchQuery(query));
        }
    }
    return (
        <form className={`${styles.searchform} mb-4`} role="search">
            <input
                className={`${styles.searchinput} form-control me-2`}
                type="search"
                placeholder="Search Warehouse"
                onChange={handleSearchQuery}
            />
        </form>

    )
}

export default Search