"use client";
import { useEffect, useState } from "react";
import {
  getBrandSales,
  getCategories,
  getCategoryProducts,
  getProductBrands,
} from "./api";
import Dropdown from "./dropdown";
import { Chart } from "./chart";

export default function Home() {
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  const [categoryProducts, setCategoryProducts] = useState<string[]>([]);
  const [selectedProduct, setSelectedProduct] = useState("");

  const [productBrands, setProductBrands] = useState<string[]>([]);
  const [selectedBrand, setSelectedBrand] = useState("");

  const [brandSales, setBrandSales] = useState<number[]>([0, 0, 0, 0]);

  useEffect(() => {
    getCategories().then((cats) => {
      setCategories(cats);
      setSelectedCategory(cats[0]);
    });
  }, []);

  useEffect(() => {
    getCategoryProducts(selectedCategory).then((products) => {
      setCategoryProducts(products);
      setSelectedProduct(products[0]);
    });
  }, [selectedCategory]);

  useEffect(() => {
    getProductBrands(selectedProduct).then((brands) => {
      setProductBrands(brands);
      setSelectedBrand(brands[0]);
    });
  }, [selectedProduct]);

  useEffect(() => {
    getBrandSales(selectedBrand).then((sales) => {
      setBrandSales(sales);
    });
  }, [selectedBrand]);

  return (
    <>
      <div className="relative flex flex-wrap items-center justify-around px-2 py-3 mb-3 ">
        <Dropdown
          label="Categoría"
          value={selectedCategory}
          values={categories}
          onClick={(val) => setSelectedCategory(val)}
        />
        <Dropdown
          label="Producto"
          value={selectedProduct}
          values={categoryProducts}
          onClick={(val) => setSelectedProduct(val)}
        />
        <Dropdown
          label="Marca"
          value={selectedBrand}
          values={productBrands}
          onClick={(val) => setSelectedBrand(val)}
        />
      </div>
      <Chart data={brandSales} />
    </>
  );
}
