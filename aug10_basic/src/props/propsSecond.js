import React from "react";
import PropTypes from 'prop-types'
//rafcp
const PropsSecond = (props) => {
  return(
    <div>
        <h1>{props.name}</h1>
        <h1>{props.maker}</h1>
        <h1>{props.price}</h1>
    </div>
  ) 

};

PropsSecond.propTypes = {
  name: PropTypes.string.isRequired,
  maker: PropTypes.string,
  price: PropTypes.number,
};

export default PropsSecond;
