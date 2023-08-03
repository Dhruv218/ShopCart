import { CgProfile } from "react-icons/cg";
import { BsTelephonePlus, BsCart3 } from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import logo from "../image/logo.jpg";
import { useEffect, useState } from "react";

function Header({ onDataUpdate }) {
  const [data, setData] = useState([]);
  const [link, setlink] = useState("https://fakestoreapi.com/products");
  const [search, setSearch] = useState("");
  useEffect(() => {
    FetchData();
  }, []);
  const FetchData = () => {
    fetch(link)
      .then((res) => res.json())
      .then((result) => {
        setData(result);
      })
      .catch((err) => console.log(err));
  };

  function setSea(e) {
    setSearch(e);
  }

  const sendDataToParent = () => {
    onDataUpdate(search);
  };
  useEffect(() => {}, [search]);

  useEffect(() => {
    sendDataToParent();
  }, [search]);
  return (
    <>
      <div className="text-white bg-green-950 flex justify-center">
        <div className="flex justify-between items-center w-11/12">
          <div className="flex text-xs items-center">
            <BsTelephonePlus />
            <p className="ms-2">5482648232</p>
          </div>
          <div className="flex text-xs">
            <p>Get 10% Off On Selected Products</p>
            <p className="mx-2"> || </p>
            <p>Shop Now</p>
          </div>
          <div className="flex text-xs items-center">
            <p>Eng </p>
            <MdKeyboardArrowDown />
            <p className="ms-2">Location</p>
            <MdKeyboardArrowDown />
          </div>
        </div>
      </div>
      <div className="flex text-gray-800 justify-around items-center my-2">
        <div className="flex text-1xl font-sans font-bold items-center">
          <img src={logo} className="h-8" />
          <p className="ms-2">ShopCart</p>
        </div>
        <div className="flex text-xs font-sans font-bold items-center">
          <p>Catogories</p>
          <MdKeyboardArrowDown style={{ fontSize: "1rem" }} />
        </div>
        <div className="flex text-xs font-sans font-bold items-center">
          <p>Deals</p>
        </div>
        <div className="flex text-xs font-sans font-bold items-center">
          <p>What's New</p>
        </div>
        <div className="flex text-xs font-sans font-bold items-center">
          <p>Delivery</p>
        </div>
        <div className="relative flex text-xs font-sans items-center">
          <input
            className="bg-gray-100 text-gray-800 px-2 py-1 w-52 text-xs border-none rounded-full"
            type="text"
            onChange={(e) => {
              setSea(e.target.value);
            }}
            placeholder="search products"
          />
          <div className="absolute right-2 top-1">
            <AiOutlineSearch style={{ fontSize: "1rem" }} />
          </div>
        </div>
        <div className="flex text-xs font-sans font-bold items-center">
          <CgProfile style={{ fontSize: "1rem" }} />
          <p className="ms-2">Accounts</p>
        </div>
        <div className="flex text-xs font-sans font-bold items-center">
          <BsCart3 style={{ fontSize: "1rem" }} />
          <p className="ms-2">Cart</p>
        </div>
      </div>
    </>
  );
}

export default Header;
