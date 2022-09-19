import React from "react";

export default function Form() {
  return (
    <div className="col">
      <form className="search-city" id="search-city-form">
        <input
          type="text"
          placeholder="Enter new city"
          id="search-city-input"
        />
        <input type="submit" value="Go" className="go-button" id="go-button" />
      </form>
    </div>
  );
}
