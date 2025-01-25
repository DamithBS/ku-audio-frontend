import './productCart.css';

export default function ProductCart(props) {
  return (
    <div className="w-[250px] h-[250px] bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 transition-transform duration-300 hover:scale-105">
      <img className="w-full h-48 object-cover" src={props.photoUrl} alt={props.name} />
      <div className="p-5">
        <h1 className="text-2xl font-semibold text-gray-800">{props.name}</h1>
        <span className="block text-lg text-green-600 font-bold mt-2">
          ${props.price}
        </span>
        <p className="mt-3 text-gray-600">{props.disc}</p>
        <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-all">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
