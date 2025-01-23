import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import video1 from './Content/9867271-uhd_3840_2160_24fps.mp4'


function Signup(){
  
  const[Form,setForm]=useState({
    Name:'',
    Email:'', 
    Phone:'',
    Password:''
  })

  const HandleData = (e) =>{
    setForm({
      ...Form,
      [e.target.name]:e.target.value
    })
  }

  const SubmitData = async (e)=>{
      e.preventDefault()
     try {
      const response = await fetch('http://localhost:7000/user',{
        method:'POST',
        headers:{
          'Content-Type':'application/json',
        },
        body:JSON.stringify(Form),
        })
        if (!response.ok){
          const error = await response.json()
          alert(`Error:${error.message}`)
        }else{
          const data = await response.json()
          setForm({
            Name:'',
            Email:'', 
            Phone:'',
            Password:''
          })
          alert("Signup Successfully",data)
        }
     } catch (error) {
      console.log(error);
      alert("Error occurred while Sign up")
     }}


  return (
    <>
      <div className='VideoMain'>
        <div className='VideoDiv'>
          <video className="NewVideo" autoPlay loop muted>
            <source src={video1}/>
          </video>
          <div className="MainPage mt-16 flex min-h-fit flex-col justify-center px-4.5 py-6 lg:px-6">

          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            {/* <img className="mx-auto h-10 w-auto" src="" alt="" /> */}
            <h2 className="mt-11 text-center text-2xl/9 font-bold tracking-tight text-zinc-50">Sign Up to your account</h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form  onSubmit={SubmitData} className="space-y-6" action="#" method="POST">

              <div>
                <label for="Name" className="block text-sm/6 font-medium text-zinc-50">Name</label>
                <div className="mt-2">
                  <input type="text" Name="Name" id="Name" onChange={HandleData} value={Form.Name} required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                </div>
              </div>


              <div>
                <label for="email" className="block text-sm/6 font-medium text-zinc-50">Email address</label>
                <div className="mt-2">
                  <input type="email" Name="Email" id="Email"  onChange={HandleData}  value={Form.Email} required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                </div>
              </div>



              <div>
                <div className="flex items-center justify-between">
                  <label for="password" className="block text-sm/6 font-medium text-zinc-50">Password</label>

                </div>
                <div className="mt-2">
                  <input type="password" Name="Password"  onChange={HandleData}  value={Form.Password} id="password" autocomplete="current-password" required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                </div>
              </div>

              <div>
                <label for="Phone" className="block text-sm/6 font-medium text-zinc-50">Phone Number</label>
                <div className="mt-6">
                  <input type="number" Name="Phone" id="Phone"  onChange={HandleData} value={Form.Phone}  required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
                </div>
              </div>

              <div className="mt-6">
                <button type="submit" className=" bg-opacity-10 bg-gradient-to-r from-purple-400 md:from-yellow-500 flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign Up</button>
              </div>
            </form>

            <p className="mt-10 text-center text-sm/6 text-gray-500">
              <Link to="/Login" className="font-semibold text-indigo-600 hover:text-indigo-500">Already Have An Account?</Link>
            </p>
          </div>
        </div>
        </div>
      </div>
    </>
  )
}


export default Signup