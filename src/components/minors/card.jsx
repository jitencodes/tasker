import React from "react";

function createCard(content, deletenote) {
  if (content.note !== "NULL") {
    return (
      <Card
        del={deletenote}
        id={content.id} 
        key={content.id}
        title={content.title}
        content={content.note}
      />
    );
  }
}

function Card(props) {
  function copyToClipboard() {
    navigator.clipboard.writeText(props.content);
    window.alert("Your Note copied to clip board!")
  }
  function taskDelete() {
    props.del(props.id);
  }
  return (
    <div>
      <div className="col s12 m3">
        <div className={`card card-background white lighten`}
        style={{opacity:0.8}}>
          <div className="card-content black-text" style={{opacity:1}}>
            <span className="card-title">{props.title}</span>
            <p className="text-justify">{props.content}</p>
          </div>
          <div style={{display:"flex", justifyContent:"space-between", opacity:1}} className="card-action blue-text">
            <div
              style={{
                display: "flex",
                flexDirection: "row-reverse",
                marginRight: "5px",
              }}
              className="blue-text  "
            >
              <i
                onClick={taskDelete}
                className="small material-icons tooltipped"
                data-position="top"
                data-tooltip="Delete"
              >
                delete
              </i>
              <i
                style={{ marginRight: "10px", fontSize: "1.8em" }}
                className="small material-icons tooltipped"
                data-position="top"
                data-tooltip="Copy To Clipboard"
                onClick={copyToClipboard}
              >
                file_copy
              </i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default createCard;
