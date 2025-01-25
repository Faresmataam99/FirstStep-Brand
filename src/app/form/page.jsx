"use client"
export default ()=>{
    const [products,setproducts]=useState([])
    useEffect(()=>{
            const addData = async()=>{
                try{
                    const adding = await axios.post("http://localhost:5000/products")
                    .then((response)=>setproducts(response.data.products))
                }catch(err){
                    res.status(422).json(err.message)
                }
        }
    })
    return(
        <>
        <div className="flex items-center justify-center flex-col p-4 gap-4">
            <form action="" method="post">
                <label htmlFor="name"></label>
                <input type="text" id="title" name="title" placeholder="title..." />
                <label htmlFor="price"></label>
                <input type="price" id="price" name="price" />
                <label htmlFor=""></label>
                <input type="text" />
            </form>

        </div>
        
        
        
        </>
    )
}