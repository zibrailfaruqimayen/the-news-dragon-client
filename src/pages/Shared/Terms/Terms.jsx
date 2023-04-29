import React from "react";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <div>
      <h2>Terms and Conditions</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates,
        voluptatem vero eius voluptatum ratione suscipit, id nemo, non
        reprehenderit cupiditate culpa accusamus excepturi harum. Totam
        perferendis hic ad quae quod?
      </p>
      <p>
        Go back to <Link to="/register">Register</Link>
      </p>
    </div>
  );
};

export default Terms;
