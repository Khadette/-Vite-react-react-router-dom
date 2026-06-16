// Parent passes props like HTML attributes:

 
// Child receives them as an object:
export function Card({ title, description, image, link }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
        <a href={link} className="text-blue-600 hover:underline mt-4 inline-block">
          Learn more →
        </a>
      </div>
    </div>
  );
}