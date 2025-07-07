import React from "react";
import VarStore from "../../VarStore";

export default function Page5() {
  let { PageSize, setPageSize } = VarStore();
  let { PageNo, setPageNo } = VarStore();

  return (
    <div>
      <div>
        <label htmlFor="PageSize" className="VerticalLabel">
          <div className="VerticalLabel">
            <span className="step-number">9.</span>
            <span className="MainLabel">
              How many articles do you want to return per page?
            </span>
          </div>
          <div className="VerticalLabel">
            <i>By default: All articles are returned on a single page.</i>
          </div>
          <div className="VerticalLabel">
            <b>{PageSize === "" ? null : "&pageSize=" + PageSize}</b>
          </div>
        </label>
        <input
          value={PageSize}
          type="number"
          id="PageSize"
          className="Input"
          placeholder="Enter number"
          onChange={(e) => setPageSize(e.target.value)}
        />

        <br />
        <br />

        <label htmlFor="PageNo">
          <div className="VerticalLabel">
            <span className="step-number">10.</span>
            <span className="MainLabel">
              Enter the page number to view:
            </span>
          </div>
          <div className="VerticalLabel">
            <i>By default: You are on page 1.</i>
          </div>
          <div className="VerticalLabel">
            <b>
              {PageNo === "" ? null : " &page=" + PageNo}
            </b>
          </div>
        </label>
        <input
          type="number"
          value={PageNo}
          onChange={(e) => setPageNo(e.target.value)}
          id="PageNo"
          className="Input"
          placeholder="Enter page number (ex. 1, 2, etc.)"
        />
      </div>
    </div>
  );
}
