import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Router from 'next/router'


const Meetingroom = () => {
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [detail, setDetail] = useState("")
    const [roomnumber, setRoomnumber] = useState("")
    const [support, setSupport] = useState("")


    useEffect(() => {
        axios.get("http://localhost:4000/meetingroom/"+Router.query.id).then((res) => {
            setName(res.data.name)
            setPrice(res.data.price)
            setDetail(res.data.detail)
            setRoomnumber(res.data.roomnumber)
            setSupport(res.data.support)
        })
    }, [])


    const onSubmit = () => {
        console.log(name)
        axios.put("http://localhost:4000/meetingroom/"+Router.query.id, {
            roomnumber: roomnumber,
            name: name,
            support: support,
            detail: detail,
            price: price,
            status: 0,
            image: "",
        }).then((res) => Router.replace("/admin/meetingroom/meetingroom"))
    }

    return (
        <div>
            <h1>Meetingroom</h1>
            <p>Name room</p>
            <div class="input-group input-group-sm mb-3">
                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" value={name}  onChange={(e) => setName(e.target.value)} />
            </div>

            <p>Roomnumber</p>
            <div class="input-group input-group-sm mb-3">
                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" value={roomnumber} onChange={(e) => setRoomnumber(e.target.value)} />
            </div>

            <p>Support</p>
            <div class="input-group input-group-sm mb-3">
                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" value={support} onChange={(e) => setSupport(e.target.value)} />
            </div>


            <p>Price/Day</p>
            <div class="input-group input-group-sm mb-3">
                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" value={price} onChange={(e) => setPrice(e.target.value)} />
            </div>

            <p>Detial room</p>
            <div class="input-group">
                <textarea class="form-control" aria-label="With textarea" value={detail} onChange={(e) => setDetail(e.target.value)}></textarea>
            </div>

            <button type="button" class="btn btn-primary btn-sm" onClick={() => onSubmit()}>Save</button>
            <button type="button" class="btn btn-secondary btn-sm">cancle</button>

        </div>

    )
}

export default Meetingroom