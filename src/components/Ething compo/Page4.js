import React from "react";
import { useState } from "react";
import VarStore from "../../VarStore";

export default function FourthPage() {
  let ArrayOfLangauges = [
    "Arabic (ar)",
    "German (de)",
    "English (en)",
    "Spanish (es)",
    "French (fr)",
    "Hebrew (he)",
    "Italian (it)",
    "Dutch (nl)",
    "Norwegian (no)",
    "Portuguese (pt)",
    "Russian (ru)",
    "Swedish (sv)",
    "Urdu (ur)",
    "Chinese (zh)",
  ];

  let ArrayOfSortBy = [
    "Articles more closely related to q will come first. (relevancy)",
    "Articles from popular sources and publishers will come first. (popularity)",
    "Newest articles will come first. (publishedAt)",
  ];

  let ActualSortBy = ["relevancy", "popularity", "publishedAt"];

  let [SelectTag1, setSelectTag1] = useState(0);
  let [SelectTag2, setSelectTag2] = useState(0);
  let [StyleOfOptionDiv1, setStyleOfOptionDiv1] = useState({
    display: "none",
    height: "200px",
    overflowY: "auto",
    zIndex: "2",
    borderTopRightRadius: "0px",
    borderBottomRightRadius: '0px' 
  });
  let [StyleOfOptionDiv2, setStyleOfOptionDiv2] = useState({
    display: "none",
    height: "200px",
    overflowY: "auto",
  });

  let { Language, setLanguage } = VarStore();
  let { SortByValue, setSortByValue } = VarStore();
  let { From, setFrom } = VarStore();
  let { To, setTo } = VarStore();
  let [SelectArrow1, setSelectArrow1] = useState({});
  let [SelectArrow2, setSelectArrow2] = useState({});

  function SelectFunc1(ix, check) {
    let shikaar = document.getElementById(ix);
    let value = shikaar.value;
    let StoredValue = value[value.length - 1 - 2] + value[value.length - 1 - 1];

    if (check === 1 ? !shikaar.checked : shikaar.checked) {
      shikaar.checked = false;
      setLanguage("");
    } else {
      shikaar.checked = true;
      setLanguage(StoredValue);
    }
  }

  function SelectFunc2(ix, check) {

    setStyleOfOptionDiv2({ ...StyleOfOptionDiv2, display: "none" });
    setSelectTag2(0);

    let Shikaar = document.getElementById("Sort" + ix);

    if (check ? Shikaar.checked : !Shikaar.checked) {
      Shikaar.checked = true;
      setSortByValue(ActualSortBy[ix]);
    } else {
      Shikaar.checked = false;
      setSortByValue("");
    }
  }

  return (
    <div>
      <div>
        <div className="VerticalLabel">
          1. Select date from which to which you want news articles :
          <br />
          <i>byDefault: Articles are shown from the date you made your NewsAPI account to current date.</i>
          <br />
          <b>
            {" "}
            {From === ""? null : `&from=${From}`}
            {To === ""? null : `&to=${To}`}
          </b>
        </div>

        <label htmlFor="from" className="HorizontalLabel">
          from
        </label>
        <input
          className="btn"
          value={From}
          onChange={(e) => setFrom(e.target.value)}
          id="from"
          type="date"
        />
        <span id="FromTo">-</span>
        <label htmlFor="to" className="HorizontalLabel">
          to
        </label>
        <input 
        className="btn"
        id="to" 
        value={To}
        type="date" 
        onChange={(e) => setTo(e.target.value)}/>
      </div>

      <br />

      <div>
        <div className="VerticalLabel">
          <div>2. Select language in which you want news articles:</div>
          <i>byDefault: All languages returned.</i>
          <div>
            <b style={{ wordBreak: "break-word" }}>
              {Language === "" ? null : `&language=${Language}`}
            </b>
          </div>
        </div>

        <div style={{ position: "relative" }}>
          <div
            className="SelectDiv"
            onClick={() => {
              if (SelectTag1 === 1) {
                setSelectTag1(0);
                setStyleOfOptionDiv1({ ...StyleOfOptionDiv1, display: "none" });
                setSelectArrow1({transform: 'rotate(0deg)'})
              } else {
                setSelectTag1(1);
                setStyleOfOptionDiv1({
                  ...StyleOfOptionDiv1,
                  display: "block",
                });
                setSelectArrow1({transform: 'rotate(90deg)'})
              }
            }}
          >
            Select languages
            <span className="SelectArrow" style={SelectArrow1}>
              {"\u276F"}
            </span>
          </div>

          <div className="OptionDiv" style={StyleOfOptionDiv1}>
            <div className="Options" 
            onClick={() => {
              setLanguage("");
              for(let i = 1; i<= ArrayOfLangauges.length; i++) {
                let check = document.getElementById(i-1).checked
                if(check === true) 
                  document.getElementById(i-1).checked = false;
              }
            }}>
              <div className="center">Clear</div>
            </div>
            {ArrayOfLangauges.map((value, ix) => {
              return (
                <div className="Options" onClick={() => {
                      SelectFunc1(ix, 0);
                      setSelectTag1(0);
                      setStyleOfOptionDiv1({...StyleOfOptionDiv1, display: "none"})
                      setSelectArrow1({transform: 'rotate(0deg)'})
                    }}>
                  <input
                    id={ix}
                    type="radio"
                    name="Language"
                    value={value}
                    onClick={() => {
                      SelectFunc1(ix, 1);
                    }}
                    style={{ marginRight: "8px" }}
                  />
                  <span
                  >
                    {value}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <br />

      <div>
        <div className="VerticalLabel">
          3. Choose one for sorting Articles:
          <br />
          <i>byDefault: Newest articles will come first. (publishedAt)</i>
          <b>{SortByValue === "" ? null : ` &sortBy=${SortByValue}`}</b>
        </div>
        <div style={{ position: "relative" }}>
          <div
            className="SelectDiv"
            onClick={() => {
              if (SelectTag2 === 1) {
                setSelectTag2(0);
                setStyleOfOptionDiv2({ ...StyleOfOptionDiv2, display: "none" });
                setSelectArrow2({transform: 'rotate(0deg)'});
              } else {
                setSelectTag2(1);
                setStyleOfOptionDiv2({
                  ...StyleOfOptionDiv2,
                  display: "block",
                });
                setSelectArrow2({transform: 'rotate(90deg)'});
              }
            }}
          >
            Choose one
            <span className="SelectArrow" style={SelectArrow2}>
              {"\u276F"} 
            </span>
          </div>

          <div className="OptionDiv" style={StyleOfOptionDiv2}>
            <div className="Options">
              <div 
              className="center"
              onClick={() => {
                setSortByValue("");
                for(let i = 1; i <= ArrayOfSortBy.length; i++) {
                  let ix = i-1; 
                  console.log("Sort" + ix)
                  if(document.getElementById("Sort" + ix).checked) {
                    document.getElementById("Sort" + ix).checked = false;
                  }
                }
              }}>Clear</div>
            </div>
            {ArrayOfSortBy.map((value, ix) => {
              return (
                <div className="Options" onClick={() => {
                  SelectFunc2(ix, 0)
                  setSelectTag2(0);
                  setStyleOfOptionDiv2({ ...StyleOfOptionDiv2, display: "none" });
                  setSelectArrow2({transform: 'rotate(0deg)'});
                }}>
                  <input
                    type="radio"
                    id={"Sort" + ix}
                    name="hello"
                    onClick={() => SelectFunc2(ix, 1)}
                  />
                  <span>{value}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
