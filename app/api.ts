import data from "../public/data.json";

export async function getCategories() {
  return data["categories"];
}

export async function getCategoryProducts(category: string) {
  const products = data["products"];
  
  return products[category as keyof typeof products] ?? [];
}

export async function getProductBrands(product: string) {
  const brands = data["brands"];
  
  return brands[product as keyof typeof brands] ?? [];
}

export async function getBrandSales(brand: string) {
  const sales = data["sales"];
  
  return sales[brand as keyof typeof sales] ?? [];
  
}