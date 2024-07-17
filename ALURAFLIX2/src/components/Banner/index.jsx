import React from "react";
import styled from "styled-components";
import BannerImageSrc from "../../assets/banner.png";
const BannerContainer = styled.div`
  background-image: url(${BannerImageSrc});
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 328px;
  margin: 0;
  border-radius: 20px;
  max-width: 100%;
  height: 100vh;
  background-size: cover;
`;

const Banner = () => {
  return (
    <BannerContainer>
    </BannerContainer>
  );
};

export default Banner;
