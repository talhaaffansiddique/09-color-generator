import React, { useState } from "react";

const Form = () => {
  const [color, setColor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="container">
      <h4>color generator</h4>
      <form className="color-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={color}
          onChange={() => setColor(e.target.value)}
          placeholder="#f15025"
        />
        <button className="btn" type="submit" style={{ background: color }}>
          submit
        </button>
      </form>
    </section>
  );
};

export default Form;
