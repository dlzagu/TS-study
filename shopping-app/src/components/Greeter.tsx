import React from "react";

interface GreeterProps {
  person: string;
}

function Greeter({ person }: GreeterProps) {
  return (
    <div>
      <h1>Hello, {person}</h1>;
    </div>
  );
}

export default Greeter;
