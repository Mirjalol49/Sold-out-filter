import CartTable from "./Components/CardTable";
import Data from "./data";
function App() {
  const inStockItems = Data.filter((item) => item.inStock);
  const outOfStockItems = Data.filter((item) => !item.inStock);
  return (
    <div className="container">
      <h2 className="main-title">Book store</h2>
      <CartTable items={inStockItems} />
      <div className="btn-box">
        <button>Continue checkout</button>
      </div>

      <h2 className="sold-title">Sold out</h2>
      <CartTable items={outOfStockItems} />
    </div>
  );
}

export default App;
