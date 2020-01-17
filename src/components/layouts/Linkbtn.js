import React from "react";
import { Link, withRouter, Redirect } from "react-router-dom";
import { Button, Icon } from "semantic-ui-react";

const Linkbtn = ({ tag, icon }) => {
  return (
    <div>
      <Button animated="fade" as={Link} to={`/${tag}`}>
        <Button.Content visible>{tag}</Button.Content>
        <Button.Content hidden>
          <Icon name={icon} />
        </Button.Content>
      </Button>
    </div>
  );
};

export default Linkbtn;
