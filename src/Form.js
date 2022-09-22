import React from "react";

export default function Form() {
  return (
    <div className="form">
      <form className="search-city">
        <input type="text" placeholder="Enter new city" className="w-75 p-1" />
        <input type="submit" value="Search" className="btn btn-danger ms-2" />
      </form>
    </div>
  );
}
