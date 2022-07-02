import React, { Component } from "react";

class Like extends Component {
  //   state = {
  //     Liked: false,
  //     className: "bi bi-balloon-heart-fill",
  //   };

  //   handellLikeToggle = (Liked) => {
  //     const negativeLiked = !Liked;
  //     this.setState({
  //       Liked: negativeLiked,
  //     });

  // if (like) {
  //   return (className = "bi bi-balloon-heart-fill");
  // } else {
  //   return (className = "bi bi-balloon-heart");
  // }
  //   };
  render() {
    let classes = "bi bi-balloon-heart";
    if (this.props.liked) classes += "-fill";
    
    return (
      <i
        onClick={this.props.onClick}
        // onClick={() => this.handellLikeToggle(this.state.Liked)}
        className={classes}
      ></i>
    );
  }
}

export default Like;
