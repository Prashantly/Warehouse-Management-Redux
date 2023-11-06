import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { updateWarehouse } from '../states/actions';

const Details = () => {
    // Retrieve the "id" parameter from the URL
    const { id } = useParams();
    const dispatch = useDispatch();

    // Get the list of warehouses from the Redux store
    const warehouses = useSelector((state) => state.warehouses.wareHouseList);

    // Initialize local state variables
    const [warehouse, setWarehouse] = useState({});
    const [isEditing, setIsEditing] = useState(false);

    // Fetch and update the warehouse data based on the "id" parameter and Redux store
    useEffect(() => {
        if (id && warehouses.length > 0) {
            // Find the selected warehouse using the "id" parameter
            let selectedWarehouse = warehouses.find((w) => {
                return w.id === parseInt(id);
            });

            // Set the selected warehouse data in the local state
            setWarehouse(selectedWarehouse);
        }
    }, [id, warehouses]);

    // Handle the "Edit" button click
    const handleEdit = (e) => {
        e.preventDefault();
        setIsEditing(true);
    }

    // Handle the "Save Changes" button click
    const handleSaveChanges = (e) => {
        e.preventDefault();
        // Dispatch the "updateWarehouse" action with the updated warehouse data
        dispatch(updateWarehouse(warehouse, id));
        setIsEditing(false);
    }

    // Handle input field changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        // Handle "is_registered" and "is_live" fields separately
        if (name === "is_registered" || name === "is_live") {
            setWarehouse((prevWarehouse) => ({
                ...prevWarehouse,
                [name]: value === "yes", // Convert the select option to a boolean
            }));
        } else {
            setWarehouse({ ...warehouse, [name]: value });
        }
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className="card w-50 m-auto mt-5 shadow">
                    <div className="card-body">
                        {
                            !isEditing ? (
                                // Display warehouse details (read-only) when not in edit mode
                                <>
                                    <h3 className="card-title">{warehouse.name}</h3>
                                    <div className="detailInfo">
                                        <p><strong>Code:</strong> {warehouse.code}</p>
                                        <p><strong>City:</strong> {warehouse.city}</p>
                                        <p><strong>Space Available:</strong> {warehouse.space_available} Sq.m</p>
                                        <p><strong>Type:</strong> {warehouse.type}</p>
                                        <p><strong>Cluster:</strong> {warehouse.cluster}</p>
                                        <p><strong>Is Registered:</strong> {warehouse.is_registered ? 'Yes' : 'No'}</p>
                                        <p><strong>Is Live:</strong> {warehouse.is_live ? 'Yes' : 'No'}</p>
                                    </div>
                                </>
                            ) : (
                                // Display input fields for editing when in edit mode
                                <>
                                    <h3 className="card-title">
                                        <input type="text" name="name" placeholder='Enter Warehouse name' value={warehouse.name} onChange={handleInputChange} />
                                    </h3>
                                    <div className="detailInfo">
                                        <p><strong>Code:</strong> {warehouse.code}</p>
                                        <p><strong>City:</strong>
                                            <input type="text" placeholder='Enter city...' name="city" value={warehouse.city} onChange={handleInputChange} />
                                        </p>
                                        <p><strong>Space Available:</strong>
                                            <input type="text" placeholder='Enter space available...' name="space_available" value={warehouse.space_available} onChange={handleInputChange} />
                                        </p>
                                        <p><strong>Type:</strong> {warehouse.type}</p>
                                        <p><strong>Cluster:</strong> <input type="text" placeholder='Enter Cluster name...' name="cluster" value={warehouse.cluster} onChange={handleInputChange} /></p>
                                        <p><strong>Is Registered:</strong>
                                            <select name="is_registered" value={warehouse.is_registered ? "yes" : "no"} onChange={handleInputChange}>
                                                <option value="yes">Yes</option>
                                                <option value="no">No</option>
                                            </select>
                                        </p>
                                        <p><strong>Is Live:</strong>
                                            <select name="is_live" value={warehouse.is_live ? "yes" : "no"} onChange={handleInputChange}>
                                                <option value="yes">Yes</option>
                                                <option value="no">No</option>
                                            </select>
                                        </p>
                                    </div>
                                </>
                            )
                        }
                        {
                            isEditing ? (
                                // Display "Save Changes" and "Cancel" buttons when in edit mode
                                <>
                                    <button className="btn btn-outline-info me-2" onClick={handleSaveChanges}>
                                        Save Changes
                                    </button>
                                    <button className="btn btn-outline-danger me-2" onClick={() => setIsEditing(false)}>
                                        Cancel
                                    </button>
                                </>
                            ) : (
                                // Display the "Edit" button when not in edit mode
                                <button className="btn btn-warning" onClick={handleEdit}>
                                    Edit
                                </button>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;

