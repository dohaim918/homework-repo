import { useState } from "react";

const ShoppingCart = [
  { id: 1, name: "노트북", price: 200 },
  { id: 2, name: "마우스", price: 4 },
  { id: 3, name: "키보드", price: 10 },
];
export default function Shopping() {
  const [cart, setCart] = useState([]);

  // 삭제 애니메이션 추가
  const [deletId, setDeletId] = useState(null);

  // 추가
  const handleAdd = (prod) => {
    setCart((p) => {
      const isItem = p.find((item) => item.id == prod.id);

      if (isItem) {
        return p.map((item) => (item.id == prod.id ? { ...item, num: item.num + 1 } : item));
      }

      return [...p, { ...prod, num: 1 }];
    });
  };

  // 삭제
  const handleDel = (id) =>
    setCart((p) =>
      p
        .map((item) => (item.id == id ? { ...item, num: item.num - 1 } : item))
        .filter((item) => item.num > 0),
    );
  const handleAllDel = (id) => {
    setDeletId(id);

    setTimeout(() => {
      // 삭제
      setCart((p) => p.filter((item) => item.id !== id));
      setDeletId(null);
    }, 600);
  };

  // 총합
  const Total = cart.reduce((sum, item) => sum + item.price * item.num, 0);

  // svg
  const MinusIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="bi bi-dash"
      viewBox="0 0 16 16"
    >
      <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8" />
    </svg>
  );
  const TrashIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 6h18m-2 0v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6m3 0V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
      <line x1="10" y1="11" x2="10" y2="17" />
      <line x1="14" y1="11" x2="14" y2="17" />
    </svg>
  );
  return (
    <div className="card">
      <div className="product-wrap">
        {ShoppingCart.map((product) => (
          <button key={product.id} className="add-btn" onClick={() => handleAdd(product)}>
            {product.name} ({product.price}만) +
          </button>
        ))}
      </div>
      <div className="cart-wrap">
        <p className="text">장바구니 목록</p>
        <ul className="cart-list">
          {cart.map((prod) => (
            <li key={prod.id} className={deletId === prod.id ? "item-exit" : ""}>
              <div className="item-inner">
                <p className="name">
                  {prod.name} {prod.num > 1 && <span className="num">{`x ${prod.num}`}</span>}
                </p>
                <div className="btn-group">
                  <button className="del-btn" onClick={() => handleDel(prod.id)}>
                    <MinusIcon />
                  </button>
                  <button className="del-btn" onClick={() => handleAllDel(prod.id)}>
                    <TrashIcon />
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <p>Total : {Total.toLocaleString()}만원</p>
    </div>
  );
}
