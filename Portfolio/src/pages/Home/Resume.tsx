import { useIntersectionObserver } from "@uidotdev/usehooks";
import { Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import parseGitHubCalendar from "github-calendar-parser"; // ✅ now safe
import styles from "../../assets/css/fade.module.css";
import stylesHome from "../../assets/css/Home/home.module.css";
import GithubLogo from "../../assets/images/GithubLogo.png";
import resumeImage from "../../assets/images/ResumeImage.png";
import FolderIcon from "../../assets/images/folderIcon.png";
import { Link } from "react-router-dom";

// 3. Define Activity type (optional if you trust the parser output)
type Activity = {
  date: string;
  count: number;
  color: string;
  intensity: number;
};

export default function Resume() {

  const [cachedContributions, setCachedContributions] = useState<Activity[] | null>(null);

  useEffect(() => {
    const CACHE_KEY = "github_contributions_NiushaEbrahimi";
    const CACHE_TTL = 24 * 60 * 60 * 1000; // 24 hours

    const loadCached = () => {
      const cached = localStorage.getItem(CACHE_KEY);
      if (cached) {
        const { data, timestamp } = JSON.parse(cached);
        if (Date.now() - timestamp < CACHE_TTL) {
          return data;
        }
      }
      return null;
    };

    const saveCache = (data: Activity[]) => {
      localStorage.setItem(
        CACHE_KEY,
        JSON.stringify({ data, timestamp: Date.now() })
      );
    };

    // Try to load from cache
    const cached = loadCached();
    if (cached) {
      setCachedContributions(cached);
      return;
    }

    // Fetch and parse from GitHub
    fetch("https://github.com/users/NiushaEbrahimi/contributions")
      .then((res) => res.text())
      .then((svgText) => {
        const contributions = parseGitHubCalendar(svgText); // returns Activity[]
        saveCache(contributions);
        setCachedContributions(contributions);
      })
      .catch((err) => {
        console.error("Failed to fetch GitHub calendar", err);
      });
  }, []);

  // Filter cached data (same as your selectLastHalfYear)
  const selectLastHalfYear = (contributions: Activity[]): Activity[] => {
    const now = new Date();
    const sixMonthsAgo = new Date();
    sixMonthsAgo.setMonth(now.getMonth() - 6);
    return contributions.filter((activity) => {
      const date = new Date(activity.date);
      return date >= sixMonthsAgo && date <= now;
    });
  };

  const displayedData = cachedContributions
    ? selectLastHalfYear(cachedContributions)
    : [];
  const [ref, entry] = useIntersectionObserver({
    threshold: 0,
    root: null,
    rootMargin: "0px",
  });


  useEffect(() => {
    const resume = document.querySelector("#resume");
    if (entry?.isIntersecting) {
      resume?.classList.add("active");
    } else {
      resume?.classList.remove("active");
    }
  }, [entry?.isIntersecting]);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/images/cv.png";
    link.download = "cv.png";
    link.click();
  };

    return(
  <div
    id="resume-page"
    ref={ref}
    className="d-flex justify-content-center align-items-center"
    style={{ padding: "0vh 6vw", minHeight: "100svh" }}
  >
    <div
      className="w-100 d-flex justify-content-center align-items-center gap-4 p-md-0"
      style={{ position: "relative" }}
    >
      {entry?.isIntersecting && (
        <div
         className="w-100 d-flex justify-content-center align-items-center flex-column p-md-0"
          style={{ gap: "2vh" }}
        >
          <h2 className={stylesHome.mainTitle}>Resume</h2>
          <p className="text-center">
            Check out my resume and github, getting to know more about me and my
            work.
          </p>

          <div className={stylesHome.resumeContainerMain}>
            <Row style={{ rowGap: "5vh" }}>
              <Col
                xs={12}
                md={6}
                className={stylesHome.resumeContainerParent}
                style={{ 
                  minHeight: "40vh",
                  position: "relative",
                 }}
              >
                  <div className={stylesHome.resumeContainer}>
                    <img
                      src={resumeImage}
                      alt="Resume"
                      // style={{
                      //   maxWidth: "18vw",
                      //   maxHeight: "40vh",
                      //   borderRadius: "1rem",
                      // }}
                    />

                    <button
                      className={stylesHome.downloadButton}
                      onClick={handleDownload}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" className="bi bi-download" viewBox="0 0 16 16">
                        <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/>
                        <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z"/>
                      </svg>
                    </button>
                  </div>
                  <img
                    src={FolderIcon}
                    className={stylesHome.folderContainer}
                    alt=""
                  />
                  <div 
                    className={stylesHome.folderOuterContainer}
                  ></div>
                  <div
                    className={stylesHome.folderOuterContainerWhite}
                    style={{ backgroundColor: "white" }}
                  ></div>
              </Col>

              {/* GitHub */}
              <Col
                xs={12}
                md={6}
                className={`text-center ${styles.fadeRight} d-flex flex-column justify-content-center align-items-center`}
              >
                <Link
                  to="https://github.com/NiushaEbrahimi"
                  style={{ textDecoration: "none" }}
                >
                  <div
                    className={styles.githubContribution}
                    style={{ position: "relative" }}
                  >
                    <div className={styles.githubDecor1}></div>
                    <div className={styles.githubDecor2}></div>
                    <div className={styles.githubDecor3}></div>
                    <div className={styles.githubDecor4}></div>
                    <div className={styles.githubDecor5}></div>
                    <div className={styles.githubDecor6}></div>
                    <div className={styles.githubDecor7}></div>

                    <div className={styles.githubLogo}>
                      <img src={GithubLogo} alt="Github Logo" />
                    </div>

                    <div
                      className={stylesHome.gitHubCalendar}
                    >
                      {cachedContributions ? (
                        <div className={stylesHome.gitHubCalendar}>
                          <p style={{ color: "black", margin: "1rem 0" }}>
                            {displayedData.reduce((sum, a) => sum + a.count, 0)} contributions in the last 6 months
                          </p>
                          {/* Optional: add a simple visual indicator or link to GitHub */}
                        </div>
                      ) : (
                        <div style={{ color: "black" }}>Loading GitHub activity...</div>
                      )}
                    </div>
                  </div>
                </Link>
              </Col>
            </Row>
          </div>
        </div>
      )}
    </div>
  </div>

    )
}
