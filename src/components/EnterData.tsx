import React, { useState, useRef } from "react";
import styled from "styled-components";
import pix from "./codelab-logo.png";
import NavComp from "./NavComp";
// import html2canvas from "html2canvas";

const EnterData: React.FC = () => {
  const [image, setImage] = useState<string>(pix);
  const [name, setName] = useState<string>("");

  const displayPix = (e: any) => {
    const file = e.target.files[0];
    const save = URL.createObjectURL(file);
    setImage(save);
    console.log(save);
  };

  const printRef: any = React.useRef();

  const handleDownloadImage = async () => {
    const element = printRef.current;
    const canvas = await // html2canvas
    element;

    const data = canvas.toDataURL("image/jpg");
    const link = document.createElement("a");

    if (typeof link.download === "string") {
      link.href = data;
      link.download = "image.jpg";

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      window.open(data);
    }
  };

  return (
    <div>
      <Container ref={printRef}>
        <Wrapping>
          <NavComp image={image} name={name} />
          <Wrapper>
            <ImageInfo>
              <Image src={image} />
              <ImageLabel htmlFor="pix">Enter your Image</ImageLabel>
              <ImageInput
                id="pix"
                type="file"
                accept="image/jpg, image/png, image/jpeg"
                onChange={displayPix}
              />
            </ImageInfo>

            <Input
              placeholder="Enter your Name Please"
              value={name}
              onChange={(e: any) => {
                setName(e.target.value);
              }}
            />
            <br />
            <br />
            <br />
            <div color="white">
              Your Name is: <strong color="white"> {name}</strong>
            </div>
            <br />
            <br />
          </Wrapper>
        </Wrapping>
      </Container>{" "}
      {name !== "" && image !== pix ? (
        <button onClick={handleDownloadImage}>Next</button>
      ) : null}
    </div>
  );
};

export default EnterData;

const Input = styled.input`
  border: 1px solid #000269;
  height: 40px;
  padding-left: 10px;
  border-radius: 3px;
  outline: none;
  font-size: 18px;
  ::placeholder {
  }
`;

const ImageInput = styled.input`
  display: none;
`;

const ImageLabel = styled.label`
  background-color: #000269;
  color: white;
  padding: 15px 20px;
  border-radius: 5px;
  margin: 15px 0;
  transition: all 360ms;

  :hover {
    transform: scale(0.98);
    cursor: pointer;
  }
`;

const Image = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 2px solid #000269;
  object-position: center;
`;

const ImageInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 400px;
  background-color: white;
  justify-content: center;
  border-radius: 10px;
  align-items: center;
`;
const Wrapping = styled.div`
  width: 90%;
  height: 80%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
`;
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: black;
  /* flex-direction: column; */
  justify-content: center;
  @media (max-width: 320px) {
    height: 130vh;
  }
  @media (max-width: 400px) {
    height: 130vh;
  }
  @media (max-width: 425px) {
    height: 130vh;
  }
`;
