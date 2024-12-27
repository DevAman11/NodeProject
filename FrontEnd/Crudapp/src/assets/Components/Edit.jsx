import React from 'react'
import { Link } from 'react-router-dom'
function Edit() {
  return (
   <>
      {
        alert(
            <div className="MainPage flex min-h-fit flex-col justify-center px-4.5 py-6 lg:px-6">

<div className="sm:mx-auto sm:w-full sm:max-w-sm">
  {/* <img className="mx-auto h-10 w-auto" src="" alt="" /> */}
  <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-zinc-50">Sign Up to your account</h2>
</div>

<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
  <form className="space-y-6" action="#" method="POST">

    <div>
      <label for="Name" className="block text-sm/6 font-medium text-zinc-50">Name</label>
      <div className="mt-2">
        <input type="text" name="Name" id="email" autocomplete="email" required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
      </div>
    </div>


    <div>
      <label for="email" className="block text-sm/6 font-medium text-zinc-50">Email address</label>
      <div className="mt-2">
        <input type="email" name="email" id="email" autocomplete="email" required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
      </div>
    </div>



    <div>
      <div className="flex items-center justify-between">
        <label for="password" className="block text-sm/6 font-medium text-zinc-50">Password</label>

      </div>
      <div className="mt-2">
        <input type="password" name="Password" id="password" autocomplete="current-password" required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
      </div>
    </div>

    <div>
      <label for="Phone" className="block text-sm/6 font-medium text-zinc-50">Phone Number</label>
      <div className="mt-2">
        <input type="number" name="Phone" id="Phone" required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
      </div>
    </div>

    <div>
      <button type="submit" className="bg-opacity-10 bg-gradient-to-r from-purple-400 md:from-yellow-500 flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign Up</button>
    </div>
  </form>

  <p className="mt-10 text-center text-sm/6 text-gray-500">
    <Link to="/Login" className="font-semibold text-indigo-600 hover:text-indigo-500">Already Have An Account?</Link>
  </p>
</div>
</div>
        )
      }
   </>
  )
}

export default Edit