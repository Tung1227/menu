import { Fragment } from "react";
import { TableSat } from "../components/TableSat";

import { useNavigate } from "react-router-dom";

export function MenuPage() {


    const nav = useNavigate()
    return (
        <Fragment>
            <div className="App-header">
                Menu
                <button type="button" className="item-header" onClick={() => { nav('/addItem') }}>Thêm menu</button>
                <button type="button" className="item-header" onClick={() => nav('/changeprice')}>Sửa đơn giá</button>
            </div>
            <div>
                <TableSat />
            </div>
        </Fragment>
    )
}