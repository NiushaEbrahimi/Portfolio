import Form from "react-bootstrap/Form";
import { Row, Col } from "react-bootstrap";
import "../assets/css/headers.css";
import { useEffect, useState } from "react";

function Headers({ dark, toggle }: { dark: boolean; toggle: () => void }) {
  const [menuItems, setMenuItems] = useState([]);
  const currentColor = dark ? "white" : "black"
  const numberSVG = 21
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/menu');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
        setMenuItems(data);
      } catch (error) {
        console.log(error);
      }
    };
    
    fetchData();
  }, []);

  return (
    <div className="d-flex justify-content-center align-items-center header-container">
      <Row className="d-flex justify-content-between p-3 glass-blur">
        <Col xs={6} className="d-flex justify-content-between">
          {menuItems.map((item) => (
            <div className="d-flex position-relative navbar-brand" >
              <a
                key={item.title}
                id={item.title}
                href={`#${item.title}-page`}
                className=" d-flex align-items-center"
                style={{width : "100%"}}
                dangerouslySetInnerHTML={{ __html: item.svg_icon }}
                ref={(el) => {
                  if (el) {
                    const svg = el.querySelector("svg");
                    if (svg) {
                      svg.setAttribute("fill", currentColor);
                      svg.setAttribute("width", numberSVG);
                      svg.setAttribute("height", numberSVG);
                    }
                  }
                }}
              />
              <span className={`subTitle subTitle-${item.title}`}>{item.title}</span>
            </div>
          ))}
        </Col>

        <Col xs={6} className="d-flex justify-content-end">
          <Form className="d-flex align-items-center">
            <Form.Check
              className="theme-switch d-flex align-items-center"
              style={{ columnGap: "2vw" }}
              type="switch"
              id="themeSwitch"
              checked={dark}
              onChange={toggle}
              label={dark ? "Dark Mode" : "Light Mode"}
            />
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default Headers;
