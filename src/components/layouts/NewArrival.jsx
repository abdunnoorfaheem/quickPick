import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import Product from "../Product";
import Container from "../Container";

const NewArrival = () => {
  let [allData, setAllData] = useState([]);

  useEffect(() => {
    async function viewData() {
      let data = await axios.get("https://dummyjson.com/products");

      setAllData(data.data.products);
    }
    viewData();
  }, []);

  return (
    <>
      <div className="py-[50px]">
        <Container>
          <div className="flex flex-wrap gap-x-3 ">
            {allData.map((item) => (
            <div className="w-[32%]">
              <Product
                productImg={item.thumbnail}
                productTitle={item.title}
                productPrice={item.price}
              />
            </div>
          ))}
          </div>
        </Container>
      </div>
    </>
  );
};

export default NewArrival;
