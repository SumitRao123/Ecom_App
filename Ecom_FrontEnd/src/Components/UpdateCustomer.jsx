import React, { useState, useEffect } from "react";
import { updateCustomer, getCustomer } from "../utilities/SaveData";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router";

function UpdateCustomer() {
  let { id } = useParams(); // Assuming you're passing customer ID in the route
  // console.log(name);
  id = id.replace(":", ""); // Remove the colon from the ID;
  const navigate = useNavigate();
  const [customerId,setCustomerId] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    Fathername: "",
    Phone_number: "",
    dairyNo: "",
    pageNoInDairy: "",
    address: "",
    amount: "",
  });

  useEffect(() => {
    // Fetch customer details based on ID
    // console.log(name);
    const fetchCustomerData = async () => {
      try {
        const customerData = await getCustomer(id); // Fetch data
        console.log(customerData);
        setCustomerId(customerData.id);
        setFormData(customerData); // Set form data
      
      } catch (error) {
        console.error("Error fetching customer data:", error);
        toast.error("Failed to load customer data.");
      }
    };
    fetchCustomerData();
  }, [name]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateCustomer(customerId, formData); // Update customer data
      toast.success("Customer data has been updated successfully!");
      navigate("/"); // Navigate back to the customer list or another page
    } catch (error) {
      console.error("Error updating customer data:", error);
      toast.error("Failed to update customer data.");
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-6">Update Customer</h2>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        {/* Name */}
        <div className="mb-4 flex items-center">
          <label className="w-40 text-gray-700 font-bold">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="border rounded w-full py-2 px-3 text-gray-700"
          />
        </div>

        {/* Father Name */}
        <div className="mb-4 flex items-center">
          <label className="w-40 text-gray-700 font-bold">Father Name:</label>
          <input
            type="text"
            name="Fathername"
            value={formData.Fathername}
            onChange={handleChange}
            required
            className="border rounded w-full py-2 px-3 text-gray-700"
          />
        </div>

        {/* Phone Number */}
        <div className="mb-4 flex items-center">
          <label className="w-40 text-gray-700 font-bold">Phone Number:</label>
          <input
            type="tel"
            name="Phone_number"
            value={formData.Phone_number}
            onChange={handleChange}
            required
            className="border rounded w-full py-2 px-3 text-gray-700"
          />
        </div>

        {/* Dairy No */}
        <div className="mb-4 flex items-center">
          <label className="w-40 text-gray-700 font-bold">Dairy No:</label>
          <input
            type="text"
            name="dairyNo"
            value={formData.dairyNo}
            onChange={handleChange}
            required
            className="border rounded w-full py-2 px-3 text-gray-700"
          />
        </div>

        {/* Page No in Dairy */}
        <div className="mb-4 flex items-center">
          <label className="w-40 text-gray-700 font-bold">Page No in Dairy:</label>
          <input
            type="text"
            name="pageNoInDairy"
            value={formData.pageNoInDairy}
            onChange={handleChange}
            required
            className="border rounded w-full py-2 px-3 text-gray-700"
          />
        </div>

        {/* Address */}
        <div className="mb-4 flex items-center">
          <label className="w-40 text-gray-700 font-bold">Address:</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            className="border rounded w-full py-2 px-3 text-gray-700"
          ></textarea>
        </div>

        {/* Amount */}
        <div className="mb-4 flex items-center">
          <label className="w-40 text-gray-700 font-bold">Amount:</label>
          <input
            type="text"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            required
            className="border rounded w-full py-2 px-3 text-gray-700"
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-between">
          <button
            type="button"
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none"
            onClick={() => navigate("/view")}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
}

export default UpdateCustomer;
