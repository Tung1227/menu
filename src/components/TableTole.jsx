import { Fragment, useState } from "react";
import database from "../utils/db";
import { onValue, ref } from "firebase/database";

export default function TableTole() {
    const [data, setData] = useState([]);

    const getData = () => {
        let toles = []
        const sat = ref(database, 'menu/tole/');
        onValue(sat, (snapshot) => {
            const data = snapshot.val();
            for (const d in data) {
                toles.push(data[d]);
            }
        });
        console.log(toles)
        setData(toles)
    }
    return (
        <Fragment>
            <table className="tableMenu">
                <thead>
                    <tr>
                        <th>Tên hàng</th>
                        <th>Kích thước</th>
                        <th>Cân nặng(kg)</th>
                        <th>Giá</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((tole, index) => {
                        return (<tr key={index}><td className="tablecell">{tole.tenhang}</td>
                            <td className="tablecell">{tole.size}</td>
                            <td className="tablecell">{tole.weight}</td>
                            <td className="tablecell">{tole.price}</td>
                        </tr>)
                    })}
                    <tr>
                        <td className="tablecell">Vuông 25x25</td>
                        <td className="tablecell">25x25</td>
                        <td className="tablecell">5</td>
                        <td className="tablecell">2</td>
                    </tr>
                </tbody>
            </table>
            <div className="text-center">
                <button className="btn btn-secondary" onClick={() => getData()}>Hiển thị</button>
            </div>
        </Fragment>
    )
}