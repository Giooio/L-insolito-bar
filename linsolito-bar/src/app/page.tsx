import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gray-100">
      {/* Barra di navigazione */}
      <header className="text-white w-full py-4 shadow-lg fixed top-0 bg-green-900 z-50">
        <div className="container mx-auto flex justify-between items-center px-6">
          <h1 className="text-2xl font-bold">
            <Link href="/">L'Insolito Bar</Link>
          </h1>
          <nav>
            <ul className="flex space-x-6">
              <li><Link href="#home" className="hover:text-gray-300">Home</Link></li>
              <li><Link href="#chi-siamo" className="hover:text-gray-300">Chi Siamo</Link></li>
              <li><Link href="/menu" className="hover:text-gray-300">Menu</Link></li>
              <li><Link href="#contatti" className="hover:text-gray-300">Contatti</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center text-center text-white bg-black/50">
        <Image src="/hero.jpg" alt="Gnocco e Tigelle" layout="fill" objectFit="cover" className="absolute z-0" />
        <div className="relative z-10 p-6 bg-black/60 rounded-xl">
          <h1 className="text-5xl font-bold">L'Insolito Bar</h1>
          <p className="text-lg mt-4">Gnocco fritto e tigelle dal gusto autentico!</p>
          <Link href="#menu" className="mt-6 inline-block bg-yellow-500 text-black px-6 py-3 rounded-lg shadow-md hover:bg-yellow-600">Scopri il Menu</Link>
        </div>
      </section>

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
          <p className="text-lg text-gray-600 mt-4">Scopri il nostro menu con piatti gustosi e freschi.</p>
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
        </div>
      </section>

      {/* Contatti */}
      <section id="contatti" className="py-16 px-6 bg-white text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-gray-800">Contattaci</h2>
          <p className="text-lg text-gray-600 mt-4">Per prenotazioni e informazioni, contattaci!</p>
          <div className="mt-6 text-lg">
            <p className="font-semibold">📍 Indirizzo: Via Esempio, 123, Città</p>
            <p className="mt-2">📞 Telefono: 0123-456789</p>
            <p className="mt-2">📧 Email: info@insolitobar.it</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-900 text-white py-6 text-center mt-10">
        <p>© 2025 L'Insolito Bar - Tutti i diritti riservati</p>
      </footer>
    </div>
  );
}
