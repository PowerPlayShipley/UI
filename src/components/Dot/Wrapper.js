import styled from "styled-components";
import PropTypes from "prop-types";

const Wrapper = styled.span`
  height: ${({size}) => size};
  width: ${({size}) => size};
  
  background-color: ${({color}) => color};
  
  border-radius: 50%;
  display: inline-block;
`

Wrapper.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string
}

export default Wrapper
