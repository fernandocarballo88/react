

function getData() {
    return new Promise( (resolve,reject) =>{
        const productos = [
            {
                id: 1,
                title: "X wing",
                img:"../assets/img/xwing.jpg",
                price:50,
                stock:4,
            },
            {
                id: 2,
                title:"Imperial Shuttle",
                img:"../assets/img/imperial shuttle.jpeg",
                price:60,
                stock:3,
            },
            {
                id: 3,
                title:"Naboo Starfighter",
                img:"../assets/img/naboo n1.jpg",
                price:80,
                stock:1,
            },
            {
                id: 4,
                title:"Razor Crest",
                img:"../assets/img/razor crest.jpg",
                price:100,
                stock:2,
            },
            {
                id: 5,
                title:"Tie Fighter",
                img:"../assets/img/tie fighter.jpg",
                price:30,
                stock:10,
            },
            {
                id: 6,
                title:"Imperial Cruisser",
                img:"../assets/img/imperial cruiser.jpg",
                price:200,
                stock:1,
            },
        ];
        setTimeout( () => {
            resolve(productos)
        }, 2000)
    })
}

export function getProductData(idURL) {
    return new Promise( (resolve,reject) =>{
        const productos = [
            {
                id: 1,
                title: "X wing",
                img:"../assets/img/xwing.jpg",
                price:50,
                stock:4,
                category: "Star Wars"
            },
            {
                id: 2,
                title:"Imperial Shuttle",
                img:"../assets/img/imperial shuttle.jpeg",
                price:60,
                stock:3,
                category: "Star Wars"
            },
            {
                id: 3,
                title:"Batman",
                img:"../assets/img/batman.jpg",
                price:80,
                stock:1,
                category: "DC"
            },
            {
                id: 4,
                title:"Razor Crest",
                img:"../assets/img/razor crest.jpg",
                price:100,
                stock:2,
                category: "Star Wars"
            },
            {
                id: 5,
                nombre:"Tie Fighter",
                img:"../assets/img/tie fighter.jpg",
                price:30,
                stock:10,
                category: "Star Wars"
            },
            {
                id: 6,
                title:"Hulkbuster",
                img:"../assets/img/marvel.jpeg",
                price:200,
                stock:1,
                category: "Marvel"
            },
        ];
        const productRequested = productos.find((item) => item.id === parseInt(idURL));
        setTimeout( () => {
            resolve(productRequested)
        }, 2000)
    })
}

export default getData;

//crear promesa
//simular retardo con setTimeout
//resolver  los retardos con "resolve"
// retornamos  la promise