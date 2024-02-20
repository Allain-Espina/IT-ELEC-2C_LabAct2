import "./App.css";

import { tempData } from "./TempData";
import TemplateItems from "./TemplateItems";

import { RiExpandUpDownLine } from "react-icons/ri";
import { SlOptionsVertical } from "react-icons/sl";

function Templates() {
  let state = true;

  return (
    <div className={state ? "templates" : "templatesAlt"}>
      <div className="tempHeading">
        <div className="tempText">
          <div>Start a new document</div>
        </div>
        <div className="tempIcons">
          <div className="tempGallery">
            <div>Template gallery</div>
            <div>
              <RiExpandUpDownLine />
            </div>
          </div>
          <div className="tempOptions">
            <div>
              <SlOptionsVertical />
            </div>
          </div>
        </div>
      </div>

      <div className="tempArea">
        <div className="tempList">
          {tempData.map((temp) => (
            <TemplateItems tempObj={temp} key={temp.name} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Templates;
