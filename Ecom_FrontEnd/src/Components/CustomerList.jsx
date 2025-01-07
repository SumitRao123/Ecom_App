import React, { useState, useEffect } from "react";
import { Table, Button, TextInput, Select, Toast } from "flowbite-react";
import { getByOption, getCustomers } from "../utilities/SaveData";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";
const customers = [
  {
    name: "John Doe",
    fatherName: "Richard Doe",
    phoneNumber: "9876543210",
    dairyNo: 1,
    pageNoInDairy: 15,
    address: "123 Elm Street, Springfield",
    amount: "$200",
  },
  {
    name: "Jane Smith",
    fatherName: "Michael Smith",
    phoneNumber: "9123456780",
    dairyNo: 2,
    pageNoInDairy: 30,
    address: "456 Oak Avenue, Shelbyville",
    amount: "$350",
  },
  {
    name: "Alice Johnson",
    fatherName: "Robert Johnson",
    phoneNumber: "9988776655",
    dairyNo: 3,
    pageNoInDairy: 45,
    address: "789 Maple Drive, Ogdenville",
    amount: "$400",
  },
  {
    name: "Bob Williams",
    fatherName: "Charles Williams",
    phoneNumber: "8899776655",
    dairyNo: 4,
    pageNoInDairy: 60,
    address: "101 Pine Lane, Capital City",
    amount: "$1500000",
  },
];

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
                </Table.Row>
              ))
            ) : (
              <Table.Row>
                <Table.Cell colSpan={8} className="text-center">
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
