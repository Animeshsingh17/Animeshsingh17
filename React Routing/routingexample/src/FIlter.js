import { useSearchParams } from "react-router-dom";
import React from "react";

function Filter() {
  const [searchParams, setSearchParams] = useSearchParams();
  console.warn(searchParams.get("age"));
  console.warn(searchParams.get("city"));
  const age = searchParams.get("age");
  const city = searchParams.get("city");
  return (
    <div>
      <h3>
        Age is :{age} and city is :{city}
      </h3>
      <h1>FIlter Page</h1>
      <input
        type="text"
        onChange={(e) => setSearchParams({ text: e.target.value })}
        placeholder="Set text in Query Params"
      />
      <button onClick={() => setSearchParams({ age: 40 })}>
        Set Age in Query Params
      </button>
    </div>
  );
}

export default Filter;
