import '../App.css';
import React, { useState } from 'react';
import axios from 'axios';
//const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Ikd1ZXN0MDA3QGdtYWlsLmNvbSIsInVzZXJJZCI6IjY0MDJlNDBiN2Y0M2U2MzdlMDU5NTFlNiIsImlhdCI6MTY3NzkyMDUyOCwiZXhwIjoxNjc3OTI0MTI4fQ.oeVSaJ5ORnYhO-oMlE9-un68kS_A37MdHw4UsQp2wrk'
const token = JSON.parse(localStorage.getItem('storageToken'));
console.log('token from local storage',token)

const AppProduct = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');

    const handleSignUp = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:3005/foodData/add-products', {name, description, price }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },

            });
            console.log(response.data);
            alert(response.data.message)

            // empty all field when form submit
            setName('');
            setDescription('');
            setPrice('');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSignUp}>
            <center>
                <div className="container-food">

                    <h3 >Add Product Page</h3>
                    <div className="datain">
                        <div>
                            <label htmlFor="name">Food Name:</label><br />
                            <input type="name" id="name" value={name} onChange={(event) => setName(event.target.value)} required /><br /><br />
                        </div>
                        <div>
                            <label htmlFor="description">description:</label><br />
                            <input type="description" id="description" value={description} onChange={(event) => setDescription(event.target.value)} required /><br /><br />
                        </div>
                        <div>
                            <label htmlFor="price">price:</label><br />
                            <input type="price" id="price" value={price} onChange={(event) => setPrice(event.target.value)} required /><br /><br />
                        </div>
                        <button className="button_ans" type="submit">Add Product</button>
                    </div>
                </div>
            </center>
        </form>
    );
};

export default AppProduct;
