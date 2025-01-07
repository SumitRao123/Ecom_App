import React, { useState } from "react";
import { registerCustomer } from "../utilities/SaveData";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

function AddCustomer() {
  const [formData, setFormData] = useState({
    name: "",
    Fathername: "",
    Phone_number: "",
    dairyNo: "",
    pageNoInDairy: "",
    address: "",
    amount: "",
  });
 const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
       console.log(formData);
        const data = await registerCustomer(formData);
        console.log("Data has been submitted successfully");
        console.log( data);
        toast.success("Data has been submitted successfully");
        setFormData({ name: "", Fathername: "", Phone_number: "", dairyNo: "", pageNoInDairy: "", address: "", amount: "" });
    } catch (error) {
      console.log("Error in submitting the form", error);
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-6">Add Customer</h2>
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
            type="number"
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
            type="number"
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
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none"
            onClick={()=>navigate("/")}
          >
            Go Back
          </button>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none"
          >
            Submit
          </button>
          
        </div>
      </form>
    </div>
  );
}

export default AddCustomer;
