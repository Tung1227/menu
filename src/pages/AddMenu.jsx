import { Fragment } from "react";

export function AddMenu(){
    return (
        <Fragment>
            <div className="App-header">
                Thêm menu
                <button type="button">Menu</button>
                <button type="button">Sửa đơn giá</button>
            </div>
            <div>
                <label htmlFor="tenhang">Tên hàng</label>
                <input type="text" id="tenhang" name="tenhang" />
            </div>
        </Fragment>
    )
}