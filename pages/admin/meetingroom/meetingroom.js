import React from 'react'

const Meetingroom = () => {
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



        </div>

    )
}

export default Meetingroom