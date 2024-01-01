const category = [
    "t-shirt",
    "shorts",
    "shirts",
    "hoodies",
    "jeans",
]

const dreesStyle = [
    "casual",
    "formal",
    "party",
    "gym",
]

const colorVariant = {

    white: {
        id: 1,
        name: "white",
        hex: "#F7F7F4"
    },
    black: {
        id: 2,
        name: "black",
        hex: "#000000"
    },
    green: {
        id: 3,
        name: "green",
        hex: "#13716B"
    },
    grey: {
        id: 4,
        name: "grey",
        hex: "#CAC8CB"
    },
    blue: {
        id: 5,
        name: "blue",
        hex: "#769CC4"
    },
    pink: {
        id: 6,
        name: "pink",
        hex: "#FCC7EB"
    },
    red: {
        id: 7,
        name: "red",
        hex: "#C52E2E"
    },
    brown: {
        id: 8,
        name: "brown",
        hex: "#824F2D"
    }

}

const products = [
    {
        id: 1,
        name: "reebok identity tape t-shirt",
        category: "t-shirt",
        description: "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
        price: 120,
        discount: null,
        rating: 4.5,
        size: ["s", "m", "l", "xl"],
        variant: [
            {
                color: colorVariant.black,
                image: [
                    "https://images.reebok.eu/reebok-reebok-identity-vector-tape-t-shirt_19727038_44992718_2048.jpg",
                    "https://images.reebok.eu/reebok-reebok-identity-vector-tape-t-shirt_19727038_44989497_2048.jpg",
                    "https://images.reebok.eu/reebok-reebok-identity-vector-tape-t-shirt_19727038_44992849_2048.jpg",
                ],
            },
            {
                color: colorVariant.white,
                image: [
                    "https://images.reebok.eu/reebok-reebok-identity-tape-t-shirt_20150676_45332159_2048.jpg",
                    "https://images.reebok.eu/reebok-reebok-identity-tape-t-shirt_20150676_45331311_2048.jpg",
                    "https://images.reebok.eu/reebok-reebok-identity-tape-t-shirt_20150676_45332116_2048.jpg",
                ]
            },
            {
                color: colorVariant.grey,
                image: [
                    "https://images.reebok.eu/reebok-reebok-identity-vector-tape-t-shirt_19727788_44990710_2048.jpg",
                    "https://images.reebok.eu/reebok-reebok-identity-vector-tape-t-shirt_19727788_44991331_2048.jpg",
                    "https://images.reebok.eu/reebok-reebok-identity-vector-tape-t-shirt_19727788_44990774_2048.jpg",
                ]
            }
        ]
    },
    {
        id: 2,
        name: "skinny fit jeans",
        category: "jeans",
        description: "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
        price: 260,
        discount: 20,
        rating: 3.5,
        size: ["s", "m", "l", "xl"],
        variant: [
            {
                color: colorVariant.blue,
                image: [
                    "https://storage.sg.content-cdn.io/cdn-cgi/image/width=1034,height=1376,quality=75,format=auto,fit=cover,g=top/in-resources/ff5c6da1-2d74-4846-96c9-ccd65d766244/Images/ProductImages/Source/levis-mens-511-slim-fit-jeans-045115526_03_Side.jpg",
                    "https://storage.sg.content-cdn.io/cdn-cgi/image/width=1034,height=1376,quality=75,format=auto,fit=cover,g=top/in-resources/ff5c6da1-2d74-4846-96c9-ccd65d766244/Images/ProductImages/Source/levis-mens-511-slim-fit-jeans-045115526_03_Side.jpg",
                    "https://storage.sg.content-cdn.io/cdn-cgi/image/width=1034,height=1376,quality=75,format=auto,fit=cover,g=top/in-resources/ff5c6da1-2d74-4846-96c9-ccd65d766244/Images/ProductImages/Source/levis-mens-511-slim-fit-jeans-045115526_03_Side.jpg",
                ]
            },
            {
                color: colorVariant.black,
                image: [
                    "https://dynamic.zacdn.com/7YupojC5gHCOooujo40v8kPft5E=/filters:quality(70):format(webp)/https://static-ph.zacdn.com/p/replay-5182-4866362-1.jpg",
                    "https://media.everlane.com/image/upload/c_fill,dpr_2,f_auto,g_face:center,q_auto,w_auto/v1/i/563a7792_a646.jpg",
                    "https://media.everlane.com/image/upload/q_auto,f_auto/i/3a6eafff_96a2.jpg",
                ]
            },
        ]
    },
    {
        id: 3,
        name: "checkered shirt",
        category: "shirt",
        description: "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
        price: 180,
        discount: null,
        rating: 4.5,
        size: ["s", "m", "l", "xl"],
        variant: [
            {
                color: colorVariant.red,
                image: [
                    "https://spykar.com/cdn/shop/products/WuhKxeWZd-MSHCS1BC133RED-_2.jpg?v=1672992291",
                    "https://www.hollandcooper.com/cdn/shop/products/2021-20-10_SS22_ECOM_DAY_1Look62-WesternCheckShirt_Red-Navy__43324_5_2048x2048.jpg?v=1692628443",
                    "https://assets.ajio.com/medias/sys_master/root/h23/h8b/13558435086366/-473Wx593H-460185802-scarlet-MODEL.jpg",
                ]
            },
            {
                color: colorVariant.white,
                image: [
                    "https://spykar.com/cdn/shop/products/NwI8HnX1gz-MSHCS1BC144WHITE-_4.jpg?v=1672993254",
                    "https://rukminim1.flixcart.com/image/300/350/kplisnk0/shirt/w/w/i/s-bj-sht5149-hanumntra-original-imag3st9zwbm3vgh.jpeg?q=90",
                    "https://images.meesho.com/images/products/333347446/pgy2r_512.webp",
                ]
            },
            {
                color: colorVariant.brown,
                image: [
                    "https://i5.walmartimages.com/seo/One-Day-Away-Men-s-Long-Sleeve-Brushed-Flannel-Shirt_d1a46179-3cbd-4b74-ad13-978b6c2d5ede_1.6bd81a4343b9bb9f961521a3c6bd4a19.jpeg",
                    "https://i5.walmartimages.com/asr/96532b31-85d7-4289-98e8-c213232d0a07_1.2c8c05076844a6e08300d6b7dd83530e.jpeg",
                    "https://i5.walmartimages.com/asr/8b84674b-50c3-4302-919e-967603b0b295_1.9f9c622258f89c1a9d164a1d070e494e.jpeg",
                ]
            }
        ]
    },
    {
        id: 4,
        name: "sleeve striped t-shirt",
        category: "t-shirt",
        description: "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
        price: 160,
        discount: 30,
        rating: 2.5,
        size: ["s", "m", "l", "xl"],
        variant: [
            {
                color: colorVariant.white,
                image: [
                    "https://static.e-stradivarius.net/5/photos4/2023/I/0/1/p/6561/458/003/6561458003_1_1_1.jpg?t=1693910192675&impolicy=stradivarius-itxmediumhigh&imwidth=480&imformat=chrome&imdensity=2.625",
                    "https://static.pullandbear.net/2/photos//2023/I/0/1/p/7242/318/093/7242318093_2_6_8.jpg?t=1692261309384&imwidth=1125",
                    "https://image.uniqlo.com/UQ/ST3/au/imagesgoods/457903/sub/augoods_457903_sub2.jpg",
                ]
            },
            {
                color: colorVariant.black,
                image: [
                    "https://agnesb-agnesb-com-storage.omn.proximis.com/Imagestorage/imagesSynchro/0/0/43627707330a117120f617e0f2178a88deb96839_4366J008_1033_1.jpeg",
                    "https://agnesb-agnesb-com-storage.omn.proximis.com/Imagestorage/imagesSynchro/0/0/c6176d68f0bee71a8c166dd499e027b98cc5497b_4366J008_1033_11.jpeg",
                    "https://cdna.lystit.com/400/500/tr/photos/asos/3fd16d6d/collusion-Blue-Fine-Knit-Stripe-Sweater.jpeg",
                ]
            },
        ]
    },
    {
        id: 5,
        name: "gradient graphic t-shirt",
        category: "t-shirt",
        description: "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
        price: 145,
        discount: null,
        rating: 5,
        size: ["s", "m", "l", "xl"],
        variant: [
            {
                color: colorVariant.pink,
                image: [
                    "https://urban-planet.com/cdn/shop/files/688863843660-12-0_cbc0687c-f3bc-4517-8950-8a4ca012727a_420x.jpg?v=1692127589",
                    "https://urban-planet.com/cdn/shop/files/688863843660-12-1_4a064d99-cded-4e60-9e26-f90f846a50b1.jpg?v=1692127593",
                    "https://urban-planet.com/cdn/shop/files/688863843660-12-2_b449301d-f5da-408d-a96b-8f40761ef402.jpg?v=1692127595",
                ]
            },
        ]
    },
    {
        id: 6,
        name: "reebok identity tape t-shirt ii",
        category: "t-shirt",
        description: "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
        price: 120,
        discount: null,
        rating: 4.5,
        size: ["s", "m", "l", "xl"],
        variant: [
            {
                color: colorVariant.black,
                image: [
                    "https://images.reebok.eu/reebok-reebok-identity-vector-tape-t-shirt_19727038_44992708_2048.jpg",
                    "https://images.reebok.eu/reebok-reebok-identity-vector-tape-t-shirt_19727038_44989497_2048.jpg",
                    "https://images.reebok.eu/reebok-reebok-identity-vector-tape-t-shirt_19727038_44992849_2048.jpg",
                ],
            },
            {
                color: colorVariant.white,
                image: [
                    "https://images.reebok.eu/reebok-reebok-identity-tape-t-shirt_20150676_45332159_2048.jpg",
                    "https://images.reebok.eu/reebok-reebok-identity-tape-t-shirt_20150676_45331311_2048.jpg",
                    "https://images.reebok.eu/reebok-reebok-identity-tape-t-shirt_20150676_45332116_2048.jpg",
                ]
            },
            {
                color: colorVariant.grey,
                image: [
                    "https://images.reebok.eu/reebok-reebok-identity-vector-tape-t-shirt_19727788_44990710_2048.jpg",
                    "https://images.reebok.eu/reebok-reebok-identity-vector-tape-t-shirt_19727788_44991331_2048.jpg",
                    "https://images.reebok.eu/reebok-reebok-identity-vector-tape-t-shirt_19727788_44990774_2048.jpg",
                ]
            }
        ]
    },
    {
        id: 7,
        name: "skinny fit jeans ii",
        category: "jeans",
        description: "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
        price: 260,
        discount: 20,
        rating: 3.5,
        size: ["s", "m", "l", "xl"],
        variant: [
            {
                color: colorVariant.blue,
                image: [
                    "https://images.sg.content-cdn.io/cdn/in-resources/ff5c6da1-2d74-4846-96c9-ccd65d766244/Images/ProductImages/Source/levis-mens-510-skinny-fit-jeans-055101173_01_Front.jpg",
                    "https://storage.sg.content-cdn.io/cdn-cgi/image/width=1034,height=1376,quality=75,format=auto,fit=cover,g=top/in-resources/ff5c6da1-2d74-4846-96c9-ccd65d766244/Images/ProductImages/Source/levis-mens-511-slim-fit-jeans-045115526_03_Side.jpg",
                    "https://storage.sg.content-cdn.io/cdn-cgi/image/width=1034,height=1376,quality=75,format=auto,fit=cover,g=top/in-resources/ff5c6da1-2d74-4846-96c9-ccd65d766244/Images/ProductImages/Source/levis-mens-511-slim-fit-jeans-045115526_03_Side.jpg",
                ]
            },
            {
                color: colorVariant.black,
                image: [
                    "https://dynamic.zacdn.com/7YupojC5gHCOooujo40v8kPft5E=/filters:quality(70):format(webp)/https://static-ph.zacdn.com/p/replay-5182-4866362-1.jpg",
                    "https://media.everlane.com/image/upload/c_fill,dpr_2,f_auto,g_face:center,q_auto,w_auto/v1/i/563a7792_a646.jpg",
                    "https://media.everlane.com/image/upload/q_auto,f_auto/i/3a6eafff_96a2.jpg",
                ]
            },
        ]
    },
    {
        id: 8,
        name: "checkered shirt ii",
        category: "shirt",
        description: "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
        price: 180,
        discount: null,
        rating: 4.5,
        size: ["s", "m", "l", "xl"],
        variant: [
            {
                color: colorVariant.red,
                image: [
                    "https://asset1.cxnmarksandspencer.com/is/image/mands/SD_03_T25_1125M_T0_X_EC_0?$PDP_IMAGEGRID_ZOOM_MD$",
                    "https://www.hollandcooper.com/cdn/shop/products/2021-20-10_SS22_ECOM_DAY_1Look62-WesternCheckShirt_Red-Navy__43324_5_2048x2048.jpg?v=1692628443",
                    "https://assets.ajio.com/medias/sys_master/root/h23/h8b/13558435086366/-473Wx593H-460185802-scarlet-MODEL.jpg",
                ]
            },
            {
                color: colorVariant.white,
                image: [
                    "https://spykar.com/cdn/shop/products/NwI8HnX1gz-MSHCS1BC144WHITE-_4.jpg?v=1672993254",
                    "https://rukminim1.flixcart.com/image/300/350/kplisnk0/shirt/w/w/i/s-bj-sht5149-hanumntra-original-imag3st9zwbm3vgh.jpeg?q=90",
                    "https://images.meesho.com/images/products/333347446/pgy2r_512.webp",
                ]
            },
            {
                color: colorVariant.brown,
                image: [
                    "https://i5.walmartimages.com/seo/One-Day-Away-Men-s-Long-Sleeve-Brushed-Flannel-Shirt_d1a46179-3cbd-4b74-ad13-978b6c2d5ede_1.6bd81a4343b9bb9f961521a3c6bd4a19.jpeg",
                    "https://i5.walmartimages.com/asr/96532b31-85d7-4289-98e8-c213232d0a07_1.2c8c05076844a6e08300d6b7dd83530e.jpeg",
                    "https://i5.walmartimages.com/asr/8b84674b-50c3-4302-919e-967603b0b295_1.9f9c622258f89c1a9d164a1d070e494e.jpeg",
                ]
            }
        ]
    },
    {
        id: 9,
        name: "sleeve striped t-shirt ii",
        category: "t-shirt",
        description: "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
        price: 160,
        discount: 30,
        rating: 2.5,
        size: ["s", "m", "l", "xl"],
        variant: [
            {
                color: colorVariant.white,
                image: [
                    "https://image.uniqlo.com/UQ/ST3/id/imagesgoods/457930/item/idgoods_69_457930.jpg?width=494",
                    "https://static.pullandbear.net/2/photos//2023/I/0/1/p/7242/318/093/7242318093_2_6_8.jpg?t=1692261309384&imwidth=1125",
                    "https://image.uniqlo.com/UQ/ST3/au/imagesgoods/457903/sub/augoods_457903_sub2.jpg",
                ]
            },
            {
                color: colorVariant.black,
                image: [
                    "https://agnesb-agnesb-com-storage.omn.proximis.com/Imagestorage/imagesSynchro/0/0/43627707330a117120f617e0f2178a88deb96839_4366J008_1033_1.jpeg",
                    "https://agnesb-agnesb-com-storage.omn.proximis.com/Imagestorage/imagesSynchro/0/0/c6176d68f0bee71a8c166dd499e027b98cc5497b_4366J008_1033_11.jpeg",
                    "https://cdna.lystit.com/400/500/tr/photos/asos/3fd16d6d/collusion-Blue-Fine-Knit-Stripe-Sweater.jpeg",
                ]
            },
        ]
    },
    {
        id: 10,
        name: "gradient graphic t-shirt ii",
        category: "t-shirt",
        description: "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
        price: 145,
        discount: null,
        rating: 5,
        size: ["s", "m", "l", "xl"],
        variant: [
            {
                color: colorVariant.pink,
                image: [
                    "https://i8.amplience.net/i/jpl/jd_674045_a?qlt=92&w=600&h=765&v=1&fmt=auto",
                    "https://urban-planet.com/cdn/shop/files/688863843660-12-1_4a064d99-cded-4e60-9e26-f90f846a50b1.jpg?v=1692127593",
                    "https://urban-planet.com/cdn/shop/files/688863843660-12-2_b449301d-f5da-408d-a96b-8f40761ef402.jpg?v=1692127595",
                ]
            },
        ]
    },
    {
        id: 11,
        name: "reebok identity tape t-shirt",
        category: "t-shirt",
        description: "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
        price: 120,
        discount: null,
        rating: 4.5,
        size: ["s", "m", "l", "xl"],
        variant: [
            {
                color: colorVariant.black,
                image: [
                    "https://reebok.ca/cdn/shop/products/1pov4BEReqP-m66PCsD0ghb0BRboZBZvf.jpg?v=1663642648&width=1445",
                    "https://images.reebok.eu/reebok-reebok-identity-vector-tape-t-shirt_19727038_44989497_2048.jpg",
                    "https://images.reebok.eu/reebok-reebok-identity-vector-tape-t-shirt_19727038_44992849_2048.jpg",
                ],
            },
            {
                color: colorVariant.white,
                image: [
                    "https://images.reebok.eu/reebok-reebok-identity-tape-t-shirt_20150676_45332159_2048.jpg",
                    "https://images.reebok.eu/reebok-reebok-identity-tape-t-shirt_20150676_45331311_2048.jpg",
                    "https://images.reebok.eu/reebok-reebok-identity-tape-t-shirt_20150676_45332116_2048.jpg",
                ]
            },
            {
                color: colorVariant.grey,
                image: [
                    "https://images.reebok.eu/reebok-reebok-identity-vector-tape-t-shirt_19727788_44990710_2048.jpg",
                    "https://images.reebok.eu/reebok-reebok-identity-vector-tape-t-shirt_19727788_44991331_2048.jpg",
                    "https://images.reebok.eu/reebok-reebok-identity-vector-tape-t-shirt_19727788_44990774_2048.jpg",
                ]
            }
        ]
    },
    {
        id: 12,
        name: "skinny fit jeans",
        category: "jeans",
        description: "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
        price: 260,
        discount: 20,
        rating: 3.5,
        size: ["s", "m", "l", "xl"],
        variant: [
            {
                color: colorVariant.blue,
                image: [
                    "https://d29c1z66frfv6c.cloudfront.net/pub/media/catalog/product/large/f147217576e91d4209fd0819db022de3c5580745_xxl-1.jpg",
                    "https://storage.sg.content-cdn.io/cdn-cgi/image/width=1034,height=1376,quality=75,format=auto,fit=cover,g=top/in-resources/ff5c6da1-2d74-4846-96c9-ccd65d766244/Images/ProductImages/Source/levis-mens-511-slim-fit-jeans-045115526_03_Side.jpg",
                    "https://storage.sg.content-cdn.io/cdn-cgi/image/width=1034,height=1376,quality=75,format=auto,fit=cover,g=top/in-resources/ff5c6da1-2d74-4846-96c9-ccd65d766244/Images/ProductImages/Source/levis-mens-511-slim-fit-jeans-045115526_03_Side.jpg",
                ]
            },
            {
                color: colorVariant.black,
                image: [
                    "https://dynamic.zacdn.com/7YupojC5gHCOooujo40v8kPft5E=/filters:quality(70):format(webp)/https://static-ph.zacdn.com/p/replay-5182-4866362-1.jpg",
                    "https://media.everlane.com/image/upload/c_fill,dpr_2,f_auto,g_face:center,q_auto,w_auto/v1/i/563a7792_a646.jpg",
                    "https://media.everlane.com/image/upload/q_auto,f_auto/i/3a6eafff_96a2.jpg",
                ]
            },
        ]
    },
    {
        id: 13,
        name: "checkered shirt",
        category: "shirt",
        description: "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
        price: 180,
        discount: null,
        rating: 4.5,
        size: ["s", "m", "l", "xl"],
        variant: [
            {
                color: colorVariant.red,
                image: [
                    "https://dynamic.zacdn.com/Ic5vgxFTxwEiRuENo6lHU1Hf8pg=/filters:quality(70):format(webp)/https://static-id.zacdn.com/p/jack-jones-6697-2382893-1.jpg",
                    "https://www.hollandcooper.com/cdn/shop/products/2021-20-10_SS22_ECOM_DAY_1Look62-WesternCheckShirt_Red-Navy__43324_5_2048x2048.jpg?v=1692628443",
                    "https://assets.ajio.com/medias/sys_master/root/h23/h8b/13558435086366/-473Wx593H-460185802-scarlet-MODEL.jpg",
                ]
            },
            {
                color: colorVariant.white,
                image: [
                    "https://spykar.com/cdn/shop/products/NwI8HnX1gz-MSHCS1BC144WHITE-_4.jpg?v=1672993254",
                    "https://rukminim1.flixcart.com/image/300/350/kplisnk0/shirt/w/w/i/s-bj-sht5149-hanumntra-original-imag3st9zwbm3vgh.jpeg?q=90",
                    "https://images.meesho.com/images/products/333347446/pgy2r_512.webp",
                ]
            },
            {
                color: colorVariant.brown,
                image: [
                    "https://i5.walmartimages.com/seo/One-Day-Away-Men-s-Long-Sleeve-Brushed-Flannel-Shirt_d1a46179-3cbd-4b74-ad13-978b6c2d5ede_1.6bd81a4343b9bb9f961521a3c6bd4a19.jpeg",
                    "https://i5.walmartimages.com/asr/96532b31-85d7-4289-98e8-c213232d0a07_1.2c8c05076844a6e08300d6b7dd83530e.jpeg",
                    "https://i5.walmartimages.com/asr/8b84674b-50c3-4302-919e-967603b0b295_1.9f9c622258f89c1a9d164a1d070e494e.jpeg",
                ]
            }
        ]
    },
    {
        id: 14,
        name: "sleeve striped t-shirt",
        category: "t-shirt",
        description: "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
        price: 160,
        discount: 30,
        rating: 2.5,
        size: ["s", "m", "l", "xl"],
        variant: [
            {
                color: colorVariant.white,
                image: [
                    "https://images.tokopedia.net/img/cache/700/hDjmkQ/2022/12/14/5b6d8012-b7b4-4b07-845a-58f1d56250dc.jpg",
                    "https://static.pullandbear.net/2/photos//2023/I/0/1/p/7242/318/093/7242318093_2_6_8.jpg?t=1692261309384&imwidth=1125",
                    "https://image.uniqlo.com/UQ/ST3/au/imagesgoods/457903/sub/augoods_457903_sub2.jpg",
                ]
            },
            {
                color: colorVariant.black,
                image: [
                    "https://agnesb-agnesb-com-storage.omn.proximis.com/Imagestorage/imagesSynchro/0/0/43627707330a117120f617e0f2178a88deb96839_4366J008_1033_1.jpeg",
                    "https://agnesb-agnesb-com-storage.omn.proximis.com/Imagestorage/imagesSynchro/0/0/c6176d68f0bee71a8c166dd499e027b98cc5497b_4366J008_1033_11.jpeg",
                    "https://cdna.lystit.com/400/500/tr/photos/asos/3fd16d6d/collusion-Blue-Fine-Knit-Stripe-Sweater.jpeg",
                ]
            },
        ]
    },
    {
        id: 15,
        name: "gradient graphic t-shirt",
        category: "t-shirt",
        description: "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
        price: 145,
        discount: null,
        rating: 5,
        size: ["s", "m", "l", "xl"],
        variant: [
            {
                color: colorVariant.pink,
                image: [
                    "https://image1.superdry.com/static/images/optimised/zoom/upload9223368955665648601.jpg",
                    "https://urban-planet.com/cdn/shop/files/688863843660-12-1_4a064d99-cded-4e60-9e26-f90f846a50b1.jpg?v=1692127593",
                    "https://urban-planet.com/cdn/shop/files/688863843660-12-2_b449301d-f5da-408d-a96b-8f40761ef402.jpg?v=1692127595",
                ]
            },
        ]
    },
    {
        id: 16,
        name: "reebok identity tape t-shirt ii",
        category: "t-shirt",
        description: "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
        price: 120,
        discount: null,
        rating: 4.5,
        size: ["s", "m", "l", "xl"],
        variant: [
            {
                color: colorVariant.black,
                image: [
                    "https://img01.ztat.net/article/spp-media-p1/73616b4de7534f33b0815cc4359a661d/d32e372b454f45fd842ea1327012ad47.jpg?imwidth=762",
                    "https://images.reebok.eu/reebok-reebok-identity-vector-tape-t-shirt_19727038_44989497_2048.jpg",
                    "https://images.reebok.eu/reebok-reebok-identity-vector-tape-t-shirt_19727038_44992849_2048.jpg",
                ],
            },
            {
                color: colorVariant.white,
                image: [
                    "https://images.reebok.eu/reebok-reebok-identity-tape-t-shirt_20150676_45332159_2048.jpg",
                    "https://images.reebok.eu/reebok-reebok-identity-tape-t-shirt_20150676_45331311_2048.jpg",
                    "https://images.reebok.eu/reebok-reebok-identity-tape-t-shirt_20150676_45332116_2048.jpg",
                ]
            },
            {
                color: colorVariant.grey,
                image: [
                    "https://images.reebok.eu/reebok-reebok-identity-vector-tape-t-shirt_19727788_44990710_2048.jpg",
                    "https://images.reebok.eu/reebok-reebok-identity-vector-tape-t-shirt_19727788_44991331_2048.jpg",
                    "https://images.reebok.eu/reebok-reebok-identity-vector-tape-t-shirt_19727788_44990774_2048.jpg",
                ]
            }
        ]
    },
    {
        id: 17,
        name: "skinny fit jeans ii",
        category: "jeans",
        description: "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
        price: 260,
        discount: 20,
        rating: 3.5,
        size: ["s", "m", "l", "xl"],
        variant: [
            {
                color: colorVariant.blue,
                image: [
                    "https://www.legendlondon.co/cdn/shop/products/legend-london-jeans-skinny-fit-jeans-light-blue-wash-32686265106629.jpg?v=1695465247&width=416",
                    "https://storage.sg.content-cdn.io/cdn-cgi/image/width=1034,height=1376,quality=75,format=auto,fit=cover,g=top/in-resources/ff5c6da1-2d74-4846-96c9-ccd65d766244/Images/ProductImages/Source/levis-mens-511-slim-fit-jeans-045115526_03_Side.jpg",
                    "https://storage.sg.content-cdn.io/cdn-cgi/image/width=1034,height=1376,quality=75,format=auto,fit=cover,g=top/in-resources/ff5c6da1-2d74-4846-96c9-ccd65d766244/Images/ProductImages/Source/levis-mens-511-slim-fit-jeans-045115526_03_Side.jpg",
                ]
            },
            {
                color: colorVariant.black,
                image: [
                    "https://dynamic.zacdn.com/7YupojC5gHCOooujo40v8kPft5E=/filters:quality(70):format(webp)/https://static-ph.zacdn.com/p/replay-5182-4866362-1.jpg",
                    "https://media.everlane.com/image/upload/c_fill,dpr_2,f_auto,g_face:center,q_auto,w_auto/v1/i/563a7792_a646.jpg",
                    "https://media.everlane.com/image/upload/q_auto,f_auto/i/3a6eafff_96a2.jpg",
                ]
            },
        ]
    },
    {
        id: 18,
        name: "checkered shirt ii",
        category: "shirt",
        description: "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
        price: 180,
        discount: null,
        rating: 4.5,
        size: ["s", "m", "l", "xl"],
        variant: [
            {
                color: colorVariant.red,
                image: [
                    "https://images.asos-media.com/products/asos-design-oversized-shacket-with-pockets-in-mono-check/203450544-1-monocheck/?$n_480w$&wid=476&fit=constrain",
                    "https://www.hollandcooper.com/cdn/shop/products/2021-20-10_SS22_ECOM_DAY_1Look62-WesternCheckShirt_Red-Navy__43324_5_2048x2048.jpg?v=1692628443",
                    "https://assets.ajio.com/medias/sys_master/root/h23/h8b/13558435086366/-473Wx593H-460185802-scarlet-MODEL.jpg",
                ]
            },
            {
                color: colorVariant.white,
                image: [
                    "https://spykar.com/cdn/shop/products/NwI8HnX1gz-MSHCS1BC144WHITE-_4.jpg?v=1672993254",
                    "https://rukminim1.flixcart.com/image/300/350/kplisnk0/shirt/w/w/i/s-bj-sht5149-hanumntra-original-imag3st9zwbm3vgh.jpeg?q=90",
                    "https://images.meesho.com/images/products/333347446/pgy2r_512.webp",
                ]
            },
            {
                color: colorVariant.brown,
                image: [
                    "https://i5.walmartimages.com/seo/One-Day-Away-Men-s-Long-Sleeve-Brushed-Flannel-Shirt_d1a46179-3cbd-4b74-ad13-978b6c2d5ede_1.6bd81a4343b9bb9f961521a3c6bd4a19.jpeg",
                    "https://i5.walmartimages.com/asr/96532b31-85d7-4289-98e8-c213232d0a07_1.2c8c05076844a6e08300d6b7dd83530e.jpeg",
                    "https://i5.walmartimages.com/asr/8b84674b-50c3-4302-919e-967603b0b295_1.9f9c622258f89c1a9d164a1d070e494e.jpeg",
                ]
            }
        ]
    },
    {
        id: 19,
        name: "sleeve striped t-shirt ii",
        category: "t-shirt",
        description: "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
        price: 160,
        discount: 30,
        rating: 2.5,
        size: ["s", "m", "l", "xl"],
        variant: [
            {
                color: colorVariant.white,
                image: [
                    "https://static.bershka.net/4/photos2/2023/I/0/2/p/7945/645/712/d1a387b516c93934c178e14eefb59514-7945645712_1_1_0.jpg",
                    "https://static.pullandbear.net/2/photos//2023/I/0/1/p/7242/318/093/7242318093_2_6_8.jpg?t=1692261309384&imwidth=1125",
                    "https://image.uniqlo.com/UQ/ST3/au/imagesgoods/457903/sub/augoods_457903_sub2.jpg",
                ]
            },
            {
                color: colorVariant.black,
                image: [
                    "https://agnesb-agnesb-com-storage.omn.proximis.com/Imagestorage/imagesSynchro/0/0/43627707330a117120f617e0f2178a88deb96839_4366J008_1033_1.jpeg",
                    "https://agnesb-agnesb-com-storage.omn.proximis.com/Imagestorage/imagesSynchro/0/0/c6176d68f0bee71a8c166dd499e027b98cc5497b_4366J008_1033_11.jpeg",
                    "https://cdna.lystit.com/400/500/tr/photos/asos/3fd16d6d/collusion-Blue-Fine-Knit-Stripe-Sweater.jpeg",
                ]
            },
        ]
    },
    {
        id: 20,
        name: "gradient graphic t-shirt ii",
        category: "t-shirt",
        description: "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
        price: 145,
        discount: null,
        rating: 5,
        size: ["s", "m", "l", "xl"],
        variant: [
            {
                color: colorVariant.pink,
                image: [
                    "https://cdn-images.farfetch-contents.com/20/25/90/22/20259022_50262185_600.jpg",
                    "https://urban-planet.com/cdn/shop/files/688863843660-12-1_4a064d99-cded-4e60-9e26-f90f846a50b1.jpg?v=1692127593",
                    "https://urban-planet.com/cdn/shop/files/688863843660-12-2_b449301d-f5da-408d-a96b-8f40761ef402.jpg?v=1692127595",
                ]
            },
        ]
    },
]

const happyCust = [
    {
        id: 1,
        name: "Sarah M.",
        rate: 5,
        comment: `"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”`
    },
    {
        id: 2,
        name: "Alex K.",
        rate: 4.5,
        comment: `"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”`
    },
    {
        id: 3,
        name: "James L.",
        rate: 3.5,
        comment: `"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”`
    },
    {
        id: 4,
        name: "Julia J.",
        rate: 5,
        comment: `"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”`
    },
    {
        id: 5,
        name: "Adam M.",
        rate: 4.5,
        comment: `"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”`
    },
    {
        id: 6,
        name: "Ken L.",
        rate: 5,
        comment: `"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”`
    },
    {
        id: 7,
        name: "Jack M.",
        rate: 5,
        comment: `"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”`
    },
    {
        id: 8,
        name: "Louis K.",
        rate: 4,
        comment: `"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”`
    },
    {
        id: 9,
        name: "Henry L.",
        rate: 5,
        comment: `"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”`
    },
]
export {
    category,
    dreesStyle,
    products,
    happyCust,
    colorVariant
}