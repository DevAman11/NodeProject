import React, { useEffect ,useState} from 'react'

function Userdata() {
const [Data, setData] = useState([])

useEffect( async ()=>{
  await fetch("http://localhost:7000/user")
  .then(res=>res.json())
  .then(json=>{setData(json)
    console.log(json);
    
  })
  .catch( json=>console.log(json)
  )


},[])


  return (
   <>


<table className="table table-dark backdrop:blur-">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Phone</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td className='btn btn-primary' >Edit</td>
      <td className='btn btn-danger '>Delete</td>
      <td className='btn btn-success'>Update</td>


    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td className='btn btn-primary' >Edit</td>
      <td className='btn btn-danger '>Delete</td>
      <td className='btn btn-success'>Update</td>

    
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
      <td className='btn btn-primary' >Edit</td>
      <td className='btn btn-danger '>Delete</td>
      <td className='btn btn-success'>Update</td>

     

    </tr>
  </tbody>
</table>
   </>
  )
}

export default Userdata