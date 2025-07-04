import React from "react";
import { useEffect, useState } from "react";
import VarStore from "../VarStore";
import QPage from "./THead component/QPage";
import CategoryPage from "./THead component/PageA";
import PageSizeA from "./THead component/PageSizeA";
import PageSizeQ from "./THead component/PageSizeQ";

export default function TopHeadline() {

  useEffect(() => {
    document.title = "NewsAPI - Topheadline endpoint" 
    setPage(10);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  let [SelectTag, setSelectTag] = useState(0);
  let [StyleOfOptionDiv, setStyleOfOptionDiv] = useState({ display: "none" });
  let [SelectArrow, setSelectArrow] = useState({});
  let [AlertValue1, setAlertValue1] = useState("");
  let [AlertValue2, setAlertValue2] = useState("");
  let [StyleOfAlert, setStyleOfAlert] = useState({ visibility: "hidden" });
  let [StyleOfAlertCopy, setStyleOfAlertCopy] = useState({ display: 'none'});
  let [CopyText, setCopyText] = useState("Copy");
  let { Page, setPage } = VarStore();
  let { THQvalue, setTHQvalue } = VarStore();
  let { Category, setCategory } = VarStore();
  let { ApiKey } = VarStore();
  let { TH1PageSize } = VarStore();
  let { TH1PageNo } = VarStore();
  let { TH2PageSize } = VarStore();
  let { TH2PageNo } = VarStore();

  function GenerateLink() {
    let url = "";
    let common = "https://newsapi.org/v2/top-headlines?";

    url += common;

    if (THQvalue === "") {
      url += `category=${Category}`;
      if (ApiKey === "") {
        url += `&apiKey=REPLACE_WITH_YOUR_NEWS_API_KEY`;
      } else {
        url += `&apiKey=${ApiKey}`;
      }
      if (TH1PageSize !== "") url += `&pageSize=${TH1PageSize}`;
      if (TH1PageNo !== "") url += `&page=${TH1PageNo}`;
    } else {
      url += `q=${THQvalue}`;
      if (ApiKey === "") {
        url += `&apiKey=REPLACE_WITH_YOUR_NEWS_API_KEY`;
      } else {
        url += `&apiKey=${ApiKey}`;
      }
      if (TH2PageSize !== "") url += `&pageSize=${TH2PageSize}`;
      if (TH2PageNo !== "") url += `&page=${TH2PageNo}`;
    }

    setAlertValue1(
      `This is your generated link: (Just copy and paste it in the browser and get the articles)\n\n`
    );
    setAlertValue2(url);

    setStyleOfAlert({
      visibility: "visible",
      backgroundColor: "rgb(223 240 254)",
    });
  }

  document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      if(THQvalue !== "" || Category !== "") GenerateLink();
    }
  })

  return (
    <div>
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

      {Page === 10 ? (
        <div className="center" style={{ position: "relative" }}>
          <div
            className="SelectDiv"
            onClick={() => {
              if (SelectTag === 1) {
                setSelectTag(0);
                setStyleOfOptionDiv({ display: "none" });
                setSelectArrow({ transform: "rotate(0deg)" });
              } else {
                setSelectTag(1);
                setStyleOfOptionDiv({ display: "block" });
                setSelectArrow({ transform: "rotate(90deg)" });
              }
            }}
          >
            Choose one
            <span className="SelectArrow" style={SelectArrow}>
              {"\u276F"}
            </span>
          </div>

          <div className="OptionDiv" style={{...StyleOfOptionDiv, borderRadius: '12px'}}> 
            <div
              className="Options"
              onClick={() => {
                setPage(21);
                setTHQvalue("");
              }}
            >
              Get latest news from popular categories.
            </div>
            <div
              className="Options"
              onClick={() => {
                setPage(11);
                setCategory("");
              }}
            >
              Get latest news as per own request category.
            </div>
          </div>
        </div>
      ) : null}

      {Page === 11 ? <QPage /> : null}
      {Page === 12 ? <PageSizeQ /> : null}
      {Page === 21 ? <CategoryPage /> : null}
      {Page === 22 ? <PageSizeA /> : null}

      <br />

      <div className="center">
        {" "}
        {/*For buttons*/}
        <button
          className="btn"
          onClick={() => {
            if (Page === 10) setPage(1);
            else if (Page === 21) setPage(10);
            else setPage(Page - 1);
          }}
        >
          Go back
        </button>
        <button
          className="btn"
          type="button"
          disabled={THQvalue === "" && Category === "" ? true : false}
          onClick={GenerateLink}
        >
          Generate link
        </button>
        <button
          className="btn"
          onClick={() => setPage(Page + 1)}
          disabled={
            Page === 11
              ? THQvalue === ""
                ? true
                : false
              : Page === 21
              ? Category === ""
                ? true
                : false
              : true
          }
        >
          Enhance filters
        </button>
      </div>
    </div>
  );
}
