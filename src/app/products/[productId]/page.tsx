export default function ProductDetails({params , } :{
    params:{productId:string}
}){
    return(
        <>
        <h1>
        Product details pages {params.productId}
        </h1>
        
        </>
    )
}