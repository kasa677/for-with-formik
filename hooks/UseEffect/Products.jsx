import React, { useEffect, useState } from "react";

// https://fakestoreapi.com/products
function Products() {
  const [productsList, setProductList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log("Het");

    fetch(`https://fakestoreapi.com/products`)
      .then((resp) => resp.json())
      .then((data) => {
        setProductList(data);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="container">
      <h1>I am Product component</h1>
      <h3> {isLoading ? "Loading...." : "Success"}</h3>
      <div className="row">
        {productsList.map((item, index) => {
          const { id, price, title, image, description } = item;
          return (
            <div className="col-md-3">
              <div className="card">
                <img src={image} alt="" />
                <div className="card-body">
                  <h3>{title}</h3>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Products;
