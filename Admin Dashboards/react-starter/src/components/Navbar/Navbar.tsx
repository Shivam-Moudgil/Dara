import React, { useEffect, useRef, useState } from 'react'
import "./navbar.scss"

import {AiOutlineSearch,AiOutlineFieldTime,AiOutlineSetting} from "react-icons/ai"
import {MdOutlineZoomOutMap} from "react-icons/md"
import {IoNotifications} from "react-icons/io5"
export const Navbar = () => {
  const [isSearchVisible, setSearchVisible] = useState(false);
  const searchRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
    
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setSearchVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="navbar">
<div className="logo">
  <img src="https://marketplace.canva.com/EAFasgWgUyE/6/0/800w/canva-neon-blue-and-black-gamer-badge-logo-fTnvEGTII2s.jpg" alt="logo" />
</div>
<div className="icons">
  {isSearchVisible ? <div ref={searchRef} className="search-box">
  <AiOutlineSearch />
            <input type="text" placeholder="Search..." />
          </div> :
<AiOutlineSearch className="react-icons" onClick={()=>setSearchVisible(!isSearchVisible)}/>}
<AiOutlineFieldTime className="react-icons"/>
<MdOutlineZoomOutMap className="react-icons"/>

<div className="notification">
  <IoNotifications/>
  <span>2</span>
</div>

<div className="profile_img">
  <img src="https://banner2.cleanpng.com/20180920/yko/kisspng-computer-icons-portable-network-graphics-avatar-ic-5ba3c66df14d32.3051789815374598219884.jpg" alt="avatar" />
  <p>Shivam</p>
</div>

<AiOutlineSetting/>

</div>
    </div>
  )
}
