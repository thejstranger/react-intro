import React from "react";

export default function Pet({ name, animal, colour }) {
  return (
    <div>
      <h1>{name.toUpperCase()}</h1>
      <h2>{animal}</h2>
      <h2>{colour}</h2>
    </div>
  );
}
