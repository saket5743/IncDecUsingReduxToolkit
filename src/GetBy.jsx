import React, { useEffect, useState } from 'react'

const GetBy = () => {
    const [saket, setSaket] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response)=>response.json())
        .then((data)=>{
            setSaket(data)
            console.log(data, "dataat")
        })
    },[])
  return (
    <div>
       <div>
        {saket.map((item)=>(
            <div key={item.id} style={{border:'2px solid gray', backgroundColor:'green', marginTop:'20px', height:'250px', width:'400px'}}>
                <p>ID : {item.id}</p>
                <p>Email : {item.email}</p>
                <p>Name : {item.name}</p>
                <p>Address : {item.address.street}</p>
                <p>Zip Code : {item.address.zipcode}</p>
                <p>Company bs : {item.company.bs}</p>
            </div>
        ))}
       </div>
    </div>
  )
}

export default GetBy