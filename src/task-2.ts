interface Product {
  id: number;
  readonly title: string;
  description?: string;
}
const product: Product = {
  id: 1,
  title: "Tablet",
  description: "Compact and fast",
};

console.log(`Product: ${JSON.stringify(product)}`);
