const products = [
    {
        id: 1,
        title: "Mango"
    },
    {
        id: 2,
        title: "Apple"
    },
    {
        id: 3,
        title: "Orange"
    },
    {
        id: 4,
        title: "Lemon"
    }
];

function RenderList(){
    const listItems = products.map(product =>{
        return <li key={product.id}>
            {product.title}
        </li>
    });

    return <>
        <h2>Fruits that I loves so much.</h2>
        <ul>{listItems}</ul>
    </>
};

export {RenderList};