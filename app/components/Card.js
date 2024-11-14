// app/components/Card.js
export default function Card({ imageSrc, title }) {
  return (
    <div className="min-w-[200px] p-4 bg-white rounded-lg shadow-md text-center">
      <img src={imageSrc} alt={title} className="w-full h-40 object-cover rounded-md" />
      <h2 className="mt-2 text-lg font-semibold text-black">{title}</h2>
    </div>
  );
}
