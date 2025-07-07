import React from "react";
import VarStore from "../../VarStore";

export default function PageSizeA() {
  let { TH1PageSize, setTH1PageSize } = VarStore();
  let { TH1PageNo, setTH1PageNo } = VarStore();

  return (
    <div>
      <div>
        <label htmlFor="TH1PageSize" className="VerticalLabel">
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
            <b>{TH1PageSize === "" ? null : "&pageSize=" + TH1PageSize}</b>
          </div>
        </label>
        <input
          value={TH1PageSize}
          type="number"
          id="TH1PageSize"
          className="Input"
          placeholder="Enter number"
          onChange={(e) => setTH1PageSize(e.target.value)}
        />

        <br />
        <br />

        <label htmlFor="TH1PageNo" className="VerticalLabel">
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
            <b>{TH1PageNo === "" ? null : " &page=" + TH1PageNo}</b>
          </div>
        </label>
        <input
          type="number"
          value={TH1PageNo}
          onChange={(e) => setTH1PageNo(e.target.value)}
          id="TH1PageNo"
          className="Input"
          placeholder="Enter page number (ex. 1, 2, etc.)"
        />
      </div>
    </div>
  );
}
