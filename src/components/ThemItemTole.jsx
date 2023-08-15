import { Fragment, useState } from "react";
import Input from "./Input";
import database from "../utils/db";
import { ref, set } from "firebase/database";

export function ThemItemTole() {

    const [tenhang, setTenhang] = useState('')
    const [size, setSize] = useState('')
    const [weight, setWeight] = useState(0)
    const [price, setPrice] = useState(0)

    const onsubmit = async () => {
        const a  = await set(ref(database, 'menu/tole/' + tenhang), {
            tenhang: tenhang,
            size: size,
            weight: weight,
            price: price
        });
        console.log(a)
    }
    return (
        <Fragment>
            <div className="text-center">
                <h1>Thêm Tole</h1>
            </div>
            <div className="container">
                <form action="" onSubmit={onsubmit}>
                    <Input title={'Tên hàng'} value={tenhang} id={'tenhang'} setValue={setTenhang}></Input>
                    <Input title={'Khối lượng'} value={weight} id={'weight'} setValue={setWeight}></Input>
                    <Input title={'Kích thước'} value={size} id={'size'} setValue={setSize}></Input>
                    <Input title={'Giá'} value={price} id={'price'} setValue={setPrice}></Input>
                    <button type="button" className="btn btn-primary" onClick={() => onsubmit()}>Tạo</button>
                </form>

            </div>
        </Fragment>)
}