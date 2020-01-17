import React from "react";
import { Link, Redirect } from "react-router-dom";
import { Button } from "semantic-ui-react";

const Linkbtn = ({ tag }) => {
  return (
    <Button as={Link} to={`/${tag}`}>
      {tag}
    </Button>
  );
};

export default Linkbtn;
