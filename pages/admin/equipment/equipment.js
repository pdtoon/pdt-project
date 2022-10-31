import React from 'react'

const Equipment = () => {
    return (
        <div>
            <h1>Equipment</h1>
            <p>Name Equipment</p>
            <div class="input-group input-group-sm mb-3">
                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
            </div>

            <p>Price</p>
            <div class="input-group input-group-sm mb-3">
                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
            </div>

            <button type="button" class="btn btn-primary btn-sm">Save</button>
            <button type="button" class="btn btn-secondary btn-sm">cancle</button>
        </div>
    )
}
export default Equipment