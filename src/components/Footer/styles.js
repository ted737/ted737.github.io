import styled from "styled-components";
import { Container, Grid, GridColumn } from "semantic-ui-react";
import column1 from "./Footer";
import { NavLink } from "react-router-dom";
export const StyledLink = styled.a`
  &&& {
    font-family: Avenir;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;

    /* identical to box height */

    text-decoration-line: none;

    /* Red */

    color: #e62b1e;
    line-height: 35px;
  }
`;

export const StyledHeading = styled.h1`
  &&& {
    font-family: Futura;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 21px;

    color: #ffffff;
  }
`;

export const StyledDescription = styled.h1`
  &&& {
    font-family: Avenir;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;

    /* Light Grey */

    color: #afafaf;
  }
`;

export const StyledSubtleLink = styled(NavLink)`
  &&& {
    text-decoration: none;
    font-family: Avenir;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    /* identical to box height */

    /* Light Grey */

    color: #afafaf;
    margin-bottom: 25px;
    padding-top: 10px;
    line-height: 35px;
  }
`;

export const StyledSubtleLink2 = styled.a`
  &&& {
    text-decoration: none;
    font-family: Avenir;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    /* identical to box height */

    /* Light Grey */

    color: #afafaf;
    line-height: 35px;
  }
`;

export const StyledFooterContainer = styled(Container)`
  &&& {
    margin-left: auto;
    margin-right: auto;
    width: 1040px;
    height: 384px;
    background: black;

    @media (max-width: 1100px) {
      justify-items: center;
      width: 90%;
      padding: 1rem;
      margin-left: 1rem;
      margin-right: 1rem;
    }
    @media (max-width: 500px) {
      width: 80%;
    }
  }
`;

export const StyledHr = styled.hr`
  &&& {
    transform: translateX(-15px);
    margin-bottom: 32px;
    width: 1040px;
    height: 0px;
    border: 1.59223px solid #3c3c3c;
    background-color: #3c3c3c;
    @media (max-width: 1040px) {
      width: calc(100% + 20px);
    }
  }
`;

export const StyledConnectContainer = styled.div`
  &&& {
    width: 490px;
    @media (max-width: 490px) {
      width: 100%;
    }
  }
`;
