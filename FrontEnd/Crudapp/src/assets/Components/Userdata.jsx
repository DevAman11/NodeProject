import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Userdata() {
  const [data, setData] = useState([]);

  const alldata = async () => {
    await fetch("http://localhost:7000/user")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        console.log(json);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    alldata();
  }, []);

  const DeleteUser = async (id) => {
    try {
      const response = await fetch(`http://localhost:7000/user/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      
      // if (response.ok) {
      //   console.log('User deleted successfully');
       
      // } else {
      //   console.log('Failed to delete user');
      // }
    } catch (error) {
      console.log('Error deleting user:',error);
    }
  };

  // const DeleteUser = async (id) => {
  //   try {
  //     const response = await fetch(`http://localhost:7000/user/${id}`, {
  //       method: 'DELETE',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //     });
      
  //     if (response.ok) {
  //       console.log('User deleted successfully');
  //       // Optionally, redirect or update the UI after deletion
  //     } else {
  //       console.log('Failed to delete user');
  //     }
  //   } catch (error) {
  //     console.error('Error deleting user:', error);
  //   }
  // };
  

  return (
    <>
      <form>
        <table className="table table-dark backdrop:blur-md">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Password</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 &&
              data.map((Value) => {
                const { _id, Name, Email, Phone, Password } = Value;
                return (
                  <tr key={_id}>
                    <td>{_id}</td>
                    <td>{Name}</td>
                    <td>{Email}</td>
                    <td>{Password}</td>
                    <td>{Phone}</td>
                    <td>
                      <button className="btn btn-primary">
                        <Link to={`/Edit/${_id}`}> Edit</Link>
                      </button>

                      <button
                        onClick={() => DeleteUser(_id)}
                        className="btn btn-danger"
                      >
                        Delete
                      </button>
                      {/* <button onClick={DeleteUser} className="btn btn-danger">
                        <Link to={`/Delete/${_id}`}>Delete</Link>
                      </button> */}
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </form>
    </>
  );
}

export default Userdata;
