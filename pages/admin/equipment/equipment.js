import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Router from 'next/router'

const Equipment = () => {
    const [alldata, setAlldata] = useState([])
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")

    useEffect(() => {
        axios.get("http://localhost:4000/equipment").then((res) => setAlldata(res.data))
    }, [])

    const onSubmit = () =>{
        console.log(name)
        axios.post("http://localhost:4000/equipment",{
            name: name, 
            price: price,
        }).then((res) => Router.reload(window.location.pathname))
    }

    return (
        <div>
            <h1>Equipment</h1>
            <p>Name Equipment</p>
            <div class="input-group input-group-sm mb-3">
                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" onChange={(e) => setName(e.target.value)}/>
            </div>

            <p>Price</p>
            <div class="input-group input-group-sm mb-3">
                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" onChange={(e) => setPrice(e.target.value)}/>
            </div>

            <button type="button" class="btn btn-primary btn-sm" onClick={() =>onSubmit()}>Save</button>
            <button type="button" class="btn btn-secondary btn-sm">cancle</button>

            <hr />
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">id</th>                        
                        <th scope="col">name</th>
                        <th scope="col">price</th>                     
                        <th scope="col">action</th>
                    </tr>
                </thead>
                <tbody>

                    {alldata.map((v) => (
                        <tr>
                            <th scope="row">{v.id}</th>                         
                            <td>{v.name}</td>                         
                            <td>{v.price}</td>                          
                            <td></td>
                        </tr>
                    ))}


                </tbody>
            </table>
        </div>
    )
}
export default Equipment