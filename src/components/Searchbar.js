import React, { Component } from "react";

const Searchbar = (props) => {
  const handleSubmitForm = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <div className="form-row mb-3 mt-2">
        <div className="col-12">
          <input
            onChange={props.searchMovie}
            type="text"
            className="form-control"
            placeholder="Search An Agent..."
          />
        </div>
      </div>
    </form>
  );
};
export default Searchbar;
