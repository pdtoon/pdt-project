import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Reservation = () => {
    const [alldata, setAlldata] = useState([])

    useEffect(() => {
        axios.get("http://localhost:4000/reservation").then((res) => setAlldata(res.data))
    }, [])
    
  return (
    <div>
      

      <hr />
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">id</th>                        
                        <th scope="col">userid</th>
                        <th scope="col">meetingroomid</th> 
                        <th scope="col">start</th>
                        <th scope="col">stop</th>
                        <th scope="col">totalprice</th>
                        <th scope="col">status</th>                    
                        <th scope="col">action</th>
                    </tr>
                </thead>
                <tbody>

                    {alldata.map((v) => (
                        <tr>
                            <th scope="row">{v.id}</th>                         
                            <td>{v.userid}</td>                         
                            <td>{v.meetingroomid}</td>   
                            <td>{v.start}</td> 
                            <td>{v.stop}</td> 
                            <td>{v.totalprice}</td> 
                            <td>{v.status}</td>                        
                            <td></td>
                        </tr>
                    ))}


                </tbody>
            </table>
    </div>
  )
}
export default Reservation