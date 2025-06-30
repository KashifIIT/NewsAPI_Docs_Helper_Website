import React from "react";
import VarStore from "../../VarStore";

export default function Page5() {
  let { TH1PageSize, setTH1PageSize } = VarStore();
  let { TH1PageNo, setTH1PageNo } = VarStore();

  return (
    <div>
      <div>
        <label htmlFor="TH1PageSize" className="VerticalLabel">
          How many number of articles you want to return per page:
          <br />
          <i>ByDefault: Only some articles are returned per page.</i>
          <br />
          <b>{TH1PageSize === "" ? null : "&pageSize=" + TH1PageSize}</b>
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
          You can naviagate through pages with this input:
          <br />
          <i>ByDefault: You are on page 1.</i>
          <br />
          <b>{TH1PageNo === "" ? null : " &page=" + TH1PageNo}</b>
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
