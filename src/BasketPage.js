import React from "react";
import qoreContext from "./qoreContext";

const BasketPage = ({ basketId }) => {
  const { data: currentBasket } = qoreContext
    .view("allBasket")
    .useGetRow(basketId);
  const { data: products } = qoreContext.view("allProduct").useListRow();

  console.log(
    products.filter((product) =>
      currentBasket?.idProduct.nodes.map((node) => node.id).includes(product.id)
    )
  );

  return <pre>{JSON.stringify(currentBasket, null, 2)}</pre>;
};

export default BasketPage;
