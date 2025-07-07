import React from "react";
import VarStore from "../../VarStore";

export default function PageSizeQ() {
  let { TH2PageSize, setTH2PageSize } = VarStore();
  let { TH2PageNo, setTH2PageNo } = VarStore();

  return (
    <div>
      <div>
        <label htmlFor="TH2PageSize" className="VerticalLabel">
          <div className="VerticalLabel">
            <span className="step-number">3.</span>
            <span className="MainLabel">
              How many articles do you want to return per page?
            </span>
          </div>
          <div className="VerticalLabel">
            <i>By default: Only some articles are returned per page.</i>
          </div>
          <div className="VerticalLabel">
            <b>{TH2PageSize === "" ? null : "&pageSize=" + TH2PageSize}</b>
          </div>
        </label>
        <input
          value={TH2PageSize}
          type="number"
          id="TH2PageSize"
          className="Input"
          placeholder="Enter number"
          onChange={(e) => setTH2PageSize(e.target.value)}
        />

        <br />
        <br />

        <label htmlFor="TH2PageNo" className="VerticalLabel">
          <div className="VerticalLabel">
            <span className="step-number">4.</span>
            <span className="MainLabel">
              Enter the page number to view:
            </span>
          </div>
          <div className="VerticalLabel">
            <i>By default: You are on page 1.</i>
          </div>
          <div className="VerticalLabel">
            <b>{TH2PageNo === "" ? null : " &page=" + TH2PageNo}</b>
          </div>
        </label>
        <input
          type="number"
          value={TH2PageNo}
          onChange={(e) => setTH2PageNo(e.target.value)}
          id="TH2PageNo"
          className="Input"
          placeholder="Enter page number (ex. 1, 2, etc.)"
        />
      </div>
    </div>
  );
}
