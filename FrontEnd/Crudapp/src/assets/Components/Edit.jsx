import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
function Edit() {
  const {id} = useParams()

  // const [editdata, seteditdata] = useState(null);
  const[Form,setForm]=useState()

  const HandleData = (e) =>{
    setForm({
      ...Form,
      [e.target.name]:e.target.value
    })
  }

  const SubmitData = async (e)=>{
    e.preventDefault()
   try {
    const response = await fetch(`http://localhost:7000/user/${id}`,{
      method:'PATCH',
      headers:{
        'Content-Type':'application/json',
      },
      body:JSON.stringify(Form),
      })
      if (!response.ok){
        const errorData = await response.json()
        alert(`Error:${errorData.message}`)
      }else{
        const data = await response.json()
        setForm({
          Name:'',
          Email:'', 
          Phone:'',
          Password:''
        })
        alert("Edit Successfully",data)
      }
   } catch (error) {
    console.log(error);
    // alert("Error occurred while Edit data")
   }}


  const alldata = async () => {
    await fetch(`http://localhost:7000/user/${id}`)
      .then((res) => res.json())
      .then((json) => {
        setForm(json.EditData);
        // seteditdata(json.EditData)
        console.log(json.EditData);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    alldata();
  }, []);
  return (
    <>
 {Form &&
        <div className=" bg-black flex min-h-fit flex-col justify-center px-4.5 py-6 lg:px-6">

          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            {/* <img className="mx-auto h-10 w-auto" src="" alt="" /> */}
            <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-zinc-50">Edit Your Data</h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            {/* <form className="space-y-6" > */}

              <div> 
                <label for="Name" className="block text-sm/6 font-medium text-zinc-50">Name</label>
                <div className="mt-2">
                  <input type="text" name="Name" id="Name" onChange={HandleData} autocomplete="email" value={Form.Name} required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                </div>
              </div>


              <div>
                <label for="email" className="block text-sm/6 font-medium text-zinc-50">Email address</label>
                <div className="mt-2">
                  <input type="email" name="Email" id="Email" onChange={HandleData} value={Form.Email} autocomplete="email" required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                </div>
              </div>



       

              <div>
                <label for="Phone" className="block text-sm/6 font-medium text-zinc-50">Phone Number</label>
                <div className="mt-2">
                  <input type="number" name="Phone" id="Phone" onChange={HandleData} value={Form.Phone} required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                </div>
              </div>

        
                <button type="submit" onClick={()=>{
                  SubmitData()
                }} className="bg-gradient-to-r to-teal-400 from-blue-500 hover:from-pink-500 hover:to-orange-500 ... flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Update Data</button>
             
            {/* </form> */}
          </div>
        </div>
 }
    


   
    </>
  )
}

export default Edit