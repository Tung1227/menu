import { Fragment, useState } from "react";
import Input from "./Input";
import { ref, set } from "firebase/database";
import database from "../utils/db";

export function ThemItemLinhkien() {

    const [tenhang, setTenhang] = useState('')
    const [size, setSize] = useState('')
    const [price, setPrice] = useState(0)

    const onsubmit = () => {
        set(ref(database, 'menu/linhkien/' + tenhang), {
            tenhang: tenhang,
            size: size,
            price: price
        });
    }
    return (
        <Fragment>
            <div className="text-center">
                <h1>Thêm Linh kiện</h1>
            </div>
            <div className="container">
                <form action="" onSubmit={onsubmit}>
                    <Input title={'Tên hàng'} value={tenhang} id={'tenhang'} setValue={setTenhang}></Input>
                    <Input title={'Kích thước'} value={size} id={'size'} setValue={setSize}></Input>
                    <Input title={'Giá'} value={price} id={'price'} setValue={setPrice}></Input>
                    <button type="button" className="btn btn-primary" onClick={() => onsubmit()}>Tạo</button>
                </form>

            </div>
        </Fragment>)
}