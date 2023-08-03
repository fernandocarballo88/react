import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc, where, query  } from "firebase/firestore"




// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4R7oI3T8TCLyZYOJQLNj_ObydNIl6NnA",
  authDomain: "react-coder-ef1b4.firebaseapp.com",
  projectId: "react-coder-ef1b4",
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


async function getCategoryData(){
    const productsRef = collection(db, "products")
    const q = query(productsRef, where("category", "==", "DC"))
    const documentsSnapshot = await getDocs(q);

    const documents = documentsSnapshot.docs

return documents.map((item) => ( { ...item.data(), id: item.id }));
}

export { getData, getProductData, getCategoryData };