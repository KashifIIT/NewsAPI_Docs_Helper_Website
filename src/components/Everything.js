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
    document.title = "NewsAPI - Everything endpoint";
  }, []);

  let [AlertValue1, setAlertValue1] = useState("");
  let [AlertValue2, setAlertValue2] = useState("");
  let [StyleOfAlert, setStyleOfAlert] = useState({ visibility: "hidden" });
  let [StyleOfAlertCopy, setStyleOfAlertCopy] = useState({ display: "none" });
  let [StyleOfAlertUrl, setStyleOfAlertUrl] = useState({});
  let [CopyText, setCopyText] = useState("Copy");
  let { qValue } = useStore();
  let { q2Value } = useStore();
  let { ApiKey } = useStore();

  let { Page, setPage } = useStore();
  let { Title, Content, Description } = useStore();

  let { SourceArray, excludeDomainArray } = useStore();
  let { From, To, Language, SortByValue } = useStore();
  let { PageSize, PageNo } = useStore();

  let [LDivw, setLDivw] = useState(0);

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
      if (From > To) {
        setAlertValue1("Please correct: the 'From' date must be earlier than the 'To' date.");
        setAlertValue2("");
        setStyleOfAlertUrl({ display: "none" });
        setStyleOfAlert({
          visibility: "visible",
          backgroundColor: "#FF9800",
        });

        setTimeout(() => {
          setStyleOfAlert({ visibility: "hidden" });
        }, 5000);
        return 0;
      }
      url += "&to=" + To;
    }

    if (PageSize !== "") {
      if (PageNo === "") {
        setAlertValue1("Please enter some value in Page number too in last filter. ex. 1");
        setAlertValue2("");
        setStyleOfAlertUrl({ display: "none" });
        setStyleOfAlert({
          visibility: "visible",
          backgroundColor: "#FF9800",
        });

        setTimeout(() => {
          setStyleOfAlert({ visibility: "hidden" });
        }, 5000);
      } else {
        url += `&pageSize=${PageSize}&page=${PageNo}`;
      }
    }

    if (PageNo !== "" && PageSize === "") {
     setAlertValue1("Please add value in PageSize too apply last filter.");
        setAlertValue2("");
        setStyleOfAlertUrl({ display: "none" });
        setStyleOfAlert({
          visibility: "visible",
          backgroundColor: "#FF9800",
        });

        setTimeout(() => {
          setStyleOfAlert({ visibility: "hidden" });
        }, 5000);
    }

    if (ApiKey !== "") url += `&apiKey=${ApiKey}`;
    else url += EndEverything;

    setAlertValue1(
      `This is your generated link: (Simply copy and paste this link into your browser to retrieve the articles)\n\n`
    );

    setStyleOfAlertUrl({});
    setAlertValue2(url);

    setStyleOfAlert({
      visibility: "visible",
      backgroundColor: "rgb(223 240 254)",
    });
  }

  document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      if(qValue !== "") GenerateLink();
    }
  })

  return (
    <div>
      <div id="LoadingDiv" style={{ width: `${LDivw}%` }}></div>

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
          onMouseEnter={() => setStyleOfAlertCopy({ display: "block" })}
          onMouseLeave={() => setStyleOfAlertCopy({ display: "none" })}
        >
          <button
            onClick={() => {
              navigator.clipboard.writeText(AlertValue2);
              setCopyText("Copied");
              setTimeout(() => {
                setCopyText("Copy");
              }, 2000);
            }}
            style={{
              ...StyleOfAlertCopy,
              position: "absolute",
              right: "0px",
              top: "0px",
              borderRadius: "0px 7px 0px 0px",
              margin: "-0.5px",
              background: "#dff0fe",
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
          onClick={() => {
            setPage(Page - 1);

            if (Page === 1) {
            } else {
              if (window.innerWidth > 2000) setLDivw(LDivw - 23);
              else if (window.innerWidth <= 2000 && window.innerWidth > 1200)
                setLDivw(LDivw - 21.5);
              else if (window.innerWidth <= 1200 && window.innerWidth > 480)
                setLDivw(LDivw - 21.25);
              else if (window.innerWidth <= 480 && window.innerWidth > 380)
                setLDivw(LDivw - 20);
              else if (window.innerWidth <= 380) setLDivw(LDivw - 19.5);
            }
          }}
          style={{ marginLeft: "0vw" }}
        >
          Go Back
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
              setStyleOfAlertUrl({ display: "none" });
              setStyleOfAlert({
                visibility: "visible",
                backgroundColor: "#FF9800",
              });

              setTimeout(() => {
                setStyleOfAlert({ visibility: "hidden" });
              }, 2000);
            }

            //Setting width of Loading Div on the basis of width of device

            if (window.innerWidth > 2000) setLDivw(LDivw + 23);
            else if (window.innerWidth <= 2000 && window.innerWidth > 1200)
              setLDivw(LDivw + 21.5);
            else if (window.innerWidth <= 1200 && window.innerWidth > 480)
              setLDivw(LDivw + 21.25);
            else if (window.innerWidth <= 480 && window.innerWidth > 380)
              setLDivw(LDivw + 20);
            else if (window.innerWidth <= 380) setLDivw(LDivw + 19.5);
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
