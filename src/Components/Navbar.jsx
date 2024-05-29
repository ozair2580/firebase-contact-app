import { FiPlusCircle } from 'react-icons/fi';
import { IoSearch } from 'react-icons/io5';
import styled from 'styled-components'

const Navbar = ({sethide,hide,setsearch}) => {
    return (
        <NavbarContainer>
             <div className="Nav-Input">
       <IoSearch  className="search"/>
       <input type="text" placeholder="Search Contact" onChange={(e)=>setsearch(e.target.value)}/>
        </div>
       <FiPlusCircle className="plusbutton" onClick={()=>sethide(hide===false?true:false)}/>
        </NavbarContainer>
    );
};

export default Navbar;

const NavbarContainer=styled.nav`
display: flex;
gap:12px;
align-items: center;
width: 363px;
  height: 60px;

  .Nav-Input{
    width: 295px;
    height: 40px;
    position: relative;

    .search{
      position: absolute;
      width: 18px;
      height: 18px;
      margin: 10px 10px 12px 13px;
      color: white;
      background-color: transparent;
    }

    input{
      width: 100%;
      height: 100%;
      border: none;
      padding: 7px 10px ;
      padding-left: 44px;
      border: 1px solid white;
      color: white;
      border-radius: 10px;
      background-color: transparent;
    }
  }

  .plusbutton{
    width: 52px;
    height: 52px;
    /* background-color: white; */
    color: white;
    cursor: pointer;
    border-radius: 50%;
  }

`