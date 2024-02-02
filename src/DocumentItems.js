import "./App.css";

import { SiGoogledocs } from "react-icons/si";
import { FaUserGroup } from "react-icons/fa6";
import { SlOptionsVertical } from "react-icons/sl";

function DocumentItems(props) {
  return (
    <div className="documentItems">
      <img className="docImg" src={props.docObj.img} alt="" />
      <div className="docInfo">
        <span className="docName">{props.docObj.name}</span>
        <br />
        <div className="doc2">
          <div className="docDetails">
            <div>
              <SiGoogledocs size={13} color="#4484f4" />
            </div>
            <div>
              <FaUserGroup size={13} color="#6e767d" />
            </div>
            <span className="docMod">{props.docObj.mod}</span>
          </div>

          <div>
            <SlOptionsVertical size={13} color="#6e767d" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DocumentItems;
