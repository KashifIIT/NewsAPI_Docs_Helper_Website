import React from "react";
import { useState } from "react";
import VarStore from "../../VarStore";

export default function ThirdPage() {
  let [InputSource1, setInputSource1] = useState("");
  let [InputSource2, setInputSource2] = useState("");
  let [StyleOfOptionDiv, setStyleOfOptionDiv] = useState({
    height: "220px",
    overflowY: "auto",
    display: "none",
  });

  let [StyleOfOptionDiv3, setStyleOfOptionDiv3] = useState({
    height: "220px",
    overflowY: "auto",
    display: "none",
  });

  let [StyleOfOptionDiv2, setStyleOfOptionDiv2] = useState({
    display: "none",
  });

  let [SelectTag1, setSelectTag1] = useState(0);
  let [SelectTag2, setSelectTag2] = useState(0);
  let [SelectTag3, setSelectTag3] = useState(0);

  let [SelectArrow1, setSelectArrow1] = useState({});
  let [SelectArrow2, setSelectArrow2] = useState({});
  let [SelectArrow3, setSelectArrow3] = useState({});

  let [OrigArray] = useState([
    "abcnews.go.com",
    "abc.net.au/news",
    "aftenposten.no",
    "aljazeera.com",
    "ansa.it",
    "argaam.com",
    "arstechnica.com",
    "arynews.tv",
    "apnews.com",
    "afr.com",
    "axios.com",
    "bbc.co.uk/news",
    "bbc.co.uk/sport",
    "bild.de",
    "br.blastingnews.com",
    "bleacherreport.com",
    "bloomberg.com",
    "breitbart.com",
    "businessinsider.com",
    "buzzfeed.com",
    "cbc.ca/news",
    "cbsnews.com",
    "edition.cnn.com",
    "cnnespanol.cnn.com",
    "ccn.com",
    "tagesspiegel.de",
    "zeit.de",
    "elmundo.es",
    "engadget.com",
    "ew.com",
    "espn.com",
    "espncricinfo.com",
    "financialpost.com",
    "focus.de",
    "football-italia.net",
    "fortune.com",
    "fourfourtwo.com",
    "foxnews.com",
    "foxsports.com",
    "g1.globo.com",
    "news.google.com",
    "news.google.com.ar",
    "news.google.com.au",
    "news.google.com.br",
    "news.google.ca",
    "news.google.fr",
    "news.google.co.in",
    "news.google.is",
    "news.google.it",
    "news.google.ru",
    "news.google.com.sa",
    "news.google.co.uk",
    "gp.se",
    "gruenderszene.de",
    "news.ycombinator.com",
    "handelsblatt.com",
    "ign.com",
    "ilsole24ore.com",
    "independent.co.uk",
    "infobae.com",
    "infomoney.com.br",
    "lagaceta.com.ar",
    "lanacion.com.ar",
    "repubblica.it",
    "lemonde.fr",
    "lenta.ru",
    "lequipe.fr",
    "lesechos.fr",
    "liberation.fr",
    "marca.com",
    "mashable.com",
    "medicalnewstoday.com",
    "msnbc.com",
    "mtv.com/news",
    "mtv.co.uk/news",
    "nationalgeographic.com",
    "nationalreview.com",
    "nbcnews.com",
    "news24.com",
    "newscientist.com",
    "news.com.au",
    "newsweek.com",
    "nymag.com",
    "nextbigfuture.com",
    "nfl.com",
    "nhl.com",
    "nrk.no",
    "politico.com",
    "polygon.com",
    "rbc.ru",
    "recode.net",
    "reddit.com",
    "reuters.com",
    "rt.com",
    "rte.ie",
    "rtlnieuws.nl",
    "sabq.org",
    "spiegel.de",
    "svd.se",
    "t3n.de",
    "talksport.com",
    "techcrunch.com",
    "techcrunch.cn",
    "techradar.com",
    "theamericanconservative.com",
    "theglobeandmail.com",
    "thehill.com",
    "thehindu.com",
    "huffpost.com",
    "irishtimes.com",
    "jpost.com",
    "ladbible.com",
    "thenextweb.com",
    "thesportbible.com",
    "timesofindia.indiatimes.com",
    "theverge.com",
    "wsj.com",
    "washingtonpost.com",
    "washingtontimes.com",
    "time.com",
    "usatoday.com",
    "vice.com",
    "wired.com",
    "wired.de",
    "wiwo.de",
    "xinhuanet.com",
    "ynet.co.il"
]);

  let [SourcesArray, setSourcesArray] = useState(OrigArray);
  let { SourceArray, setSourceArray } = VarStore();
  let [excludeDomainsArray, setexcludeDomainsArray] = useState(OrigArray);
  let { excludeDomainArray, setexcludeDomainArray } = VarStore();

  let [Choose, setChoose] = useState(0);

  function SelectFunc1(ix, check) {

    if(excludeDomainArray !== 0) setexcludeDomainArray([]);

    let shikaar = document.getElementById(ix);
    let Value = shikaar.value;

    if (check === 1? !shikaar.checked : shikaar.checked) {
      shikaar.checked = false;
      setSourceArray(
        SourceArray.filter((value) => {
          if (Value === value) return 0;
          else return 1;
        })
      );
    } else {
      shikaar.checked = true;
      setSourceArray([...SourceArray, Value]);
    }
  }

  function SelectFunc2(ix, check) {

    if(SourceArray.length !== 0) setSourceArray([]);

    let shikaar = document.getElementById(ix);
    let Value = shikaar.value;

    if (check === 1? !shikaar.checked : shikaar.checked) {
      shikaar.checked = false;
      setexcludeDomainArray(
        excludeDomainArray.filter((value) => {
          if (Value === value) return 0;
          else return 1;
        })
      );
    } else {
      shikaar.checked = true;
      setexcludeDomainArray([...excludeDomainArray, Value]);
    }
  }

  function setInputSource1Func(e) {
    let Value = e.target.value;
    setInputSource1(Value);

    Value = Value.toLowerCase();

    if (Value === "") {
      setSourcesArray(OrigArray);
    } else {
      let NewArray = OrigArray.filter((DmnName) => {
        let Valuelth = Value.length;
        let matched = 0;
        let startix = 0;
        for (
          let lstixPlus1 = Valuelth;
          lstixPlus1 <= DmnName.length;
          lstixPlus1++, startix++
        ) {
          let slicedDomain = DmnName.slice(startix, lstixPlus1);
          if (slicedDomain === Value) {
            matched = 1;
            return 1;
          } else continue;
        }

        if (matched === 0) return 0;
      });

      setSourcesArray(NewArray);

      if (NewArray.length >= 7) {
        setStyleOfOptionDiv({ ...StyleOfOptionDiv, height: "220px" });
      } else {
        setStyleOfOptionDiv({ ...StyleOfOptionDiv, height: "fit-content" });
      }
    }
  }

  function setInputSource2Func(e) {
    let Value = e.target.value;
    setInputSource2(Value);

    Value = Value.toLowerCase();

    if (Value === "") {
      setexcludeDomainsArray(OrigArray);
    } else {
      let NewArray = OrigArray.filter((DmnName) => {
        let Valuelth = Value.length;
        let matched = 0;

        let startix = 0;
        for (
          let lstixPlus1 = Valuelth;
          lstixPlus1 <= DmnName.length;
          lstixPlus1++, startix++
        ) {
          let slicedDomain = DmnName.slice(startix, lstixPlus1);
          if (slicedDomain === Value) {
            matched = 1;
            return 1;
          } else continue;
        }

        if (matched === 0) return 0;
      });

      setexcludeDomainsArray(NewArray);

      if (NewArray.length >= 7) {
        setStyleOfOptionDiv3({ ...StyleOfOptionDiv3, height: "220px" });
      } else {
        setStyleOfOptionDiv3({ ...StyleOfOptionDiv3, height: "fit-content" });
      }
    }
  }

  return (
    <div>
      {Choose === 0 ? (
        <div className="center" style={{ position: "relative" }}>
          <div
            className="SelectDiv"
            onClick={() => {
              if (SelectTag2 === 1) {
                setSelectTag2(0);
                setStyleOfOptionDiv2({ display: "none" });
                setSelectArrow1({transform: 'rotate(0deg)'})
              } else {
                setSelectTag2(1);
                setStyleOfOptionDiv2({ display: "block" });
                setSelectArrow1({transform: 'rotate(90deg)'})
              }
            }}
          >
            Choose one
            <span
            className="SelectArrow"
              style={SelectArrow1}
            >
              {"\u276F"}
            </span>
          </div>

          <div className="OptionDiv" style={{...StyleOfOptionDiv2, borderRadius: '12px'}}>
            <div
              className="Options"
              onClick={() => {
                setChoose(1);
              }}
            >
              Select domain(s) from which you want news articles
            </div>
            <div
              className="Options"
              onClick={() => {
                setChoose(2);
              }}
            >
              Exclude domain(s) from which you don't want news articles
            </div>
          </div>
        </div>
      ) : null}

      {Choose === 0 ? null : Choose === 1 ? (
        <div>
          <button className="center labelVertical btn" onClick={() => setChoose(0)}>
            Choose Again
          </button>
          <label for="InputSources" className="labelVertical">
            Select domain(s) from which you want news articles:
            <br />
            <i>By default: All domains are searched.</i>
            <b style={{ wordBreak: "break-word" }}>
              {" "}
              {SourceArray.length === 0? null :"&domain="}
              {SourceArray.map((val, ix) => {
                if (ix >= 1) return "," + val;
                return val;
              })}
            </b>
          </label>
          <div style={{ position: "relative" }}>
            <input
              id="InputSources"
              className="SelectDiv"
              value={InputSource1}
              onChange={(e) => setInputSource1Func(e)}
              type="text"
              placeholder="Search domains"
              onClick={() => {
                if (SelectTag1 === 1) {
                  setSelectTag1(0);
                  setStyleOfOptionDiv({ ...StyleOfOptionDiv, display: "none" });
                  setSelectArrow2({transform: 'rotate(0deg)'})
                } else {
                  setSelectTag1(1);
                  setStyleOfOptionDiv({
                    ...StyleOfOptionDiv,
                    display: "block",
                  });
                  setSelectArrow2({transform: 'rotate(90deg)'})
                }
              }}
            />
            <span
              onClick={() => {
                if (SelectTag1 === 1) {
                  setSelectTag1(0);
                  setStyleOfOptionDiv({ ...StyleOfOptionDiv, display: "none" });
                  setSelectArrow2({transform: 'rotate(90deg)'})
                } else {
                  setSelectTag1(1);
                  setStyleOfOptionDiv({
                    ...StyleOfOptionDiv,
                    display: "block",
                  });
                  setSelectArrow2({transform: 'rotate(90deg)'})
                }
              }}
              className="SelectArrow"
              style={SelectArrow2}
            >
              {"\u276F"}
            </span>

            <div className="OptionDiv" style={StyleOfOptionDiv}>
              {SourcesArray.length === 0 ? (
                <div className="Options">No such source exist.</div>
              ) : (
                SourcesArray.map((SourceName, ix) => {
                  
                  let check = 0;
                  for(let i = 0; i <= (SourceArray.length - 1); i++) {
                    if(SourceName === SourceArray[i]) check = 1;
                  }

                  return (
                    <div className="Options" onClick={() => SelectFunc1(ix, 0)}>
                      <input type="checkbox"
                      checked={check === 1? true: false}
                      onClick={() => SelectFunc1(ix, 1)} id={ix} value={SourceName} />
                      <span>
                      {" " + SourceName}
                      </span>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
      ) : (
        <div>
          <button className="center labelVertical btn" onClick={() => setChoose(0)}>
            Choose Again
          </button>
          <label for="InputSources" className="labelVertical">
            Exclude domain(s) from which you don't want news articles:
            <br />
            <i>By default: None of them is excluded.</i>
            <b style={{ wordBreak: "break-word" }}>
              {" "}
              {excludeDomainArray.length === 0? null : "&excludeDomain="}
              {excludeDomainArray.map((val, ix) => {
                if (ix >= 1) return "," + val;
                return val;
              })}
            </b>
          </label>
          <div style={{ position: "relative" }}>
            <input
              id="InputSources"
              className="SelectDiv"
              value={InputSource2}
              onChange={(e) => setInputSource2Func(e)}
              type="text"
              placeholder="Search domains"
              onClick={() => {
                if (SelectTag3 === 1) {
                  setSelectTag3(0);
                  setStyleOfOptionDiv3({ ...StyleOfOptionDiv3, display: "none" });
                  setSelectArrow3({transform: 'rotate(0deg)'})
                } else {
                  setSelectTag3(1);
                  setStyleOfOptionDiv3({
                    ...StyleOfOptionDiv3,
                    display: "block",
                  });
                  setSelectArrow3({transform: 'rotate(90deg)'})
                }
              }}
            />
            <span
              onClick={() => {
                if (SelectTag3 === 1) {
                  setSelectTag3(0);
                  setStyleOfOptionDiv3({ ...StyleOfOptionDiv3, display: "none" });
                  setSelectArrow3({transform: 'rotate(0deg)'})
                } else {
                  setSelectTag3(1);
                  setStyleOfOptionDiv3({
                    ...StyleOfOptionDiv3,
                    display: "block",
                  });
                  setSelectArrow3({transform: 'rotate(90deg)'})
                }
              }}
              style={SelectArrow3}
              className="SelectArrow"
            >
              {"\u276F"}
            </span>

            <div className="OptionDiv" style={StyleOfOptionDiv3}>
              {excludeDomainsArray.length === 0 ? (
                <div className="Options">No such source exist.</div>
              ) : (
                excludeDomainsArray.map((SourceName, ix) => {

                  let check = 0;
                  for(let i = 0; i <= (excludeDomainArray.length - 1); i++) {
                    if(SourceName === excludeDomainArray[i]) check = 1;
                  }

                  return (
                    <div className="Options" onClick={() => SelectFunc2(ix, 0)}>
                      <input type="checkbox" checked={check === 1? true: false} onClick={() => SelectFunc2(ix, 1)} id={ix} value={SourceName} />
                      <span>{" " + SourceName}</span>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
