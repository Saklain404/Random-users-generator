/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Card, CardBody, CardTitle, CardText, Button } from "reactstrap";
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from "react-icons/fa";

const MyCard = ({ details }) => {
  return (
    <Card>
      <CardBody className="text-center">
        <img
          width="150"
          height="150"
          className="rounded-circle img-thumbnail border-danger"
          src={details.picture?.large}
        />
        <CardTitle>
          <h1>
            <span className="text-primary">
              <span> {details.name?.title} </span>
              {details.name?.first}
              {details.name?.last}
            </span>
          </h1>
        </CardTitle>
        <CardText>
          <span>
            {" "}
            <FaMapMarkedAlt /> {details.location?.city}{" "}
          </span>{" "}
          <br />
          <span>
            {" "}
            <FaPhone /> {details.phone}{" "}
          </span>{" "}
          <br />
          <span>
            {" "}
            <FaEnvelope /> {details.email}{" "}
          </span>{" "}
          <br />
          
        </CardText>
        <p className="font-weight-bold">DOB: {details.dob?.date}</p>

          <Button color="secondary">Age: {details.dob?.age}</Button>
      </CardBody>
    </Card>
  );
};

export default MyCard;
