import React from "react";
import useStore from "../../VarStore";

export default function FirstPage() {
  let { qValue, setqValue } = useStore();
  let { ApiKey, setApiKey } = useStore();

  return (
    <div>
      <label htmlFor="q" className="VerticalLabel">
        1. Enter keywords or phrases to search for in the article title or body: 
        <br />
        <i>(It's a must field, you can neither add further filters nor generate the link while leaving this field empty.)</i>
        <br />
        <b>q={qValue}</b>
      </label>

      <input
        id="q"
        className="Input"
        value={qValue}
        onChange={(e) => {
          let str = e.target.value;
          for(let i = 0; i < str.length; i++) {
            if(str[i] === " ") {
              let start = str.slice(0, i);
              let rem = str.slice(i+1, str.length);
              str = start + "%20" + rem;
            }
          }
          setqValue(str);
        }}
        placeholder="ex. bitcoin"
        type="text"
      />

      <br />
      <br />

      <label htmlFor="api" className="VerticalLabel">
        2. Enter your NewsAPI key <i>(Optional)</i> :
        <br />
        <b style={{wordBreak: 'break-all'}}>
          &apiKey=
        {
          ApiKey === ""? "REPLACE_WITH_YOUR_NEWS_API_KEY" : ApiKey
        }
        </b>
        <div>Don't have? - <a target="_blank" href="https://newsapi.org/register">Get one</a></div>
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
