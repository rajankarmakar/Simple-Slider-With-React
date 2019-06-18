import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import image1 from "./images/slider1.jpg";
import image2 from "./images/slider2.gif";
import image3 from "./images/slider3.jpg";
import s1 from "./images/s1.jpg";
import s2 from "./images/s2.jpg";
import s3 from "./images/s3.jpg";

class App extends React.Component {
  state = {
    imgs: [image1, image2, image3, s1, s2, s3],
    idx: 0
  };

  componentDidMount() {
    this.slider = setInterval(() => {
      this.setState({
        idx:
          this.state.idx === this.state.imgs.length - 1 ? 0 : this.state.idx + 1
      });
    }, 3000);
  }

  componentWillUnmount() {
    if (this.state.idx === this.state.imgs.length.length - 1) {
      console.log(this.state.idx);
      clearInterval(this.slider);
    }

    console.log(this.state.idx);
  }

  prevImage = () => {
    this.setState({
      idx: this.state.idx - 1
    });
    if (this.state.idx === 0) {
      this.setState({
        idx: 0
      });
    }
  };

  nextImage = () => {
    this.setState({
      idx: this.state.idx + 1
    });
    if (this.state.idx === this.state.imgs.length - 1) {
      this.setState({
        idx: this.state.imgs.length - 1
      });
    }
  };
  handleClickOnImage = index => {
    this.setState({
      idx: index
    });
  };

  render() {
    return (
      <Container className="p-3 badge-dark">
        <Row>
          <Col md="12" className="text-center">
            <h1 className="text-primary m-3"> Simple Slider With React </h1>
            <hr className="bg-primary m-3" />
            {this.state.idx >= 0 && (
              <button
                className={this.getPrevButtonColor()}
                onClick={this.prevImage}
              >
                ◀ Prev
              </button>
            )}
            <img
              className="m-auto"
              src={this.state.imgs[this.state.idx]}
              alt="flower"
            />
            {this.state.idx >= 0 && (
              <button
                className={this.getNextButtonColor()}
                onClick={this.nextImage}
              >
                Next ▶
              </button>
            )}
          </Col>
        </Row>

        <Row className="m-3">
          {this.state.imgs.map((img, index) => {
            return (
              <div
                key={index}
                className={
                  this.state.idx === index
                    ? "m-auto p-3 activeBorderColor"
                    : "m-auto p-3 borderColor"
                }
              >
                <img
                  className={
                    this.state.idx === index
                      ? "m-auto profileImage activeOpacity"
                      : "m-auto profileImage imageFocus"
                  }
                  key={index}
                  onClick={this.handleClickOnImage.bind(this, index)}
                  src={img}
                  alt="flower"
                />
              </div>
            );
          })}
        </Row>
      </Container>
    );
  }

  getPrevButtonColor() {
    let buttonClasss = "btn m-3 btn-";
    if (this.state.idx === 0) {
      buttonClasss += "secondary";
    } else {
      buttonClasss += "primary";
    }
    return buttonClasss;
  }

  getNextButtonColor() {
    let buttonClasss = "btn m-3 btn-";
    if (this.state.idx === this.state.imgs.length - 1) {
      buttonClasss += "secondary";
    } else {
      buttonClasss += "primary";
    }
    return buttonClasss;
  }
}

export default App;
