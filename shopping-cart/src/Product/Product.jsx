
import './Product.css'

function Product() {
    return ( 
     <div>
        <h2>Product Card</h2>
        <div className="card">
            <img src="A51.png"/>
            <h1>Samsung A51</h1>
            <p className="price">$300</p>
            <p>It is the best smart phone for 2021</p>
            <p><button>Add To Cart</button></p>
        </div>
     </div>   
    )
}

export default Product;