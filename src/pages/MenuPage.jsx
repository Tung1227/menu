import { Fragment, useState } from "react";
import { TableSat } from "../components/TableSat";

import { useNavigate } from "react-router-dom";
import { ref, set } from "firebase/database";
import database from "../utils/db";
import TableTole from "../components/TableTole";
import TableLinhKien from "../components/TableLinhKien";

export function MenuPage() {
    set(ref(database, 'menu/dongia/'), {
        sat: 22000,
    });
    const [page, setPage] = useState('Sat')




    const nav = useNavigate()
    return (
        <Fragment>
            <div className="App-header">
                Menu
                <button type="button" className="item-header" onClick={() => { nav('/addItem') }}>Thêm menu</button>
                <button type="button" className="item-header" onClick={() => nav('/changeprice')}>Sửa đơn giá</button>
            </div>
            <div>
                <div className="btn-group" role="group" aria-label="Basic example">
                    <button type="button" className="btn btn-primary" onClick={() => { setPage('Sat') }}>Sắt</button>
                    <button type="button" className="btn btn-primary" onClick={() => { setPage('Linhkien') }}>Linh kiện</button>
                    <button type="button" className="btn btn-primary" onClick={() => { setPage('Tole') }}>Tole</button>
                </div>
                {page === 'Sat' && <TableSat />}
                {page === 'Tole' && <TableTole />}
                {page === 'Linhkien' && <TableLinhKien />}
            </div>
        </Fragment>
    )
}