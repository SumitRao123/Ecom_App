export const baseURL = 'http://localhost:9091/App' //"https://ecom-app-vrcd.onrender.com/App";
// 
console.log(baseURL);
export const registerCustomer = async (customer) => {
    const response = await fetch(`${baseURL}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(customer),
    });
    return response.json();
}
export const getCustomers = async (pageNumber,pageSize) => {
    const response = await fetch(`${baseURL}/getAll?pageNumber=${pageNumber}&pageSize=${pageSize}`);
    return response.json();
}

export const getCustomer = async (id) => {
     console.log(id);
    const response = await fetch(`${baseURL}/get/byId/${id}`);
    return response.json();
}
export const updateCustomer = async (id,customer) => {
    const response = await fetch(`${baseURL}/update/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(customer),
    });
    return response.json();
}
export const  getByOption = async (query) => {
    const response = await fetch(`${baseURL}/get/${query}`);
    return response.json();
}
export const deleteCustomer = async (id) => {
     const response = await fetch(`${baseURL}/delete/${id}`, {
          method: 'DELETE',
     });
     if(!response.ok) throw new Error('Failed to delete customer');
     return response.json();
}