
// pages/index.js
import Navbar from './components/Navbar';
import Card from './components/Card';

export default function Home() {
  const locations = [
    { title: "Monumen Mandala", imageSrc: "/images/monumen_mandala.jpg" },
    { title: "Benteng Rotterdam", imageSrc: "/images/benteng_fort_rotterdam.jpg" },
    { title: "Benteng Somba Opu", imageSrc: "/images/benteng_sumbaopu.jpg" },
    { title: "Pantai Tanjung Bunga", imageSrc: "/images/tanjung_bunga.jpg" },
    { title: "Pantai Losari", imageSrc: "/images/pantai_losari.png" },
    { title: "Pantai Indah Bosowa", imageSrc: "/images/pantai_bosowa.jpg" },
  ];

  // Membagi lokasi menjadi dua kelompok
  const firstRow = locations.slice(0, Math.ceil(locations.length / 2));
  const secondRow = locations.slice(Math.ceil(locations.length / 2));

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      {/* Header dengan teks */}
      <div className="relative w-full h-64 overflow-hidden">
        <img
          src="/images/pantai_losari.png"
          alt="Header Makassar"
          className="w-full h-full object-cover"
        />
        <h2 className="absolute bottom-4 left-4 text-white text-3xl font-bold">
          Kota Makassar
        </h2>
      </div>

      <div className="p-4">
        <p className="text-black text-justify mb-4">
          Kota Makassar, ibu kota Sulawesi Selatan, adalah pusat ekonomi dan kebudayaan yang kaya akan sejarah dan tradisi. Dengan pelabuhan yang sibuk serta keberagaman kuliner khas seperti Coto Makassar dan Pisang Ijo, Kota ini menjadi tujuan populer di Indonesia Timur. Dikelilingi oleh keindahan alam seperti Pantai Losari dan pulau Samalona, Makassar menawarkan pengalaman wisata yang memadukan modernitas dan budaya lokal.
        </p>

        <hr className="my-6 border-black border-1" />
        
        {/* Baris pertama foto */}
        <div className="flex overflow-x-scroll space-x-4 pb-4 border-b border-gray-300">
          {firstRow.map((location, index) => (
            <Card key={index} imageSrc={location.imageSrc} title={location.title} />
          ))}
        </div>

        {/* Garis pembatas di antara dua tingkat */}
        <hr className="my-6 border-black border-1" />

        {/* Baris kedua foto */}
        <div className="flex overflow-x-scroll space-x-4 pb-4 border-b border-gray-300">
          {secondRow.map((location, index) => (
            <Card key={index} imageSrc={location.imageSrc} title={location.title} />
          ))}
        </div>
      </div>
    </div>
  );
}
