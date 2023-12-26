const product = [
    {
        id: 1,
        image: "img/aa-1.png",
        title: "Headphone",
        price: "$20",
    },
    {
        id: 2,
        image: "img/bb-1.png",
        title: "Rode NT1 Microphone",
        price: "$45",
    },
    {
        id: 3,
        image: "img/cc-1.png",
        title: "Smart Watch",
        price: "$30",
    },
    {
        id: 4,
        image: "img/dd-1.png",
        title: "HP Laptop Next Generation",
        price: "$70",
    },
    {
        id: 5,
        image: "img/ee-1.png",
        title: "250D DSLR Camera",
        price: "60",
    },
    {
        id: 6,
        image: "img/ff-1.png",
        title: "Metal Desk Lamp",
        price: "$35",
    },
    {
        id: 7,
        image: "img/gg-1.png",
        title: "Z Flip Foldable Mobile",
        price: "$55",
    },
    {
        id: 8,
        image: "img/hh-1.png",
        title: "Air Pods Pro",
        price: "$50",
    },
];

const categories = [
    ...new Set(
        product.map((item) => {
            return item;
        })
    ),
];

let cart = document.getElementById("root");
cart.innerHTML = categories
    .map((item) => {
        var { image, title, price } = item;
        return `<div class="box">
                <div clas="img-box">
                    <img src=${image}></img>                
                </div>
                <div class="left">
                    <p>${title}</p>
                    <h2>${price}</h2>
                    <button>Add to Cart</button>
                </div>
            </div>`;
    })
    .join("");
