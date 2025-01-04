import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Edit() {
  const { id } = useParams();
  const [Form, setForm] = useState({
    Name: "",
    Email: "",
    Phone: "",
    Password: "",
  });

  const handleData = (e) => {
    setForm({
      ...Form,
      [e.target.name]: e.target.value,
    });
  };

  const submitData = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:7000/user/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(Form),
      });

      if (!response.ok) {
        const errorData = await response.json();
        alert(`Error: ${errorData.message}`);
      } else {
        const data = await response.json();
        alert("Edit Successfully");
        console.log("Updated Data:", data);
        setForm({
          Name: "",
          Email: "",
          Phone: "",
          Password: "",
        });
      }
    } catch (error) {
      console.error("Error occurred while editing data:", error);
      // alert("Error occurred while editing data.");
    }
  };

  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:7000/user/${id}`);
      const json = await response.json();
      setForm(json.EditData || {});
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {Form && (
        <div className="bg-black flex min-h-fit flex-col justify-center px-4.5 py-6 lg:px-6">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl font-bold text-zinc-50">
              Edit Your Data
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form onSubmit={submitData} className="space-y-6">
              <div>
                <label
                  htmlFor="Name"
                  className="block text-sm font-medium text-zinc-50"
                >
                  Name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="Name"
                    id="Name"
                    onChange={handleData}
                    value={Form.Name}
                    required
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-indigo-600"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="Email"
                  className="block text-sm font-medium text-zinc-50"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    type="email"
                    name="Email"
                    id="Email"
                    onChange={handleData}
                    value={Form.Email}
                    required
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-indigo-600"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="Phone"
                  className="block text-sm font-medium text-zinc-50"
                >
                  Phone Number
                </label>
                <div className="mt-2">
                  <input
                    type="number"
                    name="Phone"
                    id="Phone"
                    onChange={handleData}
                    value={Form.Phone}
                    required
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-indigo-600"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-indigo-600"
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
