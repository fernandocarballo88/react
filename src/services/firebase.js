import { initializeApp } from "firebase/app";
import { useParams } from "react-router-dom";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import { getFirestore, collection, getDocs, doc, getDoc, where, query, addDoc, writeBatch } from "firebase/firestore"




// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "react-coder-ef1b4.firebaseapp.com",
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: "react-coder-ef1b4.appspot.com",
  messagingSenderId: "923188735684",
  appId: "1:923188735684:web:7a50750a4ffcba88ac2391"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
const db = getFirestore(appFirebase)


/*const q = query(collection(db, "cities"), where("capital", "==", true));

const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
});*/

async function getData() {
const productsRef = collection(db, "products")
const documentsSnapshot = await getDocs(productsRef)
//console.log(documentsSnapshot.docs[0].data());
const documents = documentsSnapshot.docs
const docsData = documents.map((item) => ( { ...item.data(), id: item.id } )
  /*let productFullData = item.data()
  productFullData.id = item.id
  return productFullData*/
);
return docsData;
};

async function getProductData(id){

const docRef = doc(db, "products", id);
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
    return {...docSnap.data(), id: docSnap.id}
} else { throw new Error("producto no ecnontrado")
  // docSnap.data() will be undefined in this case
}
}


async function getCategoryData(categoryId){
    const productsRef = collection(db, "products")
    const q = query(productsRef, where("category", "==", categoryId))
    const documentsSnapshot = await getDocs(q);

    const documents = documentsSnapshot.docs

return documents.map((item) => ( { ...item.data(), id: item.id }));
}

async function createOrder(orderData){
  const collectionRef = collection(db, "orders")

  const docCreated = await addDoc(collectionRef, orderData)
  return (docCreated.id)
}

async function getOrder(id){
  const docRef = doc(db, "orders", id);
  const docSnapshot = await getDoc(docRef);
  
  if(docSnapshot.exists()){
  return { ...docSnapshot.data(), id: docSnapshot.id };
  } else{
    throw new Error("producto no encontrado")
  }
}

async function exportProducts(){
  const productos = [
    {

        title: "X wing",
        img:"../assets/img/xwing.jpg",
        price:50,
        stock:4,
        category: "Star Wars",

    }
];}

async function exportProductsWithBatch(){
  const productos = [
    {   title:"Imperial Shuttle",
        id: 2,
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

        title:"Tie Fighter",
        id: 5,
        img:"../assets/img/tie fighter.jpg",
        price:30,
        stock:10,
        category: "Star Wars",

    },
    {

        title:"Hulkbuster",
        id: 6,
        img:"../assets/img/marvel.jpeg",
        price:200,
        stock:1,
        category: "Marvel",
    },
];
const batch = writeBatch(db);

productos.forEach( producto => {
  const newDoc = doc(db, "products", String(producto.id))
  batch.set(newDoc, producto)
})

await batch.commit()
console.log("listo")




for(let item of productos){
  /*const docRef = doc(db, "products", item.id)
  setDoc(docRef, item)
  const docCreated = await setDoc(docRef, item);
  console.log("Doc created with id:", docCreated.id)*/
  const collectionRef = collection(db, "products")
  const docCreated = await addDoc(collectionRef, item);
  console.log("Doc created with id:", docCreated.id)}
}
export { getData, getProductData, getCategoryData, createOrder, getOrder, exportProducts, exportProductsWithBatch};

