export const baseURL =  'http://localhost:9091/App' //  "https://ecom-app-1eoc.onrender.com/App";
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

export const getCustomer = async (name) => {
     console.log(name);
    const response = await fetch(`${baseURL}/get/byname/${name}`);
    return response.json();
}
export const updateCustomer = async (name,customer) => {
    const response = await fetch(`${baseURL}/update/${name}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(customer),
    });
    return response.json();
}
export const  getByOption = async (query,option) => {
    const response = await fetch(`${baseURL}/get/${option}/${query}`);
    return response.json();
}
export const deleteCustomer = async (name) => {
     const response = await fetch(`${baseURL}/delete/${name}`, {
          method: 'DELETE',
     });
     if(!response.ok) throw new Error('Failed to delete customer');
     return response.json();
}