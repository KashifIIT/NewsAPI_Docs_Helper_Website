import React from "react";
import { useState, useEffect } from "react";
import useStore from "../VarStore";
import Page1 from "./Ething compo/Page1";
import Page2 from "./Ething compo/Page2";
import Page3 from "./Ething compo/Page3";
import Page4 from "./Ething compo/Page4";
import Page5 from "./Ething compo/Page5"; 

export default function Everything() {
  const StartEverything = "https://newsapi.org/v2/everything?";
  const EndEverything = "&apiKey=REPLACE_WITH_YOUR_NEWS_API_KEY";

  useEffect(() => {
    document.title = "NewsAPI - Everything endpoint"
  }, [])

  let [AlertValue1, setAlertValue1] = useState("");
  let [AlertValue2, setAlertValue2] = useState("");
  let [StyleOfAlert, setStyleOfAlert] = useState({ visibility: "hidden" });
  let [StyleOfAlertCopy, setStyleOfAlertCopy] = useState({ display: 'none' });
  let [StyleOfAlertUrl, setStyleOfAlertUrl] = useState({});
  let [CopyText, setCopyText] = useState("Copy")
  let { qValue } = useStore();
  let { q2Value } = useStore();
  let { ApiKey } = useStore();

  let { Page, setPage } = useStore();
  let { Title, Content, Description } = useStore();

  let { SourceArray, excludeDomainArray } = useStore();
  let { From, To, Language, SortByValue } = useStore();
  let { PageSize, PageNo } = useStore();

  function GenerateLink() {

    let url = StartEverything + `q=${qValue}`;

    if (q2Value !== "") url += `-${q2Value}`;

    if (Title === 1 || Description === 1 || Content === 1) {
      url += "&searchIn=";

      if (Title === 1) {
        url += "title";
        if (Content === 1) url += ",content";
        if (Description === 1) url += ",description";
      } else if (Content === 1) {
        url += "content";
        if (Description === 1) url += ",description";
      } else if (Description === 1) {
        url += "description";
      }
    }

    if (SourceArray.length !== 0) {
      url += "&domains=";

      SourceArray.map((value, ix) => {
        if (ix >= 1) url += ",";
        url += value;
        return null;
      });
    } else if (excludeDomainArray.length !== 0) {
      url += "&excludeDomains=";

      excludeDomainArray.map((value, ix) => {
        if (ix >= 1) url += ",";
        url += value;
        return null;
      });
    }

    if (Language !== "") {
      url += "&language=" + Language;
    }

    if (SortByValue !== "") {
      url += `&sortBy=` + SortByValue;
    }

    if (From !== "") {
      url += "&from=" + From;
    }
    if (To !== "") {
      url += "&to=" + To;
    }

    if (PageSize !== "") {
      if (PageNo === "") {
        alert("Please enter some value in Page number too. ex. 1.");
      } else {
        url += `&pageSize=${PageSize}&page=${PageNo}`;
      }
    }

    if (PageNo !== "" && PageSize === "") {
      alert("Please add value in PageSize too apply this last filter.");
    }

    if (ApiKey !== "") url += `&apiKey=${ApiKey}`;
    else url += EndEverything;

    setAlertValue1(`This is your generated link: (Just copy and paste it in the browser and get the articles)\n\n`);

    setStyleOfAlertUrl({})
    setAlertValue2(url);

    setStyleOfAlert({
      visibility: "visible",
      backgroundColor: "rgb(223 240 254)",
    });
  }

  return (
    <div>
      {Page === 2 ? <Page1 /> : null}
      {Page === 3 ? <Page2 /> : null}
      {Page === 4 ? <Page3 /> : null}
      {Page === 5 ? <Page4 /> : null}
      {Page === 6 ? <Page5 /> : null}

      <br />

      <div id="Alert" style={StyleOfAlert}>
        <button
          style={{
            position: "absolute",
            right: "10px",
            background: "#ff3131",
            borderRadius: "8px",
          }}
          onClick={() =>
            setStyleOfAlert({
              visibility: "hidden",
            })
          }
        >
          &times;
        </button>
        <div className="center">{AlertValue1}</div>
        <div 
        id="AlertUrl"
        style={StyleOfAlertUrl}
        onMouseEnter={() => setStyleOfAlertCopy({display: 'block'})}
        onMouseLeave={() => setStyleOfAlertCopy({display: 'none'})}
        >
          <button
          onClick={() => {
            navigator.clipboard.writeText(AlertValue2);
            setCopyText("Copied");
            setTimeout(() => {
              setCopyText("Copy")
            }, 2000);
          }}
            style={{
              ...StyleOfAlertCopy,
              position: "absolute",
              right: "0px",
              top: '0px',
              borderRadius: '0px 7px 0px 0px',
              margin: '-0.5px',
              background: '#dff0fe'
            }}
          >
            {CopyText}
          </button>
          <div>{AlertValue2}</div>
        </div>
      </div>

      <div className="center">
        {" "}
        {/*For buttons*/}
        <button
          className="btn"
          onClick={() => setPage(Page - 1)}
          style={{ marginLeft: "0vw" }}
        >
          Go back
        </button>
        <button
          className="btn"
          type="button"
          disabled={qValue === "" ? true : false}
          onClick={GenerateLink}
        >
          Generate link
        </button>
        <button
          className="btn"
          onClick={() => {
            setPage(Page + 1);
            if (Page === 2) {
              setAlertValue1("From here, all the filters are optional.");
              setAlertValue2("");
              setStyleOfAlertUrl({display: 'none'})
              setStyleOfAlert({
                visibility: "visible",
                backgroundColor: "#FF9800",
              });

              setTimeout(() => {
                setStyleOfAlert({ visibility: "hidden" });
              }, 2000);
            }
          }}
          style={{ marginRight: "0vw" }}
          disabled={qValue === "" || Page === 6 ? true : false}
        >
          Enhance filters
        </button>
      </div>
    </div>
  );
}
