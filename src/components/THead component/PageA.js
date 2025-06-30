import React, { useEffect } from "react";
import { useState } from "react";
import VarStore from "../../VarStore";

export default function PageA() {

  let [SelectTag, setSelectTag] = useState(0)
  let [StyleOfOptionDiv, setStyleOfOptionDiv] = useState({display: 'none'})
  let [SelectArrow, setSelectArrow] = useState({})
  let CategoryArray = [
    "business", "entertainment", "general", "health", "science", "sports", "technology"
  ]
  let {Category, setCategory} = VarStore();
  let { ApiKey, setApiKey } = VarStore();
  let {setTHQvalue} = VarStore();

  useEffect(() => {
    setTHQvalue("");
  }, [])

  return (
    <div>
    <div>
      <div className="VerticalLabel">
        1. Choose category from which you want news articles: 
        <br />
        {Category === ""? null : <b>category={Category}</b>}
      </div>
      <div style={{position: 'relative'}}>
      <div 
      className="SelectDiv"
      onClick={() => {
            if (SelectTag === 1) {
              setSelectTag(0); 
              setStyleOfOptionDiv({ display: "none", height: '200px', overflowY: 'auto' });
              setSelectArrow({ transform: "rotate(0deg)" });
            } else {
              setSelectTag(1);
              setStyleOfOptionDiv({ display: "block" , height: '200px', overflowY: 'auto'});
              setSelectArrow({ transform: "rotate(90deg)" });
            }
          }}
      >
        Choose category
        <span className="SelectArrow" style={SelectArrow}>
            {"\u276F"} 
        </span>
      </div>
      <div className="OptionDiv" style={StyleOfOptionDiv}>
        <div className="Options" onClick={() => setCategory("")}>
          <div className="center">Clear</div>
        </div>
        {
          CategoryArray.map((value) => {
            return (
              <div className="Options" onClick={() => {
                setCategory(value);
                setSelectTag(0); 
                setStyleOfOptionDiv({ display: "none", height: '200px', overflowY: 'auto' });
                setSelectArrow({ transform: "rotate(0deg)" });}}>
              {value}
              </div>
            )
          })
        }
      </div>
      </div>
    </div>

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
