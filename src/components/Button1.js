import React from "react";

function Button({ text }) {
  return (
    <button style={{
      padding: "10px 20px",
      border: "none",
      borderRadius: "8px",
      background: "#007BFF",
      color: "#fff",
      cursor: "pointer",
      transition: "0.3s"
    }}>
      {text}
    </button>
    
  );
}

export default Button;