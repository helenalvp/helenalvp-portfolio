import React from "react";
import Carousel, { Dots } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

class MyCarousel extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 0,
      slides: [
        <img src={this.props.images[0]} alt="image1" />,
        <img src={this.props.images[1]} alt="image1" />,
        <img src={this.props.images[2]} alt="image1" />,
      ],
    };
    this.onchange = this.onchange.bind(this);
  }

  onchange(value) {
    this.setState({ value });
  }

  render() {
    return (
      <div>
        <Carousel
          value={this.state.value}
          slides={this.state.slides}
          onChange={this.onchange}
        />
        <Dots
          value={this.state.value}
          onChange={this.onchange}
          number={this.state.slides.length}
        />
      </div>
    );
  }
}

export default MyCarousel;
