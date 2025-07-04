import React from "react";
import VarStore from "../../VarStore";

export default function Page5() {
  let { PageSize, setPageSize } = VarStore();
  let { PageNo, setPageNo } = VarStore();

  return (
    <div>
      <div>
        <label htmlFor="PageSize" className="VerticalLabel">
          How many articles do you want to return per page?:
          <br />
          <i>By default: All articles are returned on a single page.</i>
          <br />
          <b>{PageSize === "" ? null : "&pageSize=" + PageSize}</b>
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

        <label htmlFor="PageNo" className="VerticalLabel">
          Enter the page number to view:
          <br />
          <i>
            By default: You are on page 1.
          </i>
          <br />
          <b>
            {PageNo === "" ? null : " &page=" + PageNo}
          </b>
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
