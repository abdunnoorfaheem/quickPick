import React from 'react';
import Container from '../Container';
import Image from '../Image';
import Logo from "/src/assets/logo.png";
import { Link } from 'react-router-dom';
import { FiShoppingCart } from "react-icons/fi";

const Header = () => {
  return (
    <>
      <div className="py-[30px]">
        <Container>
            <div className="flex items-center justify-between">
                <div className="">
                    <Link to={"/"}><Image imgSrc={Logo} className={"w-[70px]"}/></Link>
                </div>
                <div className="">
                    <ul className='flex gap-x-8 text-xl font-medium '>
                        <li><Link to={"/"}>Home</Link></li>
                        <li><Link to={"/about"}>About</Link></li>
                        <li><Link to={"/service"}>Service</Link></li>
                        <li><Link to={"/pages"}>Pages</Link></li>
                    </ul>
                        
                </div>
                <div className="text-[30px]">
                  <FiShoppingCart/>
                </div>
            </div>
        </Container>
      </div>
    </>
  )
}

export default Header
