import "./App.css";
import './my_css.css'
import { useState} from "react";
import useStore from "./VarStore";
import Everything from "./components/Everything";
import Topheadline from "./components/TopHeadline";

function App() {

  let {EveryThing, setEveryThing} = useStore();
  let [TopHeadline, ChangeTopHeadline] = useState(0);
  let [SelectTag, setSelectTag] = useState(0);

  let [OptionDiv, setOptionDiv] = useState({
    display: "none",
  });
  let [StyleOfArrow, setStyleOfArrow] = useState({
    float: 'right',
    marginRight: '9px',
    cursor: 'pointer',
    transition: 'transform 1s'
  })

  let {Page, setPage} = useStore();
  
  if(Page === 1) document.title = "NewsAPI - Docs Helper";
  
  function SelectFunc() {
    if (SelectTag === 0) {
      setOptionDiv({
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      });
      setStyleOfArrow({ ...StyleOfArrow, transform: 'rotate(90deg)' })
      setSelectTag(1);
    } else {
      setSelectTag(0);
      setStyleOfArrow({ ...StyleOfArrow, transform: 'rotate(0deg)' })
      setOptionDiv({
        display: "none"
      });

    }
  }

  function EndpointFunc(Endpoint) {

    if (Endpoint === "Everything") {
      ChangeTopHeadline(0);
      setEveryThing(1);
      setPage(2);
      setOptionDiv({ //Added so that dropdown will not be shown open when we will click on Go back. 
        display: "none"
      });
      setSelectTag(0);
    } else {
      setEveryThing(0);
      ChangeTopHeadline(1);
      setPage(2);
      setOptionDiv({ //Added so that dropdown will not be shown open when we will click on Go back. 
        display: "none"
      });
      setSelectTag(0);
    }
  }

  return (
    <div id="StartingDiv"
    style={Page === 5? {height: '145vh'} : {}} >
      
      <div id="MainDiv">
        <h3 className="center">
          Learn to use NewsAPI faster than ever before!
        </h3>
        <br />

        {Page === 1 ? (
          <div className="center" style={{ position: "relative" }}>
            <div className="SelectDiv" onClick={SelectFunc}>
              Select Endpoint
              <span
                style={StyleOfArrow}
              >{"\u276F"}
              </span>
            </div>

            <div style={{...OptionDiv, borderRadius: '12px'}} className="OptionDiv">
              <div
              onClick={() => {
                EndpointFunc("Everything")
                setStyleOfArrow({ ...StyleOfArrow, transform: 'rotate(0deg)' });
              }}
              className="Options">
                I want to search within those articles which are uploaded in the
                last 5 years. <b>(everything?)</b>
              </div>

              <div
              onClick={() => {
                EndpointFunc("")
                setStyleOfArrow({ ...StyleOfArrow, transform: 'rotate(0deg)' })}}
              className="Options"
              >I want live top and breaking headlines.
              <br />
              <b>(top-headlines?)</b>
              </div>
            </div>
          </div>
        ) : null}

        {EveryThing === 1 && Page >= 2? <Everything /> : null}
        {TopHeadline === 1 && Page >= 2? <Topheadline /> : null}
      </div>
    </div>
  );
}

export default App;
