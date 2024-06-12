import { Button } from "@/components/ui/button";
import Link from "next/link";
import { products } from "../../products";

export default function Home() {
    const product = products[3];

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
                <div className="flex flex-col lg:flex-row items-start">
                    <div className="lg:w-1/2 p-4 relative">
                        <div className="w-full h-96 mb-4 lg:mb-0">
                            <img src={product.image} alt={product.name}
                                 className="w-full h-full object-contain rounded-lg"/>
                        </div>
                    </div>

                    <div className="lg:w-1/2 p-4 flex justify-start items-start">
                        <div className="w-full max-w-md">
                            <div className="border p-4 rounded-lg shadow-lg mb-4">
                                <h2 className="text-3xl font-bold mb-4">{product.name}</h2>
                                <div className="text-xl text-gray-700 mb-4">
                                    <p>Cechy produktu:</p>
                                    <ul className="list-disc list-inside">
                                        <li>Rozmiar ekranu: 6.1 cala</li>
                                        <li>Aparat: 12 MP</li>
                                        <li>Czas pracy baterii: 18 godzin</li>
                                        <li>Pojemność: 128 GB</li>
                                        <li>Kolor: Purple</li>
                                    </ul>
                                </div>
                                <p className="text-2xl font-semibold mb-6">Cena: {product.price}</p>
                                <Link href={`/strona/Thanks`}>
                                    <Button className="bg-green-500 hover:bg-green-700 w-full text-xl py-4">
                                        Kup teraz
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lg:w5 p-4 lg:ml-auto">
                    <div className="border p-4 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-bold mb-4">Opis</h3>
                        <p className="text-lg text-gray-700">
                            iPhone 12 Mini to kompaktowy i mocny smartfon, który łączy wydajność i estetykę w
                            eleganckim wykonaniu. Ekran Super Retina XDR OLED zapewnia żywe kolory i doskonały
                            kontrast, a rozmiar 5.4 cala sprawia, że telefon mieści się wygodnie w dłoni.
                            Procesor A14 Bionic zapewnia szybką i płynną pracę aplikacji, gier i innych zadań,
                            przy jednoczesnej oszczędności energii. System podwójnej kamery 12 MP z trybem Night
                            mode i Deep Fusion umożliwiają robienie doskonałych zdjęć w różnych warunkach
                            oświetleniowych, natomiast nagrywanie wideo w jakości 4K HDR z Dolby Vision podnosi
                            standardy filmowania mobilnego. iPhone 12 Mini wspiera szybkie ładowanie MagSafe oraz
                            jest odporny na zachlapania i pył, co sprawia, że jest idealnym wyborem dla miłośników
                            kompaktowych smartfonów.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
