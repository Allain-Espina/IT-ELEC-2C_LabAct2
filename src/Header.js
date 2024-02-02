import "./App.css";

import { SiGoogledocs } from "react-icons/si";
import { IoMenuSharp } from "react-icons/io5";
import { TfiSearch } from "react-icons/tfi";
import { IoApps } from "react-icons/io5";

function Header() {
  return (
    <div className="header">
      <div className="headerLogo">
        <div className="header2">
          <div>
            <IoMenuSharp size={25} color="#5e646e" />
          </div>
          <div>
            <SiGoogledocs size={37} color="#4484f4" />
          </div>
        </div>
        <div className="headerText">
          <div class="logoText" style={{ color: "#5e646e", fontSize: 22 }}>
            Docs
          </div>
        </div>
      </div>

      <div className="headerSearch">
        <div className="search2">
          <div>
            <TfiSearch size={20} color="#5e646e" />
          </div>
          <div>
            <input className="searchBox" type="text" value={"Search"} />
          </div>
        </div>
      </div>

      <div className="headerProfile">
        <div className="profileIcon">
          <IoApps size={20} color="#5e646e" />
        </div>
        <div className="profile2">
          <div>
            <img
              className="ustLogo"
              src="./images/ust_logo.png"
              alt="ust_logo"
              width={70}
              height={35}
            />
          </div>
          <div>
            <img
              className="pic"
              src="./images/profile_pic.jpg"
              alt="profile_pic"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
