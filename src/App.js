import React, { useState, useEffect } from "react";
import Axios from "axios";
import MyCard from "./MyCard";
import { Container, Row, Col , Button} from "reactstrap";
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

  const refreshPage = () => {
    window.location.reload(false);
  }

  return (
    <Container fluid className="p-4 bg-primary App">
      <Row>
        <Col md={4} className="offset-md-4">
          <MyCard details={details} />
          <div className="info">
          <h5 style={{color: "white "}}>Hit Reload</h5>
          
         <Button className="btn btn-warning" onClick={refreshPage}>Reload</Button>
         </div>


        </Col>
      </Row>
    </Container>
  );
}

export default App;
