import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Warehouse = ({ warehouses, searchQuery, city, cluster, space }) => {
    const navigate = useNavigate();
    const [sortOrder, setSortOrder] = useState('asc');
    const [sortBy, setSortBy] = useState('id');

    const handleSortToggle = (field) => {

        if (field === sortBy) {
            setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
        } else {
            setSortBy(field);
            setSortOrder('asc');
        }
    }


    // Filter warehouses based on the search query
    const filteredWarehouses = [...warehouses].filter((wh) => {

        const cityLowerCase = city.toLowerCase();
        const clusterLowerCase = cluster.toLowerCase();
        return wh.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
            (city === "" || wh.city.toLowerCase().includes(cityLowerCase)) &&
            (cluster === "" || wh.cluster.toLowerCase().includes(clusterLowerCase)) &&
            (space === 0 || wh.space_available <= space);

    })

    const sortedWarehouses = [...filteredWarehouses].sort((a, b) => {
        // sort by ID
        if (sortBy === 'id') {
            return sortOrder === 'asc' ? a.id - b.id : b.id - a.id;
        } else {
            // sort by name
            return sortOrder === 'asc' ? a.city.localeCompare(b.city) : b.city.localeCompare(a.city)
        }

    });

    const handleDetailsPage = (warehouse_id) => {
        navigate(`/details/${warehouse_id}`)
    }

    return (
        <table className="table table-striped table-hover">
            <thead>
                <tr>
                    <th scope="col" onClick={() => handleSortToggle('id')}>
                        WH Id {sortBy === 'id' && sortOrder === 'asc' ? '▲' : '▼'}
                    </th>
                    <th scope="col">WH Name</th>
                    <th scope="col" onClick={() => handleSortToggle('city')}>
                        City {sortBy === 'city' && sortOrder === 'asc' ? '▲' : '▼'}
                    </th>
                    <th scope="col">Cluster</th>
                    <th scope="col">Space Available</th>
                </tr>
            </thead>
            <tbody>
                {
                    sortedWarehouses.length === 0 ? <tr>
                        <th colSpan='5' className='text-center'>No Warehouse Found!</th>
                    </tr> : sortedWarehouses.map((wh) => (
                        <tr key={wh.id} style={{ cursor: "pointer" }} onClick={() => handleDetailsPage(wh.id)}>
                            <th scope="row">{wh.id}</th>
                            <td>{wh.name}</td>
                            <td>{wh.city}</td>
                            <td>{wh.cluster}</td>
                            <td>{wh.space_available}</td>
                        </tr>
                    ))
                }

            </tbody>
        </table>
    )
}

export default Warehouse

