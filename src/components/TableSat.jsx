import { Fragment, useEffect, useState } from "react";
import database from "../utils/db";
import { onValue, ref } from "firebase/database";



export function TableSat() {
    const [data, setData] = useState([]);
    const [dongia, setDongia] = useState();

    const getData = () => {
        let sats = []
        let dg;
        const sat = ref(database, 'menu/sat/');
        onValue(sat, (snapshot) => {
            const data = snapshot.val();
            for (const d in data) {
                sats.push(data[d]);
            }
        });
        const dgcon = ref(database, 'menu/dongia/');
        onValue(dgcon, (snapshot) => {
            const data = snapshot.val();
            dg = data
        });
        setData(sats)
        setDongia(dg)
    }

    return (
        <Fragment>
            <div>
                <table className="tableMenu">
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
                        {data.map((sat, index) => {
                            return (<tr key={index}><td className="tablecell">{sat.tenhang}</td>
                                <td className="tablecell">{sat.size}</td>
                                <td className="tablecell">{sat.weight}</td>
                                <td className="tablecell">{dongia.sat}</td>
                                <td className="tablecell">{dongia.sat * sat.weight}</td>
                            </tr>)
                        })}
                        <tr>
                            <td className="tablecell">Vuông 25x25</td>
                            <td className="tablecell">25x25</td>
                            <td className="tablecell">5</td>
                            <td className="tablecell">2</td>
                            <td className="tablecell">10</td>
                        </tr>
                    </tbody>
                </table>
                <div className="text-center">
                    <button className="btn btn-secondary" onClick={() => getData()}>Hiển thị</button>
                </div>
            </div>
        </Fragment>
    )
}