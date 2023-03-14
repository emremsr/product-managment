import ProductList from "./components/ProductList.vue";
import ProductOperations from "./components/ProductOperations.vue";
import ProductSale from "./components/ProductSale.vue";

export const routes = [
  { path: "/", component: ProductList },
  { path: "/product", component: ProductOperations },
  { path: "/productsell", component: ProductSale },
];
