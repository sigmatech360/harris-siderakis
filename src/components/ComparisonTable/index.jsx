import React from "react";

import checkyes from "../../assets/check-yes.png";
import crossno from "../../assets/cross-no.png";

const ComparisonTable = ({ data }) => {
  return (
    <div className="table-responsive">
      <table className="table align-middle table-striped">
        <thead className="table-dark">
          <tr>
            <th>Feature</th>
            {data.headings.map((heading, i) => (
              <th key={i}>{heading}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.rows.map((row, i) => (
            <tr key={i} className={i % 2 !== 0 ? "table-light" : ""}>
              <td>{row.feature}</td>
              {row.values.map((val, j) => (
                <td key={j}>
                  <div className="comparisonTableContent">
                    {val === "Yes" || val === "Clear" ? (
                      <>
                        <img
                          src={checkyes}
                          className="yes-no-tables-imgs"
                          alt=""
                        />
                      </>
                    ) : (
                      <>
                        <img
                          src={crossno}
                          className="yes-no-tables-imgs"
                          alt=""
                        />
                      </>
                    )}{" "}
                    {val}
                  </div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ComparisonTable;
