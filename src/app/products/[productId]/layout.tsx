export default function ProductDetailsLayout({
    children,
}:{
    children:React.ReactNode;
}){
    return(
        <>
        <h2>Features Products</h2>
        {children}
        </>
    )
}