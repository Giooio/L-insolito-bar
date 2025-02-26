import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gray-100">
      {/* Barra di navigazione */}
      <header className="text-white w-full py-4 shadow-lg bg-green-900">
        <div className="container mx-auto flex justify-between items-center px-6">
          <h1 className="text-3xl font-serif font-bold">
            <Link href="/">L'Insolito Bar</Link>
          </h1>
          <nav>
            <ul className="flex space-x-6 text-lg">
              <li><Link href="/" className="hover:text-gray-300">Home</Link></li>
              <li><Link href="/menu" className="hover:text-gray-300">Menu</Link></li>
              <li><Link href="/contatti" className="hover:text-gray-300">Contatti</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Chi Siamo */}
      <section id="chi-siamo" className="py-16 px-6 bg-white text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-gray-800">Chi Siamo</h2>
          <p className="text-lg text-gray-600 mt-4">Siamo un ristorante che offre piatti tradizionali con un tocco moderno, in un'atmosfera accogliente.</p>
          <Image src="/chi-siamo.jpg" alt="Il nostro locale" width={600} height={400} className="mt-6 rounded-lg shadow-lg mx-auto" />
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="py-16 px-6 bg-gray-100 text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-gray-800">Il Nostro Menu</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <Image src="/gnocco.jpg" alt="Gnocco fritto" width={300} height={200} className="rounded-lg" />
              <h3 className="text-xl font-bold mt-4">Gnocco Fritto</h3>
              <p className="text-gray-600">Croccante e leggero, perfetto con salumi e formaggi.</p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <Image src="/tigelle.jpg" alt="Tigelle" width={300} height={200} className="rounded-lg" />
              <h3 className="text-xl font-bold mt-4">Tigelle</h3>
              <p className="text-gray-600">Sfiziose e fragranti, accompagnate da deliziose salse.</p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <Image src="/vino.jpg" alt="Vino" width={300} height={200} className="rounded-lg" />
              <h3 className="text-xl font-bold mt-4">Vini Selezionati</h3>
              <p className="text-gray-600">Una selezione di vini perfetti per accompagnare i nostri piatti.</p>
            </div>
          </div>
          <p className="text-lg text-gray-600 mt-4">Scopri il nostro menu con piatti gustosi e freschi.
          <Link href="/menu" className="ml-2 text-green-900 hover:text-green-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
          </p>
        </div>
      </section>

      {/* Contatti */}
      <section id="contatti" className="py-16 px-6 bg-white text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-gray-800">Contattaci</h2>
          <p className="text-lg text-gray-600 mt-4">Per prenotazioni e informazioni, contattaci!</p>
          <div className="mt-6 text-lg">
            <p className="font-semibold text-gray-600">📍 Viale dell'Autodromo, 35, 41126 Modena MO</p>
            <p className="mt-2 text-gray-600">📞 059 332835</p>
            <p className="mt-2 text-gray-600">📧 info@insolitobar.it</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-900 text-white py-6 text-center mt-auto">
        <p className="text-lg">© 2025 L'Insolito Bar - Tutti i diritti riservati</p>
      </footer>
    </div>
  );
}
