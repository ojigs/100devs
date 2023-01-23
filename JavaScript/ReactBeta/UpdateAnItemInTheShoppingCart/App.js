// To-do
// Fill in the handleIncreaseClick logic so that pressing ”+” increases the corresponding number:

// import { useState } from "react";

// const initialProducts = [
//   {
//     id: 0,
//     name: "Baklava",
//     count: 1,
//   },
//   {
//     id: 1,
//     name: "Cheese",
//     count: 5,
//   },
//   {
//     id: 2,
//     name: "Spaghetti",
//     count: 2,
//   },
// ];

// export default function ShoppingCart() {
//   const [products, setProducts] = useState(initialProducts);

//   function handleIncreaseClick(productId) {}

//   return (
//     <ul>
//       {products.map((product) => (
//         <li key={product.id}>
//           {product.name} (<b>{product.count}</b>)
//           <button
//             onClick={() => {
//               handleIncreaseClick(product.id);
//             }}
//           >
//             +
//           </button>
//         </li>
//       ))}
//     </ul>
//   );
// }

import { useState } from "react";

const initialProducts = [
  {
    id: 0,
    name: "Baklava",
    count: 1,
  },
  {
    id: 1,
    name: "Cheese",
    count: 5,
  },
  {
    id: 2,
    name: "Spaghetti",
    count: 2,
  },
];

export default function ShoppingCart() {
  const [products, setProducts] = useState(initialProducts);

  function handleIncreaseClick(productId) {
    let nextProducts = products.map((product) => {
      if (product.id === productId) {
        return { ...product, count: product.count + 1 };
      } else {
        return product;
      }
    });
    setProducts(nextProducts);
  }

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          {product.name} (<b>{product.count}</b>)
          <button
            onClick={() => {
              handleIncreaseClick(product.id);
            }}
          >
            +
          </button>
        </li>
      ))}
    </ul>
  );
}
