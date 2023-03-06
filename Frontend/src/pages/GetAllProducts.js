import React, { useState, useEffect } from 'react';
import axios from 'axios';
const token = JSON.parse(localStorage.getItem('storageToken'));
console.log('token from local storage',token)
//const token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Ikd1ZXN0MDA3QGdtYWlsLmNvbSIsInVzZXJJZCI6IjY0MDJlNDBiN2Y0M2U2MzdlMDU5NTFlNiIsImlhdCI6MTY3ODA4NjY0NywiZXhwIjoxNjc4MDkwMjQ3fQ.VS4Nfhbbg4UFEzR436BM2UB0zEE2QMYNyLl9gLl9RXc"

async function deleteUser(id) {
  console.log('product id =',id)
  try {
    
    const response = await axios.delete(`http://localhost:3005/foodData/del-products/${id}`,{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response.data);
    alert(response.data.message)
    
  } catch (error) {
    console.error(error);
  }
};

const GetAllProducts = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3005/foodData/get-products',{
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
        setData(response.data.products);
        // console.log('I am Here', response.data)
        console.log('I am Here', response.data.message)
        console.log('Data In Payload', response.data.products)
        // console.log('I am Here', response.data.name)
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    
<div className="container-products" >
<br/>
    
      <div><h1>Get All Data From Data Base </h1>
      <table className='table'>
        <tbody>
          <tr>
          <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Description</th>
            <th>Opertation</th>

          </tr>
          {
            data.map((item, i) =>
              <tr key={i}>
                <th>{item._id}</th>
                <th>{item.name}</th>
                <th>{item.price}</th>
                <th>{item.description}</th>
                <th><button className="button_ans" onClick={() => deleteUser(item._id)}>Delete</button></th>
              </tr>
            )
          }
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default GetAllProducts;
