import React from "react";
import Products from "../../components/products/Products";
import { useFetch } from "../../hooks/useFetch";
import Banner from "../../components/banner/Banner";
import Loading from "../../components/loading/Loading";

const Home = () => {
  const { data, error, loading } = useFetch("/products", {
    limit: 20,
    skip: 5,
  });

  return (

    <div className="container" id="Home">
      {/* <Loading/> */}
      <Banner/>
      {error && <p>something went wrong :(</p>}
      {loading ? <Loading/> : <Products data={data} />}
    </div>
  );
};

export default Home;
