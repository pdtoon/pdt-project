import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Promotion = () => {
    const [alldata, setAlldata] = useState([])

    useEffect(() => {
        axios.get("http://localhost:4000/promotion").then((res) => setAlldata(res.data))
    }, [])

  return (
    <div>
    <h1>Promotion</h1>
    <p>Name Promotion</p>
    <div class="input-group input-group-sm mb-3">
        <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
    </div>

    <p>Price</p>
    <div class="input-group input-group-sm mb-3">
        <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
    </div>

    <p>Code</p>
    <div class="input-group input-group-sm mb-3">
        <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
    </div>

    <button type="button" class="btn btn-primary btn-sm">Save</button>
    <button type="button" class="btn btn-secondary btn-sm">cancle</button>

    <hr />
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">id</th>                        
                        <th scope="col">name</th>
                        <th scope="col">price</th>     
                        <th scope="col">code</th>                
                        <th scope="col">action</th>
                    </tr>
                </thead>
                <tbody>

                    {alldata.map((v) => (
                        <tr>
                            <th scope="row">{v.id}</th>                         
                            <td>{v.name}</td>                         
                            <td>{v.price}</td>    
                            <td>{v.code}</td>                          
                            <td></td>
                        </tr>
                    ))}


                </tbody>
            </table>
</div>
)
}
export default Promotion