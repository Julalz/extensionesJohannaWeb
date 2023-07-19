import MenuBurguer from "../MenuBurguer/MenuBurguer";

import "./header.css";

function Header() {
  return (
    <div className="header-container">
      <img
        className="logo-img"
        src="../../../../public/images/logo-extensiones.png"
        alt="extensiones Johanna Studio"
      ></img>
      <div>
        <MenuBurguer />
      </div>
    </div>
  );
}
export default Header;
