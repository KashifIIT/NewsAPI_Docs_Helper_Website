import React, { useEffect } from "react";
import VarStore from "../../VarStore";

export default function QPage() {
  let { THQvalue, setTHQvalue } = VarStore();
  let { ApiKey, setApiKey } = VarStore();
  let { setCategory } = VarStore();

  useEffect(() => {
    setCategory("");
  }, []);

  return (
    <div>
      <div>
        <label className="VerticalLabel" htmlFor="THQvalue">
          <div className="VerticalLabel">
            <span className="step-number">1.</span>
            <span className="MainLabel">
              Enter the keywords or phrases that you want to see in the articles:
              <span style={{ color: 'red' }}>*</span>
            </span>
          </div>
          <div className="VerticalLabel">
            {THQvalue === "" ? null : (
              <span>
                <b>q={THQvalue}</b>
              </span>
            )}
          </div>
        </label>
        <input
          id="THQvalue"
          className="Input"
          placeholder="ex. trump, bitcoin, Apple, War, etc."
          value={THQvalue}
          onChange={(e) => {
            let str = e.target.value;
            for (let i = 0; i < str.length; i++) {
              if (str[i] === " ") {
                let start = str.slice(0, i);
                let rem = str.slice(i + 1, str.length);
                str = start + "%20" + rem;
              }
            }
            setTHQvalue(str);
          }}
          type="text"
        />
      </div>

      <br />

      <label htmlFor="api" className="VerticalLabel">
        <div className="VerticalLabel">
          <span className="step-number">2.</span>
          <span className="MainLabel">
            Enter your NewsAPI key <i>(Optional)</i>:
          </span>
        </div>
        <div className="VerticalLabel">
          <b style={{ wordBreak: 'break-all' }}>
            &apiKey={
              ApiKey === "" ? "REPLACE_WITH_YOUR_NEWS_API_KEY" : ApiKey
            }
          </b>
        </div>
        <div className="VerticalLabel">
          Don't have? - <a target="_blank" href="https://newsapi.org/register">Get one</a>
        </div>
      </label>

      <input
        id="api"
        type="text"
        className="Input"
        value={ApiKey}
        placeholder="Enter your API_KEY"
        onChange={(e) => setApiKey(e.target.value)}
      />
    </div>
  );
}
