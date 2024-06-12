// pages/index.tsx
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { products } from "./products";

export default function Home() {
    return (
        <div>
            <nav className="bg-green-800 p-4 text-white font-bold text-2xl flex justify-around">
                <Link href="/">Home</Link>
                <Link href="/">Shop</Link>
                <Link href="/">About</Link>
                <Link href="/">Contact</Link>
            </nav>

            <div className="container mx-auto p-6">
                <h1 className="text-4xl font-bold mb-6 text-center">iPhone BumbleShop</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products.map((product) => (
                        <div key={product.id} className="border p-4 rounded-lg shadow-lg">
                            <div className="w-full h-80 overflow-hidden mb-4">
                                <img src={product.image} alt={product.name} className="w-full h-full object-contain"/>
                            </div>
                            <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
                            <p className="text-gray-700 mb-4">{product.description}</p>
                            <p className="text-xl font-semibold mb-4">{product.price}</p>
                            <Link href={`strona/Phone${product.id}`}>
                                <Button className="bg-green-500 hover:bg-green-700 w-full">
                                    Buy Now
                                </Button>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
