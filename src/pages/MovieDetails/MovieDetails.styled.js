import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Btn = styled.button`
  height:30px;
  background-color: transparent;
  margin: 20px 0 0 35px;
  padding: 5px;
  font-weight: 700;
  font-size:16px;
  cursor: pointer;
 
`;

export const MovieContainer = styled.div`
  display: flex;
  padding: 50px;
  background-color:rgb(200, 200, 255);
  margin: 20px 30px 30px;
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
`;

export const Img = styled.img`
  width: 360px;
`;

export const MovieInfo = styled.div`
  padding-left: 30px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const MovieTitle = styled.h2`
  margin-left: 0;
`;

export const AddInfo = styled.h3`
  margin-left: 35px;
  margin-bottom: 0;
`;

export const InfoList = styled.ul`
  text-decoration: none;
  margin-left: 0;
  margin-top: 0;
`;

export const InfoLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  text-decoration: none;
  font-weight: 700;
  &.active {
    color: #3f51b5;
    font-weight: 700;
    transform: scale(1.1);
`;