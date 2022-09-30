import React from "react";
import Card from "../components/Card";

function Elementary() {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 gap-2 mt-12">
      <Card
        img="https://images.unsplash.com/photo-1630343710506-89f8b9f21d31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fHJlYWRpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
        title="Reading"
        link="/reding"
      />
      <Card
        img="https://images.unsplash.com/photo-1550592704-6c76defa9985?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8d3JpdGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
        title="Writing Essay"
        link="/essay"
      />
    </div>
  );
}

export default Elementary;
