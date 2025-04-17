function Masala() {
    const cart = [
        {
            count: 1,
            product: {
                name: "Olma",
                id: 1,
            },
        },
    ];

    const products = [
        {
            name: "Olma",
            id: 1,
        },
        {
            name: "Nok",
            id: 2,
        },
    ];

    addToCart(products, cart)

    
    console.log(cart)
}

function addToCart(
    product: {
        name: string;
        id: number;
    }[]
, cart: {}[]) {
    return product.map((product) => {
        return [
            ...cart,
            {
                count: product.id,
                product: {
                    name: product.name,
                    id: product.id
                },
            },
        ];
    })
}

export default Masala;
