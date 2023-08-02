import { useNavigate } from "react-router-dom";
import { Fragment, useState } from "react";

export function ChangePrice() {
    const [formType, setFormType] = useState('Sat')
    const nav = useNavigate()
    return (
        <Fragment>
            <div className="App-header">
                Sửa đơn giá
                <button type="button" className="item-header" onClick={() => { nav('/') }}>Menu</button>
                <button type="button" className="item-header" onClick={() => nav('/addItem')}>Thêm menu</button>
            </div>
        </Fragment>
    )
}