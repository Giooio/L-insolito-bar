import Image from "next/image";
import Link from "next/link";

export default function Contatti() {
  return (
    <div className="bg-gray-100 text-gray-900 flex flex-col min-h-screen">
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
              <li><Link href="/contatti" className="hover:text-gray-300">Contatti</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Sezione Contatti */}
      <main className="flex-1 py-16 px-6 text-center">
        <div className="container mx-auto">
          <h2 className="text-5xl font-serif font-bold text-[#5C3D2E] mb-8">Contattaci</h2>
          
          <div className="text-lg text-gray-700 mb-8">
            <p className="font-semibold text-[#8B4513]">📍 Indirizzo:</p>
            <p>Viale dell'Autodromo, 35, 41126 Modena MO</p>
            <p className="font-semibold text-[#8B4513] mt-4">📞 Telefono:</p>
            <p>059 332835</p>
            <p className="font-semibold text-[#8B4513] mt-4">📧 Email:</p>
            <p>info@insolitobar.it</p>
          </div>

          {/* Mappa di Google */}
          <div className="mt-8">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11750.452747077184!2d10.941568680341953!3d44.634812303181154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47fcfa77fe204f1b%3A0x99183b205d4fffa9!2sViale%20dell'Autodromo%2C%2035%2C%2041126%20Modena%20MO!5e0!3m2!1sit!2sit!4v1679843983741!5m2!1sit!2sit" 
              width="100%" 
              height="450" 
              style={{border: 0}} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Mappa L'Insolito Bar"
            ></iframe>
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
