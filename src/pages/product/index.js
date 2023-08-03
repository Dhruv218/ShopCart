import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../../components/header";
import { BsTruck } from "react-icons/bs";
import { PiShirtFoldedThin } from "react-icons/pi";

function Product_page() {
  let { id } = useParams();
  const [data, setData] = useState([]);
  const [quntity, setquantity] = useState(1);
  const [link, setlink] = useState("https://fakestoreapi.com/products/");
  const [searchitem, setSearchitem] = useState("");
  const [searchData, setsearchData] = useState(null);

  function handlesearch() {
    setSearchitem(
      data.filter((item) => {
        return Object.values(item.title)
          .join("")
          .toLowerCase()
          .includes(searchData.toLowerCase());
      })
    );
  }

  useEffect(() => {
    handlesearch();
  }, [searchData]);

  const handlesearchData = (data) => {
    setsearchData(data);
  };
  useEffect(() => {
    FetchData();
  }, []);
  const FetchData = () => {
    fetch(link + id)
      .then((res) => res.json())
      .then((result) => {
        setData(result);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Header onDataUpdate={handlesearchData} />
      <div className="flex justify-start mt-8 w-11/12 mx-auto gap-16">
        <div className="w-5/12 flex flex-col gap-4">
          <div className="relative flex justify-between align-middle bg-gray-200 rounded-md">
            <img
              src={data.image}
              alt="product-image"
              className="h-108 w-full transform-scale"
            />
          </div>
          <div className=" flex gap-4 justify-center items-center">
            <div className="relative flex justify-between align-middle bg-gray-200 rounded-md">
              <img
                src={data.image}
                alt="product-image"
                className="w-36 h-28 transform-scale"
              />
            </div>
            <div className="relative flex justify-between align-middle bg-gray-200 rounded-md">
              <img
                src={data.image}
                alt="product-image"
                className="w-36 h-28 transform-scale"
              />
            </div>
            <div className="relative flex justify-between align-middle bg-gray-200 rounded-md">
              <img
                src={data.image}
                alt="product-image"
                className="w-36 h-28 transform-scale"
              />
            </div>
            <div className="relative flex justify-between align-middle bg-gray-200 rounded-md">
              <img
                src={data.image}
                alt="product-image"
                className="w-36 h-28 transform-scale"
              />
            </div>
          </div>
        </div>
        <div className="w-4/12 flex flex-col items-start justify-start">
          <div className=" flex flex-col gap-4 ">
            <p className="font-bold text-4xl">{data.title}</p>
            <p className="font-bold text-xs  text-gray-600">
              {data.description}
            </p>
          </div>
          <br></br>
          <hr className="line mb-6"></hr>
          <div>
            <p className="font-bold text-2xl">
              {"$" + data.price} or {(data.price / 6).toFixed(2)}/month
            </p>
            <p className="font-bold text-xs  text-gray-600 mt-2">
              Suggested payments with 6 months special financing
            </p>
          </div>
          <br></br>
          <hr className="line mb-6"></hr>
          <div className="flex gap-8 text-center">
            <div className="number-input rounded-full bg-gray-200">
              <button
                onClick={() => {
                  if (quntity > 0) {
                    setquantity(quntity - 1);
                  }
                }}
              ></button>
              <input
                className="bg-gray-200 quantity"
                min="0"
                name="quantity"
                defaultValue="1"
                type="number"
                value={quntity}
              />
              <button
                onClick={() => {
                  if (quntity < 12) {
                    setquantity(quntity + 1);
                  }
                }}
                className="plus"
              ></button>
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-bold text-gray-600 text-xs">
                Only <span className="12 Items text-orange-400">12 Items</span>{" "}
                Left!
              </p>
              <p className="font-bold text-xs  text-gray-600">Don't miss it</p>
            </div>
          </div>
          <br></br>
          <div className="flex gap-4">
            <button className="rounded-full px-14 text-sm py-2 font-sans font-medium bg-green-950 text-white">
              Buy Now
            </button>
            <button className="rounded-full px-14 text-sm py-2 font-sans font-medium border-2 border-green-950 text-green-950">
              Add to Cart
            </button>
          </div>
          <br></br>
          <div className="flex flex-col text-center text-xs font-bold ">
            <div className=" flex flex-col text-center border p-4">
              <div className="flex item-center">
                <BsTruck />
                <p className="ms-2"> Free Delivery</p>
              </div>
              <p className="ms-5 mt-1 text-gray-600 underline underline-offset-4">
                Enter your Postal code for Delivery Availability
              </p>
            </div>
            <div className=" flex flex-col text-center border p-4">
              <div className="flex items-center">
                <PiShirtFoldedThin />
                <p className="ms-2">Return Delivery</p>
              </div>
              <p className="ms-5 mt-1 text-gray-600 text-start">
                Free 30days Delivery Returns.{" "}
                <span className="underline underline-offset-4">Details</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product_page;
