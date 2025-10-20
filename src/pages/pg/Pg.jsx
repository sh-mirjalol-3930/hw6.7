import React from 'react'
import Products from '../../components/products/Products'
import Loading from '../../components/loading/Loading'
import { useFetch } from '../../hooks/useFetch';

const Pg = () => {
  const [currentLimit, setCurrentLimit] = React.useState(6);
  const { data, error, loading } = useFetch("/products", {
    limit: currentLimit,
    skip: 5,
  });

  return (
    <div>
      <div className="container">
        <div className="flex items-start py-[20px]">
          <div className="flex w-[30%] gap-[5px] flex-col items-start">
            <h3 className='py-[10px] text-[20px]'>Turkumlar</h3>
            <b className='font-[400]'>◁ barcha turkumlar</b>
            <p className='py-[5px] hover:bg-gray-300 px-[10px] rounded-[5px] ml-[20px]'>Elektronika</p>
            <p className='py-[5px] hover:bg-gray-300 px-[10px] rounded-[5px] ml-[20px]'>Elektronikalar uchun aksessuarlar</p>
            <p className='py-[5px] hover:bg-gray-300 px-[10px] rounded-[5px] ml-[20px]'>Kvadrokopterlar va aksessuarlar</p>
            <p className='py-[5px] hover:bg-gray-300 px-[10px] rounded-[5px] ml-[20px]'>Kompyuter texnikasi</p>
            <p className='py-[5px] hover:bg-gray-300 px-[10px] rounded-[5px] ml-[20px]'>Navigatorlar</p>
            <p className='py-[5px] hover:bg-gray-300 px-[10px] rounded-[5px] ml-[20px]'>Quloqchinlar va audio texnikalar</p>
            <p className='py-[5px] hover:bg-gray-300 px-[10px] rounded-[5px] ml-[20px]'>Noutbuklar, planshetlar va elektron kitoblar</p>
            <p className='py-[5px] hover:bg-gray-300 px-[10px] rounded-[5px] ml-[20px]'>Optik anjomlar</p>
            <p className='py-[5px] hover:bg-gray-300 px-[10px] rounded-[5px] ml-[20px]'>Ofis texnikasi</p>
            <p className='py-[5px] hover:bg-gray-300 px-[10px] rounded-[5px] ml-[20px]'>Smartfonlar va telefonlar</p>
            <p className='py-[5px] hover:bg-gray-300 px-[10px] rounded-[5px] ml-[20px]'>Televizorlar va videotexnikalar</p>
            <p className='py-[5px] hover:bg-gray-300 px-[10px] rounded-[5px] ml-[20px]'>Geymerlar uchun mahsulotlar</p>
            <p className='py-[5px] hover:bg-gray-300 px-[10px] rounded-[5px] ml-[20px]'>Aqlli soatlar va fitnes bilaguzuklar</p>
            <p className='py-[5px] hover:bg-gray-300 px-[10px] rounded-[5px] ml-[20px]'>Aqlli uy va xavfsizlik</p>
            <p className='py-[5px] hover:bg-gray-300 px-[10px] rounded-[5px] ml-[20px]'>Foto va video texnika</p>
            <p className='py-[5px] hover:bg-gray-300 px-[10px] rounded-[5px] ml-[20px]'>Soatlar va elektron budilniklar</p>
          </div>
          <div className="w-[70%]">
            {error && <p>something went wrong :(</p>}
            {loading ? <Loading/> : <Products data={data} />}
            <button className='px-[10px] w-[100%] py-[10px] font-[600] rounded-[10px] hover:shadow-[0_0_15px_#0003] bg-gray-100 my-[10px] text-[17px]' onClick={() => setCurrentLimit((prev) => prev + 3)}>Yana ko'rsatish</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pg
