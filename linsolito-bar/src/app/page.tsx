import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Barra di navigazione */}
      <header className="text-white w-full py-4" style={{ backgroundColor: 'rgb(4, 51, 22)' }}>
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">
            <Link href="/">L'Insolito Bar</Link>
          </h1>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <Link href="#home" className="hover:text-gray-300">Home</Link>
              </li>
              <li>
                <Link href="#chi-siamo" className="hover:text-gray-300">Chi Siamo</Link>
              </li>
              <li>
                <Link href="#menu" className="hover:text-gray-300">Menu</Link>
              </li>
              <li>
                <Link href="#contatti" className="hover:text-gray-300">Contatti</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Contenuto della pagina */}
      <main className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100">
        <h1 className="text-4xl font-bold text-gray-900" id="home">L'Insolito Bar</h1>
        <p className="text-lg text-gray-700 mt-4">Gnocco fritto e tigelle dal gusto autentico!</p>
      </main>

      {/* Sezione Chi Siamo */}
      <section id="chi-siamo" className="py-16 px-6 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800">Chi Siamo</h2>
          <p className="text-lg text-gray-600 mt-4">Siamo un ristorante che offre piatti tradizionali con un tocco moderno, in un'atmosfera familiare e accogliente.</p>
        </div>
      </section>

      {/* Sezione Menu */}
      <section id="menu" className="py-16 px-6 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800">Il Nostro Menu</h2>
          <p className="text-lg text-gray-600 mt-4">Scopri il nostro menu variegato con piatti gustosi e freschi.</p>
        </div>
      </section>

      {/* Sezione Contatti */}
      <section id="contatti" className="py-16 px-6 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800">Contattaci</h2>
          <p className="text-lg text-gray-600 mt-4">Siamo sempre disponibili per rispondere alle tue domande e prenotazioni. Contattaci via email o telefono.</p>
        </div>
      </section>
    </div>
  );
}
