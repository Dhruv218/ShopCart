import { useEffect, useState } from "react";
import Product_card from "../../components/product-card";
import Header from "../../components/header";
import women_w_h from "./w-f-h.jpg";
import { Link } from "react-router-dom";
function Homepage() {
  const [data, setData] = useState([]);
  const [link, setlink] = useState("https://fakestoreapi.com/products");
  const [searchitem, setSearchitem] = useState("");
  const [searchData, setsearchData] = useState(null);

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
  return (
    <>
      <Header onDataUpdate={handlesearchData} />
      <div className="flex justify-center mt-4">
        <div className="bg-orange-200 flex justify-between w-10/12 rounded-lg">
          <div className="flex flex-col justify-center w-10/12 px-16">
            <p className="text-green-950 font-sans text-4xl w-7/12 font-bold">
              Grab Upto 50% Off On Selected Headphone
            </p>
            <button className="self-start mt-4 bg-green-950 text-white rounded-full px-4 py-2 text-9">
              Buy Now
            </button>
          </div>
          <img src={women_w_h} className="blend-mode h-44 mx-20" />
        </div>
      </div>
      <div className="flex flex-col custom-css">
        <div>
          <p className="font-bold font-sans text-base self-start my-8 pl-4">
            Headphones For You
          </p>
        </div>
        <div className="flex flex-wrap">
          {searchitem == "" || searchitem === undefined
            ? data.map((item) => {
                return (
                  <div className="h-96 gap-1 w-64 pb-2" key={item.id}>
                    <Product_card data={item} />
                  </div>
                );
              })
            : searchitem.map((item) => {
                return (
                  <div className="h-96 gap-1 w-64 pb-2">
                    <Product_card data={item} />
                  </div>
                );
              })}
        </div>
      </div>
    </>
  );
}

export default Homepage;
