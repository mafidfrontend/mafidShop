import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

function Cart() {
  const cartItems = useSelector((state: RootState) => state.cart.items);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Savatcha</h1>
      {cartItems.length === 0 ? (
        <p>Hozircha hech nima yo‘q</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} className="mb-2 p-2 border-b">
            <h2>{item.description}</h2>
            <p>${item.price}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;