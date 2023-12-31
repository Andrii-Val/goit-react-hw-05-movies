import styled from 'styled-components';

export const Preloader = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #d3d6e6;
  opacity: 70%;
`;

export const SpinerStyle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
