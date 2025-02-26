import Image from "next/image";
import Link from "next/link";

export default function Menu() {
  return (
    <div className="bg-[#FAF3E0] text-gray-900 flex flex-col min-h-screen">
      {/* Header */}
      <header className="text-white w-full py-4 shadow-lg bg-green-900">
        <div className="container mx-auto flex justify-between items-center px-6">
          <h1 className="text-3xl font-serif font-bold">
            <Link href="/">L'Insolito Bar</Link>
          </h1>
          <nav>
            <ul className="flex space-x-6 text-lg">
              <li><Link href="/" className="hover:text-gray-300">Home</Link></li>
              <li><Link href="/menu" className="hover:text-gray-300">Menu</Link></li>
              <li><Link href="#contatti" className="hover:text-gray-300">Contatti</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Sezione Menu */}
      <main className="flex-1 py-16 px-6 text-center">
        <div className="container mx-auto">
          <h2 className="text-5xl font-serif font-bold text-[#5C3D2E] mb-8">Il Nostro Menu</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-3xl font-semibold text-[#8B4513]">Antipasti</h3>
              <p className="text-lg text-gray-700">Gnocco fritto con salumi - €8.00</p>
              <p className="text-lg text-gray-700">Bruschette miste - €6.00</p>
            </div>
            <div>
              <h3 className="text-3xl font-semibold text-[#8B4513]">Primi Piatti</h3>
              <p className="text-lg text-gray-700">Tortellini in brodo - €12.00</p>
              <p className="text-lg text-gray-700">Tagliatelle al ragù - €10.00</p>
            </div>
            <div>
              <h3 className="text-3xl font-semibold text-[#8B4513]">Secondi Piatti</h3>
              <p className="text-lg text-gray-700">Cotoletta alla bolognese - €14.00</p>
              <p className="text-lg text-gray-700">Grigliata mista - €16.00</p>
            </div>
            <div>
              <h3 className="text-3xl font-semibold text-[#8B4513]">Dolci</h3>
              <p className="text-lg text-gray-700">Tiramisù della casa - €6.00</p>
              <p className="text-lg text-gray-700">Zuppa inglese - €5.50</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-green-900 text-white py-6 text-center mt-auto">
        <p className="text-lg">© 2025 L'Insolito Bar - Tutti i diritti riservati</p>
      </footer>
    </div>
  );
}
