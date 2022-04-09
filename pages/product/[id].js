import { useRouter } from "next/router";
import React from "react";

const ProductItem = () => {
  const {
    query: { id },
  } = useRouter();
  return <div>Esta es la pagina del producto: {id}</div>;
};

export default ProductItem;
