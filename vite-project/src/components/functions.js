import { app } from '../firebase';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';


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
function capitalize(str) {
    if (!str) return str; 
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }
export const getProductFromCategory =(category) =>{
    console.log(category)
    const db = getFirestore(app)
    const productCollection = collection(db, "product")
    const filtro = query(productCollection, where("category","==",capitalize(category)))
    const consulta = getDocs(filtro)
    
    return consulta
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