import React from "react";
import VarStore from "../../VarStore";

export default function Page5() {
  let { TH2PageSize, setTH2PageSize } = VarStore();
  let { TH2PageNo, setTH2PageNo } = VarStore();

  return (
    <div>
      <div>
        <label htmlFor="TH2PageSize" className="VerticalLabel">
          How many number of articles you want to return per page:
          <br />
          <i>ByDefault: Only some articles are returned per page.</i>
          <br />
          <b>{TH2PageSize === "" ? null : "&pageSize=" + TH2PageSize}</b>
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
          You can naviagate through pages with this input:
          <br />
          <i>ByDefault: You are on page 1.</i>
          <br />
          <b>{TH2PageNo === "" ? null : " &page=" + TH2PageNo}</b>
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
