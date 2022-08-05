import React from "react";
import "../styles/home.css";

export const App = () => {
  const [query, setQuery] = React.useState<string | undefined>();
  const [results, setResults] = React.useState<any | undefined>();
  const fetchResult = async () => {
    try {
      const res = await fetch("http://localhost:3000/query", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ query }),
      });
      const resJson = await res.json();
      setResults(resJson);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="content">
      <h1>Dune (alpha)</h1>
      <input
        value={query}
        placeholder="select * from blocks;"
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      ></input>
      <button className="executeButton" onClick={fetchResult}>
        Run
      </button>
      {results && (
        <table>
          <tr>
            {Object.keys(results[0]).map((key) => {
              return <th>{key}</th>;
            })}
          </tr>
          {results.map((row) => {
            return (
              <tr>
                {Object.entries(row).map(([key, value]) => {
                  return <td>{value}</td>;
                })}
              </tr>
            );
          })}
        </table>
      )}
    </div>
  );
};

export default App;
