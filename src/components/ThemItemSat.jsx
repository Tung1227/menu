import { Fragment, useState } from "react";

export function ThemItemSat() {

    const [input, setInput] = useState(
        {
            tenhang: '',
            size: '',
            weight: ''
        }
    )
    const { tenhang, size, weight } = input
    const onchange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }
    const onsubmit = (e) => {
        e.preventDefault()
    }
    return (
        <Fragment>
            <div className="text-center">
                <h1>Thêm Sắt</h1>
            </div>
            <div className="container">
                <form action="" onSubmit={onsubmit}>
                    <div className="mb-3 text-left" >
                        <label className="form-label" htmlFor="tenhang">Tên hàng</label>
                        <input className="form-control" type="text" id="tenhang" value={tenhang} name="tenhang" onChange={(e) => { onchange(e) }} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="size">kích thước</label>
                        <input className="form-control" type="text" id="size" name="size" value={size} onChange={(e) => { onchange(e) }} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="weight">khối lượng</label>
                        <input className="form-control" type="text" id="weight" name="weight" value={weight} onChange={(e) => { onchange(e) }} />
                    </div>
                    <input type="submit" value="" />
                </form>

            </div>
        </Fragment>
    )
}