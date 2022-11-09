import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Meetingroom = () => {
    const [alldata, setAlldata] = useState([])

    useEffect(() => {
        axios.get("http://localhost:4000/meetingroom").then((res) => setAlldata(res.data))
    }, [])

    return (
        <div>
            <h1>Meetingroom</h1>
            <p>Name room</p>
            <div class="input-group input-group-sm mb-3">
                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
            </div>

            <p>Price/Day</p>
            <div class="input-group input-group-sm mb-3">
                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
            </div>

            <p>Detial room</p>
            <div class="input-group">
                <textarea class="form-control" aria-label="With textarea"></textarea>
            </div>

            <button type="button" class="btn btn-primary btn-sm">Save</button>
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