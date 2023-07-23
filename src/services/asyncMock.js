const productos = [
    {
        id: 1,
        title: "X wing",
        img:"../assets/img/xwing.jpg",
        price:50,
        stock:4,
        category: "Star Wars",

    },
    {
        id: 2,
        title:"Imperial Shuttle",
        img:"../assets/img/imperial shuttle.jpeg",
        price:60,
        stock:3,
        category: "Star Wars",

    },
    {
        id: 3,
        title:"Batman",
        img:"../assets/img/batman.jpg",
        price:80,
        stock:1,
        category: "DC",
    },
    {
        id: 4,
        title:"Razor Crest",
        img:"../assets/img/razor crest.jpg",
        price:100,
        stock:2,
        category: "Star Wars",

    },
    {
        id: 5,
        title:"Tie Fighter",
        img:"../assets/img/tie fighter.jpg",
        price:30,
        stock:10,
        category: "Star Wars",

    },
    {
        id: 6,
        title:"Hulkbuster",
        img:"../assets/img/marvel.jpeg",
        price:200,
        stock:1,
        category: "Marvel",
    },
];

function getData() {
    return new Promise( (resolve,reject) =>{

        setTimeout( () => {
            resolve(productos)
        }, 2000)
    })
}

export function getProductData(idURL) {
    return new Promise((resolve, reject) => {
      const productRequested = productos.find(
        (item) => item.id === Number(idURL)
      );
  
      setTimeout(() => {
        resolve(productRequested);
      }, 2000);
    });
  }

export function getCategoryData(categoryURL){
return new Promise( (resolve, reject) => {

    const categoryRequested = productos.filter( item => {
        return item.category.toLowerCase() === categoryURL.toLowerCase();
    });
    setTimeout(() => {
        resolve(categoryRequested);
    }, 2000)
})
}

export default getData;

//crear promesa
//simular retardo con setTimeout
//resolver  los retardos con "resolve"
// retornamos  la promise