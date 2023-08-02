import { Fragment } from "react";
import { TableSat } from "../components/TableSat";

import { Navigate } from "react-router-dom";

export function MenuPage() {

    
    const addMenu = () => {
        
    }
    return (
        <Fragment>
            <div className="App-header">
                Menu
                <button type="button">Thêm menu</button>
                <button type="button">Sửa đơn giá</button>
            </div>
            <div>
                <TableSat />
            </div>
        </Fragment>
    )
}