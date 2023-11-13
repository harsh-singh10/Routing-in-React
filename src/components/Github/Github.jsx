import  {React, useState,useEffect } from 'react'

 


function Github() {
   const [data , setData] = useState([]);
    useEffect (()=>{
        fetch('https://api.github.com/users/harsh-singh10')
        .then(res => res.json())
        .then(data => {

           console.log(data);
            setData(data)
        })
    } ,[] )

  return (
    <div>
      <h2 className='text-gray-500 m-4 p-4 bg-orange-500' >GitHub followers : {data.followers}  </h2>
    </div>
  )
}

export default Github
