import React, { useState, useEffect } from "react";
import { Table, Button, TextInput, Select, Pagination } from "flowbite-react";
import { getByOption, getCustomers, deleteCustomer } from "../utilities/SaveData";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

function CustomerList() {
  const [filterField, setFilterField] = useState("name");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10); // Items to display per page
  const [totalItems, setTotalItems] = useState(0); // Total items from the backend
  const navigate = useNavigate();

  useEffect(() => {
    fetchCustomers();
  }, [currentPage, itemsPerPage]); // Re-fetch data when the page or items per page changes

  const fetchCustomers = async () => {
    try {
      const response = await getCustomers(currentPage, itemsPerPage);
      // console.log(response);
      console.log(response.length)
      setFilteredData(response);
      setTotalItems(response.length); // Assuming the backend sends the total number of items
    } catch (error) {
      console.log("Error in fetching customers:", error);
      toast.error("Failed to load customers");
    }
  };

  const handleSearch = async () => {
    try {
      console.log(searchQuery)
      const data = await getByOption(searchQuery);
      console.log(data);
      setFilteredData(data);
      setTotalItems(data.length);
      setSearchQuery("");
    } catch (error) {
      console.log("Error in searching data:", error);
      toast.error("No Customer Found");
    }
  };

  const handleDelete = async (customerid) => {
   console.log(customerid);
    if (window.confirm(`Are you sure you want to delete ${customerid}?`)) {
      try {
        await deleteCustomer(customerid);
        fetchCustomers(); // Refresh the list after deletion
        toast.success("Customer deleted successfully");
      } catch (error) {
        console.log("Error deleting customer:", error);
        toast.error("Failed to delete customer");
      }
    }
  };
  function formatAmount(amount) {
    // Convert the input to a number
    const numericAmount = Number(amount);
  
    // Check if the conversion is successful
    if (isNaN(numericAmount)) {
      return "No amount"; // Handle invalid input gracefully
    }
  
    // Format the number and append '/-'
    const formattedAmount = new Intl.NumberFormat('en-IN').format(numericAmount);
    return `${formattedAmount}/-`;
  }
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const onPageChange = (page) => setCurrentPage(page);

  return (
    <div className="p-4">
      <Button
        className="mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => navigate("/")}
      >
        Back to Home
      </Button>

      <div className="flex flex-wrap items-center gap-4 mb-6">
        <TextInput
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-1/3"
        />
      
        <Button onClick={handleSearch}>Search</Button>
      </div>

      <div className="w-full overflow-x-auto">
        <Table className="w-full">
          <Table.Head>
            <Table.HeadCell>Name</Table.HeadCell>
            <Table.HeadCell>Father's Name</Table.HeadCell>
            <Table.HeadCell>Phone Number</Table.HeadCell>
            <Table.HeadCell>Dairy No</Table.HeadCell>
            <Table.HeadCell>Page No in Dairy</Table.HeadCell>
            <Table.HeadCell>Address</Table.HeadCell>
            <Table.HeadCell>Amount</Table.HeadCell>
            <Table.HeadCell>
              <span className="sr-only">Edit</span>
            </Table.HeadCell>
            <Table.HeadCell>
              <span className="sr-only">Delete</span>
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {filteredData.length > 0 ? (
              filteredData.map((customer, index) => (
                <Table.Row
                  key={index}
                  className="bg-white dark:border-gray-700 dark:bg-gray-800"
                >
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {customer.name}
                  </Table.Cell>
                  <Table.Cell>{customer.Fathername}</Table.Cell>
                  <Table.Cell>{customer.Phone_number}</Table.Cell>
                  <Table.Cell>{customer.dairyNo}</Table.Cell>
                  <Table.Cell>{customer.pageNoInDairy}</Table.Cell>
                  <Table.Cell>{customer.address}</Table.Cell>
                  <Table.Cell>{formatAmount(customer.amount)}</Table.Cell>
                  <Table.Cell>
                    <a
                      href="#"
                      className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                      onClick={() => navigate(`/update/${customer.id}`)}
                    >
                      Edit
                    </a>
                  </Table.Cell>
                  <Table.Cell>
                    <Button
                      color="failure"
                      onClick={() => handleDelete(customer.id)}
                    >
                      Delete
                    </Button>
                  </Table.Cell>
                </Table.Row>
              ))
            ) : (
              <Table.Row>
                <Table.Cell colSpan={9} className="text-center">
                  No results found
                </Table.Cell>
              </Table.Row>
            )}
          </Table.Body>
        </Table>
      </div>

      {/* Pagination */}
      {(filteredData.length >= 10) ? 
      <div className="flex overflow-x-auto sm:justify-center">
      <Pagination currentPage={currentPage} totalPages={100} onPageChange={onPageChange} />
      </div>: null
      }
    </div>
  );
}

export default CustomerList;
