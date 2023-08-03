import { Link } from 'react-router-dom';
import { AiOutlineHeart } from "react-icons/ai";
function Product_card({ data }) {
  function sliceString(str,n) {
    if (str.length > n) {
      return str.slice(0, n) + "...";
    }
    return str;
  }

  return (
    <>
      <div className="flex flex-col p-1 rounded-md font-sans cursor-pointer">
      <Link to={'/product/'+data.id}>
        <div className="relative flex justify-between align-middle bg-gray-200 rounded-md">
          <div className="absolute bg-white right-2 top-2 p-1 rounded-full">
            <AiOutlineHeart/>
          </div>
          <img
            src={data.image}
            alt="product-image"
            className="h-64 w-full transform-scale"
          />
        </div>
        </Link>
        <div className="flex mt-2 justify-between align-middle ">
          <p  className="font-sans text-sm font-bold">{sliceString(data.title,20)}</p>
          <p  className=" font-sans text-sm font-bold">{'$'+data.price}</p>
        </div>
        <div>
            <p className=" font-sans text-xs">
                {sliceString(data.category,25)}
            </p>
            <p  className=" font-sans text-xs">
                {sliceString(data.description,35)}
            </p>
            <button className="mt-2 rounded-full border px-2 py-1 font-medium font-sans text-9 border-black hover:bg-green-950 hover:text-white">Add to Cart</button>
        </div>
      </div>
    </>
  );
}

export default Product_card;
