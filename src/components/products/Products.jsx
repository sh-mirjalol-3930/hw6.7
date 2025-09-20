import React from 'react'
import { useNavigate } from 'react-router-dom'
import { RiPriceTagFill } from "react-icons/ri";
import { FaStar } from "react-icons/fa";

const Products = ({ data }) => {
  const navigate = useNavigate()

  return (
    <div className="flex gap-[12px] mt-[50px] flex-wrap">
      {data?.products?.map((product) => (
        <div key={product.id} className="w-[240px] hover:shadow-[0_0_30px_#0003] rounded-[10px] p-[15px]">
          <img
            onClick={() => navigate(`/products/${product.id}`)}
            src={product.thumbnail} // asosiy rasm uchun
            alt={product.title}
          />
          <strong className='text-[#7f4dff] flex items-center gap-[10px]'>{product.price} <RiPriceTagFill /></strong>
          <p>{product.stock}</p>
          <h3>{product.title}</h3>
          <p className='flex items-center gap-[10px] text=[#8a8d97] font-[100] text-[12px]'><FaStar className='text-[#ffcc02]'/>{product.rating}({product.discountPercentage}sharhlar)</p>
          <button className='mt-[20px] bg-[#7000ff] text-[white] text-[center] w-[100%] py-[5px] rounded-[5px]'>savatga</button>
        </div>
      ))}
    </div>
  )
}

export default Products
