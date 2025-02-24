import styled from "styled-components";
import StaycationLogo from "./StaycationLogo";
import { useEffect, useState } from "react";
import axios from "axios";
import { UserType } from "../../type";

const Header = () => {
  const [user, setUser] = useState<UserType>();

  useEffect(() => {
    axios.get<UserType>("http://localhost:3000/users/1").then((response) => {
      setUser(response.data);
    });
  }, []);

  return (
    <StyledHeader>
      <StyledHidden />
      <StaycationLogo />
      {user ? <StyledUser>Welcome, {user.name}!</StyledUser> : <StyledHidden />}
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
  position: sticky;
  top: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  padding: 8px 24px;
  border-bottom: 2px solid #eeeeee;
  background: #ffffff;
`;

const StyledUser = styled.div`
  font-size: 14px;
  font-weight: bold;
`;

const StyledHidden = styled.div`
  display: hidden;
`;

export default Header;
