import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

function Edit() {
  const { id } = useParams();
  const [Form, setForm] = useState({
    Name: '',
    Email: '',
    Phone: '',
    Password: ''
  });

  const HandleData = (e) => {
    setForm({
      ...Form,
      [e.target.name]: e.target.value
    });
  };

  const SubmitData = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:7000/user/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(Form),
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
      {Form && (
        <div className="bg-black flex min-h-fit flex-col justify-center px-4.5 py-6 lg:px-6">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-zinc-50">
              Edit Your Data
            </h2>
          </div>
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form onSubmit={SubmitData}>
              <div>
                <label htmlFor="Name" className="block text-sm/6 font-medium text-zinc-50">
                  Name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="Name"
                    id="Name"
                    onChange={HandleData}
                    value={Form.Name}
                    autoComplete="name"
                    required
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 ..."
                  />
                </div>
              </div>

              <div>
                <label htmlFor="Email" className="block text-sm/6 font-medium text-zinc-50">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    type="email"
                    name="Email"
                    id="Email"
                    onChange={HandleData}
                    value={Form.Email}
                    autoComplete="email"
                    required
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base ..."
                  />
                </div>
              </div>

              <div>
                <label htmlFor="Phone" className="block text-sm/6 font-medium text-zinc-50">
                  Phone Number
                </label>
                <div className="mt-2">
                  <input
                    type="number"
                    name="Phone"
                    id="Phone"
                    onChange={HandleData}
                    value={Form.Phone}
                    required
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base ..."
                  />
                </div>
              </div>

              <button
                type="submit"
                className="bg-gradient-to-r to-teal-400 from-blue-500 hover:from-pink-500 ..."
              >
                Update Data
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Edit;
