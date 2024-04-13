import data from "./data.json"


function IntemListContainer(){
  const {id} = useParams()
  useEffect(()=>{

const miPromesa = new Promise ((res)=>{
  setTimeout(()=>{
    res(data)
  },2000)
})
miPromesa.then((res)=>{
  console.log (res)
})
miPromesa.catch(()=> console.log ("mal"))
miPromesa.finally(()=> console.log ("fin"))
})}

export default ItemListContainer