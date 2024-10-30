import { SHOP_TAX_RATE } from "@/libs/constants";
import Card from "../card";
import PriceTag from "../cart/price-tag";
import Button from "../button";

type OrderItem = {
  uid: string;
  name: string;
  price: number;
  quantity: number;
};

type Order = {
  items: OrderItem[];
  subtotal: number;
  tax: number;
  shipping: number;
  total: number;
};

const TAX_PERCENTAJE = SHOP_TAX_RATE * 100;

export default function OrderSummary({ order }: { order: Order }) {
  return (
    <Card className="shadow-xl">
      <Card.Body>
        <Card.Header>Order Summary</Card.Header>
        <div className="space-y-4">
          {order.items.map((item) => (
            <div key={item.uid} className="flex justify-between">
              <span>
                {item.name} x {item.quantity}
              </span>
              <PriceTag price={item.price * item.quantity} />
            </div>
          ))}
          <div className="divider"></div>
          <div>
            <div className="flex justify-between">
              <span>Subtotal</span>
              <PriceTag price={order.subtotal} />
            </div>
            <div className="flex justify-between">
              <span>Tax ({TAX_PERCENTAJE}%)</span>
              <PriceTag price={order.tax} />
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <PriceTag price={order.shipping} />
            </div>
            <div className="flex justify-between font-bold mt-4">
              <span>Total</span>
              <PriceTag price={order.total} />
            </div>
          </div>
          <div className="divider"></div>
          <div>
            <Button color="primary" form="billing-form" className="w-full">
              Confirm order
            </Button>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}
