import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { MdLanguage } from "react-icons/md";
import { IoIosApps } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { IoIosHeartEmpty } from "react-icons/io";
import { LuShoppingBag } from "react-icons/lu";
import logo from "./logo.png"
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <>
    <div className='bg-[#f0f2f5] py-[5px]'>
        <div className="container">
            <div className="flex items-center justify-between">
            <p className='flex items-center'>
                <CiLocationOn className='text-[20px]' />
                <select name="location" id="1">
                    <option value="toshkent">Toshkent</option>
                    <option value="samarqand">Samarqand</option>
                    <option value="buxoro">Buxoro</option>
                </select> topshiriq punklari
            </p>
            <div className="flex gap-[25px] items-center">
                <p className='text-[#8e4dff]'>Sotuvchi bo‘lish | Topshirish punktini ochish</p>
                <p>Savol-javob</p>
                <p>Buyurtmalarim</p>
                <b className='flex items-center font-[600] gap-[10px]'><MdLanguage className='text-[20px]'/> O'zbekcha</b>
            </div>
            </div>
            
        </div>
    </div>
    <div className="container">
        <div className="flex items-center justify-between py-[20px]">
            <Link to={"/"}><img className='w-[280px] h-[100%]' src={logo} alt="" /></Link>
            <button className='flex items-center gap-[10px] py-[10px] px-[20px] bg-[#e5e5ff] rounded-[5px] mx-[20px] text-[#8e4dff]'><IoIosApps className='text-[#8e4dff] text-[20px]'/> KATALOG</button>
            <div className="flex justify-between w-[400px] items-center border-1 rounded-[5px] border-[#d7d7d9]"><input type="text" className='py-[10px] w-[100%] pl-[20px]' placeholder='search'/><CiSearch className='text-[45px] bg-[#edeff2] w-[80px] p-[10px]'/></div>
            <div className="flex">
            <button className='flex py-[10px] gap-[15px] px-[20px] rounded-[5px] hover:bg-[#d7d7d9] items-center'><CiUser className='text-[20px]'/> Kirish</button>
            <button className='flex py-[10px] gap-[15px] px-[20px] rounded-[5px] hover:bg-[#d7d7d9] items-center'><IoIosHeartEmpty className='text-[20px]'/> Saralangan</button>
            <button className='flex py-[10px] gap-[15px] px-[20px] rounded-[5px] hover:bg-[#d7d7d9] items-center'><LuShoppingBag className='text-[20px]'/> Savat</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Header
