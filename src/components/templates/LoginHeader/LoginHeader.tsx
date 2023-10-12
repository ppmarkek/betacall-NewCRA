import { Link, useLocation } from "react-router-dom";
import Dark from "../../../assets/Icon/Dark.svg";
import Button from "../../atoms/Button/Button";
import { Header, StyledLink } from "./style";

const LoginHeader = () => {
  const location = useLocation();

  return (
    <Header container>
      <Link to="/Login">
        <img src={Dark} alt="" />
      </Link>
      <StyledLink to={location.pathname === "/Login" ? "/Step1" : "/Login"}>
        <Button variant="FilledRestingLight" width="115px">
          {location.pathname === "/Login" ? "Sign Up" : "Sign In"}
        </Button>
      </StyledLink>
    </Header>
  );
};

export default LoginHeader;
