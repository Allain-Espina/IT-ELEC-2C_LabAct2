import "./App.css";

function TemplateItems(props) {
  return (
    <div className="templateItems">
      <img className="img" src={props.tempObj.img} alt="" />
      <div>
        <span className="tempName">{props.tempObj.name}</span>
        <br />
        <span className="tempDesc">{props.tempObj.desc}</span>
      </div>
    </div>
  );
}

export default TemplateItems;
