import { heroImage } from "../assets/images"
import { category } from "./productData"
const nav = [
    {
        name: "shop",
        subMenus: category
    },
    { name: "on sale" },
    { name: "new arrival" },
    { name: "brands" }
]

const heroData = {
    tittle: "FIND CLOTHES THAT MATCHES YOUR STYLE",
    text: "Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.",
    img: heroImage,
    stats: [
        {
            number: "200+",
            label: "international brands"
        },
        {
            number: "2,000+",
            label: "hight-quality products"
        },
        {
            number: "30,000+",
            label: "happy customers"
        }
    ]
}

export {
    nav,
    heroData
}