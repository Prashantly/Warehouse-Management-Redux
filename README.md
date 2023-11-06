
# Warehouse Management System

## Assignment Description

The Warehouse Management System is a two-page web application designed to efficiently manage and display information about warehouses. The system includes a listing page for viewing warehouses and a details page for editing warehouse information. Here is a detailed description of the two pages and the features implemented:


## Page 1

## Warehouse Listing

The Warehouse Listing page provides an optimized and modular way to view and manage a list of warehouses. It includes the following features:

* Search Functionality: You can search for warehouses by their name, making it easy to find a specific warehouse.

* Filtering Options: You can filter the warehouses based on the following criteria:

* City: Filter warehouses by their city location.
* Cluster: Filter warehouses by their cluster.
* Space Available Limit: Filter warehouses based on the space available.
## Page 2

## Warehouse Details and Editing

The Warehouse Details page allows you to view detailed information about a specific warehouse and edit its information. The page provides the following functionality:

1. Warehouse Selection: Clicking on a warehouse item in the listing page redirects you to the Warehouse Details page. This page displays detailed information about the selected warehouse.

2. Edit Warehouse Information: You can edit the following warehouse information:

* Cluster: Modify the cluster to which the warehouse belongs.
* Warehouse Name: Update the name of the warehouse.
* City: Change the city where the warehouse is located.
* Space Available: Update the available space in the warehouse.
* Warehouse Live Status: Toggle the live status of the warehouse  between "Yes" and "No."
## Additional Points to Note

1. Navigation: The application uses react-router-dom for navigation between pages, ensuring smooth transitions between the listing and details pages.

2. Data Handling: Redux is used for data management, providing a centralized state management solution that optimizes store calls.

3. Efficient Data Display: The data is shown in an efficient and user-friendly way, making it easy for users to search, filter, and edit warehouse information.
## How to Use

1. Clone or download the Warehouse Management System repository.

2. nstall the necessary dependencies using npm or yarn.

3. Start the application, and you can explore the two pages: Warehouse Listing and Warehouse Details.

4. Use the search, filtering, and editing features to manage and view the warehouse data effectively.

 ### Note :
The system relies on the use of Redux for state management and react-router for navigation. Ensure that you have the required libraries and tools installed to run the application successfully.
## Warehouse.json File

The application's data is sourced from the "warehouse.json" file. You can find this file [here](https://drive.google.com/file/d/1lePlZg-_dXxq4u7Zwt_AFcNm4ryypfTJ/view?usp=sharing). It contains the initial dataset for the warehouses used by the application.

## Conclusion

The Warehouse Management System is designed to provide an efficient and user-friendly way to manage and view warehouse information. Its modular and optimized approach, along with the use of Redux (or Vuex) and react-router (or vue-router), ensures a seamless and robust user experience for warehouse management.
