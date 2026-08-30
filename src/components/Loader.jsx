
import React from "react";
import styled from "styled-components";

const Loader = () => {
  return (
    <Wrapper>
      <div className="loader" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* Full screen center */
  position: fixed;
  inset: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  /* Premium dark background */
  background: #0f0f0f;

  /* Keep loader above everything */
  z-index: 9999;

  .loader {
    width: 60px;
    aspect-ratio: 1;
    border-radius: 50%;

    /* Desert premium colors */
    background: repeating-conic-gradient(
      #d6a77a 0 90deg,
      #f5e1c8 0 180deg
    );

    /* Rotation */
    animation: spin 1s linear infinite;

    /* Subtle glow */
    box-shadow: 0 0 20px rgba(214, 167, 122, 0.4);
  }

  @keyframes spin {
    100% {
      transform: rotate(0.5turn);
    }
  }
`;

export default Loader;

