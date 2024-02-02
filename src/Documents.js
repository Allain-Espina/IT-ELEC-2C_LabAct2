import "./App.css";

import { docData } from "./DocData";
import DocumentItems from "./DocumentItems";

import { RxTriangleDown } from "react-icons/rx";
import { MdOutlineViewList } from "react-icons/md";
import { MdOutlineSortByAlpha } from "react-icons/md";
import { MdOutlineFolderOpen } from "react-icons/md";

function Documents() {
  return (
    <div className="documents">
      <div className="docuHeader">
        <div className="docuHeading">
          <div>
            <span>Recent documents</span>
          </div>
        </div>

        <div className="docuFilter">
          <div>
            <span>Owned by anyone</span>
          </div>
          <div>
            <RxTriangleDown size={20} color="#6e767d" />
          </div>
        </div>

        <div className="docuIcons">
          <div>
            <MdOutlineViewList size={25} color="#6e767d" />
          </div>
          <div>
            <MdOutlineSortByAlpha size={25} color="#6e767d" />
          </div>
          <div>
            <MdOutlineFolderOpen size={25} color="#6e767d" />
          </div>
        </div>
      </div>

      <div className="docuArea">
        <div className="docuList">
          {docData.map((doc) => (
            <DocumentItems docObj={doc} key={doc.name} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Documents;
