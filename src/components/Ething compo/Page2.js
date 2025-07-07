import React from "react";
import useStore from "../../VarStore";

export default function SecondPage() {
  let { qValue } = useStore();
  let { q2Value, setq2Value } = useStore();
  let { Title, setTitle } = useStore();
  let { Content, setContent } = useStore();
  let { Description, setDescription } = useStore();

  function CheckBox(id) {
    if (id === 1) setTitle(Title === 0 ? 1 : 0);
    else if (id === 2) setContent(Content === 0 ? 1 : 0);
    else setDescription(Description === 0 ? 1 : 0);
  }

  return (
    <div>
      {/* Step 3 */}
      <label htmlFor="-q">
        <div className="VerticalLabel">
          <span className="step-number">3.</span>
          <span className="MainLabel">
            Is there any keyword or phrase you <b>don’t want</b> to see in your search results?
          </span>
        </div>
        <div className="VerticalLabel">
          {q2Value === "" ? null : (
            <span>
              q={qValue}
              <b>{"-" + q2Value}</b>
            </span>
          )}
        </div>
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

      {/* Step 4 */}
      <div className="VerticalLabel">
        <div className="VerticalLabel">
          <span className="step-number">4.</span>
          <span className="MainLabel">
            Where do you want to find these searched keyword(s) or phrases in articles?
          </span>
        </div>
        <div className="VerticalLabel">
          <i>By default: All fields are searched.</i>
        </div>
        <div className="VerticalLabel">
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
      </div>
      <div style={{marginTop: "0.5em"}}>
        <input
          type="checkbox"
          checked={Title === 1}
          onChange={() => CheckBox(1)}
          id="cb-title"
        />
        <span onClick={() => CheckBox(1)} style={{ cursor: "pointer", marginRight: "1em" }}>
          {" "}title
        </span>
        <br />
        <input
          type="checkbox"
          checked={Content === 1}
          onChange={() => CheckBox(2)}
          id="cb-content"
        />
        <span onClick={() => CheckBox(2)} style={{ cursor: "pointer", marginRight: "1em" }}>
          {" "}content
        </span>
        <br />
        <input
          type="checkbox"
          checked={Description === 1}
          onChange={() => CheckBox(3)}
          id="cb-description"
        />
        <span onClick={() => CheckBox(3)} style={{ cursor: "pointer" }}>
          {" "}description
        </span>
      </div>
    </div>
  );
}
