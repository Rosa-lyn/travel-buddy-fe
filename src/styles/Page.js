import styled from 'styled-components';
import {
  device
} from './@MediaRules';

export const Page = styled.div `
  margin: auto;
 
  text-align: center;

  @media ${device.laptop} { 
    max-width: 800px;
  }

  @media ${device.desktop} {
    max-width: 1400px;
  }
`;
export default Page