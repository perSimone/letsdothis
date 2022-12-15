import React from "react";
// import { navLinks } from "../../src/data";
import Navbar from '../components/Navbar';
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header>
        <Link href={"/"}>
          <Image 
            alt="SP Logo"
            className="logo" 
            src="/logo.svg" 
            width={172} 
            height={60} 
          />
        </Link>
      <nav>
        <Navbar/>
      </nav>
    </header>
  );
}

export default Header