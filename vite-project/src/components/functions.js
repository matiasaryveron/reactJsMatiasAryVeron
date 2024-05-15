import { app } from '../firebase';
import { getFirestore, collection, getDocs } from 'firebase/firestore';


export const getProduct = () =>{  

    const db = getFirestore(app)

    const productCollection = collection(db, "product")

    const query = getDocs(productCollection)

     return query
        .then((resultado) => {
        const productos = resultado.docs.map(doc =>{
            const producto = doc.data()
            producto.id = doc.id
            
            return producto 
        })
        return productos
    })
    .catch ((error) => {
        console.log(error)
    })
}