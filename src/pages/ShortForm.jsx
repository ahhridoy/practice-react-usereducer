import React from "react";

const ShortForm = () => {
  return (
    <div>
      <form>
        <div>
          <label className="firstName">First Name</label>
          <input type="text" name="name" id="name" />
        </div>
        <button className="submit">Submit</button>
      </form>
    </div>
  );
};

export default ShortForm;
