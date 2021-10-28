import React, { useState, useEffect } from "react";
import Axios from "axios";
import MyCard from "./MyCard";
import { Container, Row, Col } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

function App() {
  const [details, setDetails] = useState({});

  const fetchDetails = async () => {
    const { data } = await Axios.get("https://randomuser.me/api/");
    console.log(data);
    const details = data.results[0];

    setDetails(details);
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  return (
    <Container fluid className="p-4 bg-primary App">
      <Row>
        <Col md={4} className="offset-md-4">
          <MyCard details={details} />
          <h5 style={{color: "white", margin:"1rem 1rem  "}}>Hit Reload for Changing the values</h5>

        </Col>
      </Row>
    </Container>
  );
}

export default App;
