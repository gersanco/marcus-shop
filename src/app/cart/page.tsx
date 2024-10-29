import { LuPlus, LuMinus, LuTrash2 } from "react-icons/lu";
import Button from "@/components/button";
import { getLineItems } from "@/functions/line-items";
import calculateTotalPrice from "@/libs/calculate-total-price";
import CartActions from "@/components/cart/cart-actions";

const getData = async () => {
  const items = getLineItems();

  return items;
};

export default async function CartPage() {
  const cartItems = await getData();
  const totalPrice = calculateTotalPrice(cartItems);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.uid}
              className="flex items-center justify-between border-b pb-4"
            >
              <div>
                <h2 className="font-semibold">{item.name}</h2>
                <p className="text-sm text-gray-500">
                  {item.price.toFixed(2)} € each
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <CartActions productId={item.uid}>
                  <Button
                    name="action"
                    value="decrease"
                    color="ghost"
                    aria-label={`Decrease quantity of ${item.name}`}
                  >
                    <LuMinus className="h-4 w-4" />
                  </Button>
                  <span className="w-8 text-center">{item.quantity}</span>
                  <Button
                    name="action"
                    value="increase"
                    color="ghost"
                    aria-label={`Increase quantity of ${item.name}`}
                  >
                    <LuPlus className="h-4 w-4" />
                  </Button>
                  <Button
                    color="ghost"
                    name="action"
                    value="remove"
                    aria-label={`Remove ${item.name} from cart`}
                  >
                    <LuTrash2 className="h-4 w-4 text-error" />
                  </Button>
                </CartActions>
              </div>
            </div>
          ))}
          <div className="flex justify-between items-center pt-4">
            <span className="text-xl font-bold">Total:</span>
            <span className="text-xl">{totalPrice.toFixed(2)} €</span>
          </div>
          <Button className="w-full">Proceed to Checkout</Button>
        </div>
      )}
    </div>
  );
}
