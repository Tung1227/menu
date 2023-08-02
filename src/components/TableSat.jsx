import { Fragment } from "react";

export function TableSat() {
    return (
        <Fragment>
            <div>
                <table className="tableMenu">
                    <head>

                    </head>
                    <thead>
                        <tr>
                            <th>Tên hàng</th>
                            <th>Kích thước</th>
                            <th>Cân nặng(kg)</th>
                            <th>Đơn giá</th>
                            <th>Thành tiền</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="tablecell">Vuông 25x25</td>
                            <td className="tablecell">25x25</td>
                            <td className="tablecell">5</td>
                            <td className="tablecell">2</td>
                            <td className="tablecell">10</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </Fragment>
    )
}