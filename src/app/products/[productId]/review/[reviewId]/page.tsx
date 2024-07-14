export default function ReviewDetails({params , } :{
    params:{productId:string,
        reviewId:string
    }
}){
    return(
        <>
        <h1>
        Product review {params.reviewId} pages product details page {params.productId}
        </h1>
        
        </>
    )
}
