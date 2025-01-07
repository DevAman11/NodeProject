import React from 'react'
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Logindata() {
  const { id } = useParams();
  const [Form, setForm] = useState({
    Name: '',
    Email: '',
    Phone: '',
    Password: ''
  });

  const HandleData = (e) => {
    setForm({ ...Form,
      [e.target.name]: e.target.value
    });
  };

  const SubmitData = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:7000/user/${id}`,{
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body:JSON.stringify(Form),
      });
      if (!response.ok) {
        const errorData = await response.json();
        alert(`Error: ${errorData.message}`);
      } else {
        const data = await response.json();
        setForm({
          Name: '',
          Email: '',
          Phone: '',
          Password: ''
        });
        alert(`Edit Successfully: ${JSON.stringify(data)}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const alldata = async () => {
    try {
      const res = await fetch(`http://localhost:7000/user/${id}`);
      if (!res.ok) throw new Error('Failed to fetch data');
      const json = await res.json();
      setForm(json.EditData || {
        Name: '',
        Email: '',
        Phone: '',
        Password: ''
      });
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    alldata();
  }, []);
  
 
    
  return (
    <>

        <table className="table table-dark backdrop:blur-md">
          <thead>
            <tr>
              <th scope="col">Id</th>
             
              <th scope="col">Email</th>
              
              <th scope="col">Password</th>
          
            </tr>
          </thead>
          <tbody>
          
            {Form && 
              <tr>
              <td scope="col">{Form._id}</td>
             
              <td scope="col">{Form.Email}</td>
              
              <td scope="col">{Form.Password}</td>
          
            </tr>
             } 
          </tbody>
        </table>

    </>
  )
}

export default Logindata
