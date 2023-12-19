'use client'
import React from "react";
import {  Navbar,   NavbarBrand,   NavbarContent,   NavbarItem,   NavbarMenuToggle,  NavbarMenu,  NavbarMenuItem} from "@nextui-org/react";
import Link from "next/link";
import { Button } from "@nextui-org/react";
function Navbr() {

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    {
      name : "About",
      src : './about',
    },
    {
      name : "Projects",
      src : './projects',
    },
    {
      name : "Blog",
      src : './blog',
    },
    {
      name : "Contact",
      src : './contact',
    },
  ];

  return (
    <Navbar
    isBordered
    isMenuOpen={isMenuOpen}
    onMenuOpenChange={setIsMenuOpen}
    className="h-[84px] bg-slate-500 flex" 
  >
    <NavbarContent className="sm:hidden" justify="start">
    <NavbarBrand>
        {/* <AcmeLogo /> */}
        <p className="font-bold text-inherit">ACME</p>
      </NavbarBrand>
      
    </NavbarContent>

    <NavbarContent className="sm:hidden pr-3" justify="end">
      <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
    </NavbarContent>

    {/* open  */}
    <NavbarContent className="bg-red-200 w-full hidden sm:flex gap-[8px] flex-col text-left items-start justify-center text-[16px]" style={{fontFamily : 'Apercu, sans-serif' }}>
      
      <NavbarItem>
        <Link color="foreground" href="/about">
          About
        </Link>
      </NavbarItem>
      <NavbarItem isActive>
        <Link href="/projects" aria-current="page">
          Projects
        </Link>
      </NavbarItem>
      
    </NavbarContent>

    <NavbarContent className="hidden sm:flex gap-4 " justify="center">
      <NavbarBrand>
        {/* <AcmeLogo /> */}
        <Link href='/'>Lotus</Link>
        {/* <p className="font-bold text-inherit">ACME</p> */}
      </NavbarBrand>
    </NavbarContent>

    <NavbarContent className="hidden sm:flex gap-[8px] flex-col text-right items-end justify-center" style={{fontFamily : 'Apercu, sans-serif' }}>
      
      <NavbarItem>
        <Link color="foreground" href="/blog">
          Blog
        </Link>
      </NavbarItem>
      <NavbarItem>
        <Link color="foreground" href="/contact">
          Contact
        </Link>
      </NavbarItem>
    </NavbarContent>

    {/* <div className="hidden sm:flex gap-[8px] flex-col text-right items-end justify-center" style={{fontFamily : 'Apercu, sans-serif'}}>
      <Link href='./blog'>
        blog
      </Link>
      <Link href='./blog'>
        blog
      </Link>

    </div> */}

    {/* <NavbarContent justify="end">
      <NavbarItem className="hidden lg:flex">
        <Link href="#">Login</Link>
      </NavbarItem>
      <NavbarItem>
        <Button as={Link} color="warning" href="#" variant="flat">
          Sign Up
        </Button>
      </NavbarItem>
    </NavbarContent> */}


    <NavbarMenu className="mt-[12px] text-right pr-[20px]"  style={{fontFamily : 'Apercu, sans-serif'}}>
      {menuItems.map((item, index) => (
        <NavbarMenuItem key={`${item}-${index}`}>
          <Link
            className="w-full"
            color='foreground'
            href={item.src}
            // size="lg"
          >
            {item.name}
          </Link>
        </NavbarMenuItem>
      ))}
    </NavbarMenu>
  </Navbar>
  )
}

export default Navbr