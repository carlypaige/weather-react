import React from "react";

export default function Form() {
  return (
    <div className="search-engine">
      <form className="search-city">
        <input
          type="text"
          placeholder="Enter new city"
          id="search-city-input"
        />
        <input type="submit" value="Search" className="go-button" />
      </form>
    </div>
  );
}
