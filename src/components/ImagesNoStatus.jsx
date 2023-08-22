import React, {Component} from "react";
import Typography from "@material-ui/core/Typography";

class ImagesNoStatus extends Component {

  render() {
    return (
      <Typography variant="h6" component="h6">
        {this.props.numberofimages} Images
      </Typography>
    );
  }
}

export default ImagesNoStatus;
