import Form from "react-bootstrap/Form";
import {Row, Col } from "react-bootstrap";
// import { Link } from "react-router-dom";
import "../assets/css/headers.css"

function Headers({ dark, toggle }: { dark: boolean; toggle: () => void }) {
  return (
    <div className="d-flex justify-content-center align-items-center header-container">
      <Row className="d-flex justify-content-between p-3 rounded glass-blur">
        <Col xs={6} className="d-flex justify-content-between">
          <a href="#Home" className="d-flex align-items-center navbar-brand">Home</a>
          <a href="#Projects" className="d-flex align-items-center navbar-brand">Projects</a>
          <a href="#Resume" className="d-flex align-items-center navbar-brand">Resume</a>
        </Col>

        <Col xs={6} className="d-flex justify-content-end">
          <Form className="d-flex align-items-center">
            <Form.Check
              className="theme-switch d-flex align-items-center"
              style={{columnGap:"2vw"}}
              type="switch"
              id="themeSwitch"
              checked={dark}
              onChange={() => toggle()}
              label={
                <>
                  {dark ? "Dark Mode" : "Light Mode"}
                </>
              }
            />
          </Form>
        </Col>
      </Row>
    </div>
  );
}
export default Headers;