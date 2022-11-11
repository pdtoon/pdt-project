import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Router from 'next/router'
const Meetingroom = () => {
    const [alldata, setAlldata] = useState([])
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [detail, setDetail] = useState("")
    const [roomnumber, setRoomnumber] = useState("")
    const [support, setSupport] = useState("")


    useEffect(() => {
        axios.get("http://localhost:4000/meetingroom").then((res) => setAlldata(res.data))
    }, [])


    const onSubmit = () =>{
        console.log(name)
        axios.post("http://localhost:4000/meetingroom",{
            roomnumber: roomnumber, 
            name: name, 
            support: support,
            detail: detail,
            price: price,
            status: 0,
            image: "",
        }).then((res) => Router.reload(window.location.pathname))
    }

    return (
        <div>
            <h1>Meetingroom</h1>
            <p>Name room</p>
            <div class="input-group input-group-sm mb-3">
                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" onChange={(e) => setName(e.target.value)}/>
            </div>

            <p>Roomnumber</p>
            <div class="input-group input-group-sm mb-3">
                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" onChange={(e) => setRoomnumber(e.target.value)}/>
            </div>

            <p>Support</p>
            <div class="input-group input-group-sm mb-3">
                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" onChange={(e) => setSupport(e.target.value)}/>
            </div>


            <p>Price/Day</p>
            <div class="input-group input-group-sm mb-3">
                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" onChange={(e) => setPrice(e.target.value)}/>
            </div>

            <p>Detial room</p>
            <div class="input-group">
                <textarea class="form-control" aria-label="With textarea" onChange={(e) => setDetail(e.target.value)}></textarea>
            </div>

            <button type="button" class="btn btn-primary btn-sm" onClick={() =>onSubmit()}>Save</button>
            <button type="button" class="btn btn-secondary btn-sm">cancle</button>

            <hr />
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">roomnumber</th>
                        <th scope="col">name</th>
                        <th scope="col">support</th>
                        <th scope="col">detail</th>
                        <th scope="col">price</th>
                        <th scope="col">status</th>
                        <th scope="col">image</th>
                        <th scope="col">action</th>
                    </tr>
                </thead>
                <tbody>

                    {alldata.map((v) => (
                        <tr>
                            <th scope="row">{v.id}</th>
                            <td>{v.roomnumber}</td>
                            <td>{v.name}</td>
                            <td>{v.support}</td>
                            <td>{v.detail}</td>
                            <td>{v.price}</td>
                            <td>{v.status}</td>
                            <td>{v.image}</td>
                            <td></td>
                        </tr>
                    ))}


                </tbody>
            </table>



        </div>

    )
}

export default Meetingroom