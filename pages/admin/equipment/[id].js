import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Router from 'next/router'


const Equipment = () => {
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")

    useEffect(() => {
        axios.get("http://localhost:4000/equipment/"+Router.query.id).then((res) => {
            setName(res.data.name)
            setPrice(res.data.price)
        })
    }, [])


    const onSubmit = () => {
        console.log(name)
        axios.put("http://localhost:4000/equipment/"+Router.query.id, {
            name: name,
            price: price,
        }).then((res) => Router.replace("/admin/equipment/equipment"))
    }

    return (
        <div>
            <h1>Equipment</h1>
            <p>Name room</p>
            <div class="input-group input-group-sm mb-3">
                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" value={name}  onChange={(e) => setName(e.target.value)} />
            </div>

            <p>Price/Day</p>
            <div class="input-group input-group-sm mb-3">
                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" value={price} onChange={(e) => setPrice(e.target.value)} />
            </div>

            <button type="button" class="btn btn-primary btn-sm" onClick={() => onSubmit()}>Save</button>
            <button type="button" class="btn btn-secondary btn-sm">cancle</button>

        </div>

    )
}

export default Equipment