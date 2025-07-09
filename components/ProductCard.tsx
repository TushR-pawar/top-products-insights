type Product = {
  id: number;
  title: string;
  price: number;
  rating: number;
  thumbnail: string;
  region: string;
  date: string;
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-white rounded-lg shadow hover:shadow-lg hover:-translate-y-1 transition p-4 space-y-2">
      <img
        src={product.thumbnail}
        alt={`Image of ${product.title}`}
        className="w-full aspect-[4/3] object-cover rounded-md border border-slate-200"
      />
      <h2 className="text-sm font-semibold text-slate-800">{product.title}</h2>
      <p className="text-green-600 font-medium text-sm">₹{product.price}</p>
      <p className="text-amber-500 text-sm">⭐ {product.rating}</p>
      <div className="flex justify-between text-xs text-slate-500">
        <span>{product.region}</span>
        <span>{product.date.slice(0, 10)}</span>
      </div>
    </div>
  );
}