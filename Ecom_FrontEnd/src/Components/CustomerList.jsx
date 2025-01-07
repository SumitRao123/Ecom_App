import React, { useState, useEffect } from "react";
import { Table, Button, TextInput, Select, Toast } from "flowbite-react";
import { getByOption, getCustomers,deleteCustomer } from "../utilities/SaveData";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

function CustomerList() {
  const [filterField, setFilterField] = useState("name");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getAllCustomers = async () => {
      try {
        const data = await getCustomers();
        console.log(data);
        setFilteredData(data);
      } catch (error) {
        console.log("Error in getting the data", error);
      }
    };
    getAllCustomers();
  }, []);

  const handleSearch = async () => {
    console.log("Search Query: ", searchQuery);
    console.log("Filter Field: ", filterField);
    try {
      const data = await getByOption(searchQuery, filterField);
      console.log("Filtered Data: ", data);
      setFilteredData(data);
      setSearchQuery("");
    } catch (error) {
      console.log("Error in getting the data", error);
      toast.error("No Customer Found");
    }
  };

  const handleDelete = async (customerName) => {
    if (window.confirm(`Are you sure you want to delete ${customerName}?`)) {
      try {
        await deleteCustomer(customerName); // Call backend to delete the customer
        setFilteredData((prevData) =>
          prevData.filter((customer) => customer.name !== customerName)
        ); // Update state to reflect deletion
        toast.success("Customer deleted successfully");
      } catch (error) {
        console.log("Error deleting customer:", error);
        toast.error("Failed to delete customer");
      }
    }
  };

  return (
    <div className="p-4">
      {/* Back Button */}
      <Button
        className="mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => navigate("/")}
      >
        Back to Home
      </Button>

      {/* Search Controls */}
      <div className="flex flex-wrap items-center gap-4 mb-6">
        <TextInput
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-1/3"
        />
        <Select
          value={filterField}
          onChange={(e) => setFilterField(e.target.value)}
          className="w-1/3"
        >
          <option value="name">Name</option>
          <option value="fatherName">Father's Name</option>
          <option value="address">Address</option>
        </Select>
        <Button onClick={handleSearch}>Search</Button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <Table striped>
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
                  <Table.Cell>{customer.amount}</Table.Cell>
                  <Table.Cell>
                    <a
                      href="#"
                      className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                      onClick={() => navigate(`/update/${customer.name}`)}
                    >
                      Edit
                    </a>
                  </Table.Cell>
                  <Table.Cell>
                    <Button
                      color="failure"
                      onClick={() => handleDelete(customer.name)}
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
    </div>
  );
}

export default CustomerList;
