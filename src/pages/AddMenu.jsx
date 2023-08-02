import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ThemItemSat } from "../components/ThemItemSat";
import { ThemItemLinhkien } from "../components/ThemItemLinhkien";
import { ThemItemTole } from "../components/ThemItemTole";

export function AddMenu() {

    const [formType, setFormType] = useState('Sat')
    const nav = useNavigate()
    return (
        <Fragment>
            <div className="App-header">
                Thêm menu
                <button type="button" className="item-header" onClick={() => { nav('/') }}>Menu</button>
                <button type="button" className="item-header" onClick={() => nav('/changeprice')}>Sửa đơn giá</button>
            </div>
            <div class="btn-group" role="group" aria-label="Basic example">
                <button type="button" class="btn btn-primary" onClick={() => { setFormType('Sat') }}>Sắt</button>
                <button type="button" class="btn btn-primary" onClick={() => { setFormType('Linhkien') }}>Linh kiện</button>
                <button type="button" class="btn btn-primary" onClick={() => { setFormType('Tole') }}>Tole</button>
            </div>

            {formType == 'Sat' && <ThemItemSat />}
            {formType == 'Linhkien' && <ThemItemLinhkien />}
            {formType == 'Tole' && <ThemItemTole />}
        </Fragment>
    )
}