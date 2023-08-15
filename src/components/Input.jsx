import { Fragment, useState } from "react";

export default function Input({ value, setValue, errorMsg, required, id, title }) {
    const onchange = (e) => {
        setValue(e.target.value)
    }
    return (
        <Fragment>
            <div className="mb-3 text-left" >
                <label className="form-label" htmlFor={id}>{title}</label>
                <input className="form-control" type="text" id="tenhang" value={value} name={id} onChange={(e) => { onchange(e) }} />
            </div>
        </Fragment>
    )
}