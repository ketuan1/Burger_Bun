import SiderBar from "./SiderBar";
import "./Admin.css";
import { Container } from "@mui/material";

function Test() {
  return (
    <>
      <SiderBar />
      <Container>
        {/* <div className="container"> */}
        <h3 className="">Delight your Best. </h3>
        <h2 className="mb-4">Burger Run</h2>
        <p>
          We are dedicated to the safety of our guests and employees and have
          updated our safety measures. Lorem ipsum dolor sit amet elit.
          Provident. fugit odit? Fugit ipsam. Sed ac ex. Nam mauris velit, ac
          cursus quis, leo.
        </p>
        {/* </div> */}
      </Container>
    </>
  );
}

export default Test;
