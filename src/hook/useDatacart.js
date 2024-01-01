import { useEffect, useState } from "react";

const useDatacart = (id, theproduct, variant, size, qty) => {
    const [dataCart, setDataCart] = useState([]);
    useEffect(() => {
        setDataCart({
            idProduct: id,
            name: theproduct.name,
            size: size,
            color: variant.color,
            image: variant.image[0],
            price: theproduct.price,
            discount: theproduct.discount,
            qty: qty,
        });
    }, [id, theproduct, variant, size, qty]);

    return dataCart
}

export default useDatacart