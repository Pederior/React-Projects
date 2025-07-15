import Product from "./Product/Product"
import './App.css'

function App() {
  return (
    <div className="container">
      <Product img='A51.png' name='Samsung A51' price='$300' detail='It is the best smart phone for 2021'></Product>
      <Product img='9S.png' name='Xiaomi Note 9S' price='$250' detail='Announced Apr 2020'></Product>
      <Product img='iphone13.png' name='Iphone 13' price='$999' detail="Our most advanced dual-camera system. A chip that's faster than the competition"></Product>
    </div>
  )
}

export default App
