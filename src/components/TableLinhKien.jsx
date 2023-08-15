import { onValue, ref } from "firebase/database";
import { Fragment, useState } from "react";
import database from "../utils/db";

export default function TableLinhKien() {
    const [data, setData] = useState([]);

    const getData = () => {
        let sats = []
        const linhkien = ref(database, 'menu/linhkien/');
        onValue(linhkien, (snapshot) => {
            const data = snapshot.val();
            for (const d in data) {
                sats.push(data[d]);
            }
        });
       
        setData(sats)
    }
    return (<Fragment>
        <div>
            <table className="tableMenu">
                <thead>
                    <tr>
                        <th>Tên hàng</th>
                        <th>Kích thước</th>
                        <th>Thành tiền</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((sat, index) => {
                        return (<tr key={index}><td className="tablecell">{sat.tenhang}</td>
                            <td className="tablecell">{sat.size}</td>
                            <td className="tablecell">{sat.price}</td>
                        </tr>)
                    })}
                    <tr>
                        <td className="tablecell">Vuông 25x25</td>
                        <td className="tablecell">25x25</td>
                        <td className="tablecell">5</td>
                    </tr>
                </tbody>
            </table>
            <div className="text-center">
                <button className="btn btn-secondary" onClick={() => getData()}>Hiển thị</button>
            </div>
        </div>
    </Fragment>)

}