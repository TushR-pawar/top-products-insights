'use client';
import { useEffect, useState } from 'react';
import Header from '../components/Header';
import FilterBar from '../components/FilterBar';
import ProductCard from '../components/ProductCard';

type Product = {
  id: number;
  title: string;
  price: number;
  rating: number;
  thumbnail: string;
  region: string;
  date: string;
};

export default function Page() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedRegion, setSelectedRegion] = useState('All');
  const [selectedTime, setSelectedTime] = useState('All');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch('https://dummyjson.com/products');
      const data = await res.json();

      const simulatedProducts = data.products.map((product: any) => ({
        id: product.id,
        title: product.title,
        price: product.price,
        rating: product.rating,
        thumbnail: product.thumbnail,
        region: ['Maharashtra', 'Delhi', 'Gujarat', 'Karnataka'][product.id % 4],
        date: new Date(2023, product.id % 12, 10).toISOString(),
      }));

      setProducts(simulatedProducts);
      setLoading(false);
    };
    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product) => {
    const regionMatch = selectedRegion === 'All' || product.region === selectedRegion;
    const monthMatch =
      selectedTime === 'All' ||
      new Date(product.date).toLocaleString('default', { month: 'long' }) === selectedTime;
    return regionMatch && monthMatch;
  });

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 px-4 py-8">
      <div className="max-w-screen-lg mx-auto space-y-10">
        <Header />
        <FilterBar
          selectedRegion={selectedRegion}
          setSelectedRegion={setSelectedRegion}
          selectedTime={selectedTime}
          setSelectedTime={setSelectedTime}
        />
        {loading ? (
          <p className="text-center text-slate-500">Loading products...</p>
        ) : filteredProducts.length === 0 ? (
          <p className="text-center text-slate-500">No products match the selected filters.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}