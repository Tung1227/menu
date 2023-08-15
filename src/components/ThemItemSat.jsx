import { ref, set } from "firebase/database";
import { Fragment, useState } from "react";
import database from "../utils/db";
import Input from "./Input";

export function ThemItemSat() {

    const [tenhang, setTenhang] = useState('')
    const [size, setSize] = useState('')
    const [weight, setWeight] = useState(0)

    const onsubmit = () => {
        set(ref(database, 'menu/sat/' + tenhang), {
            tenhang: tenhang,
            size: size,
            weight: weight,
        });
    }
    return (
        <Fragment>
            <div className="text-center">
                <h1>Thêm Sắt</h1>
            </div>
            <div className="container">
                <form action="" onSubmit={onsubmit}>
                    <Input title={'Tên hàng'} value={tenhang} id={'tenhang'} setValue={setTenhang}></Input>
                    <Input title={'Khối lượng'} value={weight} id={'weight'} setValue={setWeight}></Input>
                    <Input title={'Kích thước'} value={size} id={'size'} setValue={setSize}></Input>
                    <button type="button" className="btn btn-primary" onClick={() => onsubmit()}>Tạo</button>
                </form>

            </div>
        </Fragment>
    )
}