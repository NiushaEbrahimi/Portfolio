import Form from "react-bootstrap/Form";
import { Row, Col } from "react-bootstrap";
import "../assets/css/headers.css";
import { useEffect, useState } from "react";

interface menuItem {
  id: number;
  title : string;
  svg_icon : string;
}

const FALLBACK_MENU: menuItem[] = [
  {
    "id": 1,
    "title": "home",
    "svg_icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill={`${currentColor}`} className=\"bi bi-house\" viewBox=\"0 0 16 16\">\r\n  <path d=\"M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z\"/>\r\n</svg>"
      
  },
    {
        "id": 2,
        "title": "about",
        "svg_icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\"  fill={`${currentColor}`} className=\"bi bi-person-raised-hand\" viewBox=\"0 0 16 16\">\r\n  <path d=\"M6 6.207v9.043a.75.75 0 0 0 1.5 0V10.5a.5.5 0 0 1 1 0v4.75a.75.75 0 0 0 1.5 0v-8.5a.25.25 0 1 1 .5 0v2.5a.75.75 0 0 0 1.5 0V6.5a3 3 0 0 0-3-3H6.236a1 1 0 0 1-.447-.106l-.33-.165A.83.83 0 0 1 5 2.488V.75a.75.75 0 0 0-1.5 0v2.083c0 .715.404 1.37 1.044 1.689L5.5 5c.32.32.5.754.5 1.207\"/>\r\n  <path d=\"M8 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3\"/>\r\n</svg>",
    },
    {
        "id": 3,
        "title": "projects",
        "svg_icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill={`${currentColor}`} className=\"bi bi-archive\" viewBox=\"0 0 16 16\">\r\n  <path d=\"M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 12.5V5a1 1 0 0 1-1-1zm2 3v7.5A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5V5zm13-3H1v2h14zM5 7.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5\"/>\r\n</svg>",
    },
    {
        "id": 4,
        "title": "tools",
        "svg_icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-pen\" viewBox=\"0 0 16 16\">\r\n  <path d=\"m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001m-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708z\"/>\r\n</svg>",
    },
    {
        "id": 5,
        "title": "resume",
        "svg_icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-file-earmark\" viewBox=\"0 0 16 16\">\r\n  <path d=\"M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5z\"/>\r\n</svg>",
    }
];


function Headers({ dark, toggle }: { dark: boolean; toggle: () => void }) {
  const [menuItems, setMenuItems] = useState<menuItem[]>(FALLBACK_MENU);
  const currentColor :string= dark ? "white" : "black"
  const numberSVG : number = 21

  useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch("http://127.0.0.1:8000/api/menu");
          if (!response.ok) throw new Error("Backend failed");

          const data: menuItem[] = await response.json();

          if (Array.isArray(data) && data.length > 0) {
            setMenuItems(data);
          } else {
            setMenuItems(FALLBACK_MENU);
          }
        } catch (error) {
          console.error("Using frontend menu fallback", error);
          setMenuItems(FALLBACK_MENU);
        }
      };

      fetchData();
    }, []);

    function scrollToSection(id: string, retries = 10) {
      const el = document.getElementById(id);

      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }

      if (retries > 0) {
        requestAnimationFrame(() => scrollToSection(id, retries - 1));
      }
    }


  return (
    <div className="d-flex justify-content-center align-items-center header-container">
      <Row className="d-flex justify-content-center justify-content-sm-between p-3 glass-blur" style={{backgroundColor : `${dark ? "" : "var(--color-4)"}`}}>
        <Col xs={9} md={6} lg={6} className="d-flex justify-content-between">
          {menuItems.map((item:menuItem) => (
            <div className="d-flex position-relative navbar-brand" >
              <a
                key={item.title}
                id={item.title}
                onClick={()=>scrollToSection(`${item.title}-page`)}
                className=" d-flex align-items-center"
                style={{width : "100%"}}
                dangerouslySetInnerHTML={{ __html: item.svg_icon }}
                ref={(el) => {
                  if (el) {
                    const svg = el.querySelector("svg");
                    if (svg) {
                      svg.setAttribute("fill", currentColor);
                      svg.setAttribute("width", `${numberSVG}`);
                      svg.setAttribute("height", `${numberSVG}`);
                    }
                  }
                }}
              />
              <span className={`subTitle subTitle-${item.title}`}>{item.title}</span>
            </div>
          ))}
        </Col>

        <Col xs={3} md={6} lg={6} className="d-flex justify-content-end">
          <Form className="d-flex align-items-center">
            <Form.Check
              className="theme-switch d-flex align-items-center"
              style={{ columnGap: "2vw" }}
              type="switch"
              id="themeSwitch"
              checked={dark}
              onChange={toggle}
              label={
                <span className="d-none d-sm-inline">
                  {dark ? "Dark Mode" : "Light Mode"}
                </span>
              }
            />
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default Headers;
