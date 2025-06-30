import React from "react";
import useStore from "../../VarStore";
import { useEffect } from "react";

export default function SecondPage() {
  let { qValue } = useStore();
  let { q2Value, setq2Value } = useStore();
  let { Title, setTitle } = useStore();
  let { Content, setContent } = useStore();
  let { Description, setDescription } = useStore();

  function CheckBox(id) {
    if (id === 1) {
      if (Title === 0) setTitle(1);
      else setTitle(0);
    } else if (id === 2) {
      if (Content === 0) setContent(1);
      else setContent(0);
    } else {
      if (Description === 0) setDescription(1);
      else setDescription(0);
    }
  }

  return (
    <div>
      <label htmlFor="-q" className="VerticalLabel">
        Is there any keyword or phrase related to which you don't want to see
        articles in your search?:
        <br />
          {q2Value === "" ? null : <span>q={qValue}<b>{"-" + q2Value}</b></span>}
      </label>
      <input
        id="-q"
        className="Input"
        value={q2Value}
        onChange={(e) => setq2Value(e.target.value)}
        placeholder="Enter keyword or phrase"
        type="text"
      />
      <br />
      <br />
      <div className="VerticalLabel">
        Where you want to find these searched keyword(s) or phrases in articles?:
        <br />
        <i>byDefault: All fields are searched.</i>
        <br />
        {Title === 1 || Content === 1 || Description === 1 ? (
          <b>
            <span> &searchIn=</span>
            {Title === 1 ? (
              <span>
                title
                {Content === 1 ? <span>,content</span> : null}
                {Description === 1 ? <span>,description</span> : null}
              </span>
            ) : Content === 1 ? (
              <span>
                content
                {Description === 1 ? <span>,description</span> : null}
              </span>
            ) : Description === 1 ? (
              <span>description</span>
            ) : null}
          </b>
        ) : null}
      </div>
      <input
        type="checkbox"
        defaultChecked="false"
        checked={Title === 1 ? true : false}
        onClick={() => CheckBox(1)}
      />
      <span onClick={() => CheckBox(1)} style={{ cursor: "pointer" }}>
        {" "}
        title
      </span>
      <br />
      <input
        type="checkbox"
        defaultChecked="false"
        checked={Content === 1 ? true : false}
        onClick={() => CheckBox(2)}
      />
      <span onClick={() => CheckBox(2)} style={{ cursor: "pointer" }}>
        {" "}
        content
      </span>
      <br />
      <input
        type="checkbox"
        defaultChecked="false"
        checked={Description === 1 ? true : false}
        onClick={() => CheckBox(3)}
      />
      <span onClick={() => CheckBox(3)} style={{ cursor: "pointer" }}>
        {" "}
        description
      </span>
    </div>
  );
}
