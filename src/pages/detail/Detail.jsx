import React, { useLayoutEffect } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { FaStar } from "react-icons/fa";
import Loading from "../../components/loading/Loading";

const DetailProduct = () => {
  const { id } = useParams();
  const { data, error, loading } = useFetch(`https://dummyjson.com/products/${id}`);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (error) {
    return <p>Something went wrong :(</p>;
  }

  return loading ? (
    <Loading/>
  ) : (
    <div className="container">
      <h2 className="text-[25px] font-[700] text-[#1f2026] font-mono">{data?.title}</h2>
      <p className="flex items-center"><FaStar className="text-[#ffcc02]"/><FaStar className="text-[#ffcc02]"/><FaStar className="text-[#ffcc02]"/><FaStar className="text-[#ffcc02]"/><FaStar className="text-[#ffcc02]"/>{data.rating}({data.discountPercentage})</p>
      <div className="flex items-center justify-around">
        <div className="flex items-center">
          <div className="flex flex-col items-baseline gap-[10px]">
            {data?.images?.map((img, i) => (
              <img key={i} src={img} width={100} alt={`${data?.title}-${i}`} />
            ))}
          </div>
          <img className="w-[400px]" src={data?.images?.[0]}/>
        </div>
        <div className="w-[350px]">
          <b className="text-[70px] font-[100]">{data?.category}</b>
          <p>{data?.description}</p>
          <strong>{data?.price} USD</strong>
        </div>
      </div>
    </div>
  );
};

export default DetailProduct;
