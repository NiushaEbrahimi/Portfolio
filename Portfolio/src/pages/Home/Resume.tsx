import { useIntersectionObserver } from "@uidotdev/usehooks";
import { Container, Row } from "react-bootstrap";
import { useEffect } from "react";
import { GitHubCalendar, type Activity } from "react-github-calendar";
import styles from "../../assets/css/fade.module.css";
import stylesHome from "../../assets/css/Home/home.module.css";
import GithubLogo from "../../../public/images/GithubLogo.png";
import resumeImage from "../../../public/images/ResumeImage.png";
import FolderIcon from "../../assets/images/folderIcon.png";

export default function Resume() {
  const [ref, entry] = useIntersectionObserver({
    threshold: 0,
    root: null,
    rootMargin: "0px",
  });

  const selectLastHalfYear = (contributions: Activity[]): Activity[] => {
    const now = new Date();
    const sixMonthsAgo = new Date();
    sixMonthsAgo.setMonth(now.getMonth() - 6);

    return contributions.filter((activity) => {
      const date = new Date(activity.date);
      return date >= sixMonthsAgo && date <= now;
    });
  };

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
    link.href = "/images/ResumeImage.pdf";
    link.download = "resume-niusha-ebrahimi.pdf";
    link.click();
  };

  return (
    <Container
      ref={ref}
      className="w-100 vh-100 d-flex justify-content-center align-items-center"
      style={{ padding: "0 7vw" }}
    >
      <Container
        id="resume-page"
        className="d-flex justify-content-center align-items-center gap-4"
        style={{ position: "relative" }}
      >
        {entry?.isIntersecting && (
          <>
            <Container className={styles.fadeLeft} style={{ flex: 1 }}>
              <div
                className={`d-flex justify-content-center align-items-center ${stylesHome.resumeContainerParent}`}
              >
                <div className={stylesHome.resumeContainer}>
                  <img
                    src={resumeImage}
                    alt="Resume"
                    style={{
                      maxWidth: "15vw",
                      maxHeight: "40vh",
                      borderRadius: "1rem",
                    }}
                  />
                  <button
                    className={stylesHome.downloadButton}
                    onClick={handleDownload}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
                      <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z" />
                    </svg>
                  </button>
                </div>

                <img className={stylesHome.folderContainer} src={FolderIcon} />
                <div className={stylesHome.folderOuterContainer} />
                <div
                  className={stylesHome.folderOuterContainerWhite}
                  style={{ backgroundColor: "white" }}
                />
            </div>
            </Container>

            <Container
              className={`text-center ${styles.fadeRight} d-flex flex-column justify-content-center align-items-center`}
              style={{ flex: 1, gap: "10vh" }}
            >
              <Row>
                <h2>Resume</h2>
                <p>
                  Check out my resume and GitHub, getting to know more about me
                  and my work.
                </p>
              </Row>

              <div className={styles.githubContribution}>
                <div className={styles.githubDecor1} />
                <div className={styles.githubDecor2} />
                <div className={styles.githubDecor3} />
                <div className={styles.githubDecor4} />
                <div className={styles.githubDecor5} />
                <div className={styles.githubDecor6} />
                <div className={styles.githubDecor7} />

                <div className={styles.githubLogo}>
                  <img src={GithubLogo} alt="GitHub" />
                </div>

                <div
                  style={{
                    overflowX: "hidden",
                    maxWidth: "30vw",
                    backgroundColor: "white",
                    borderRadius: "0.7rem",
                    padding: "1rem",
                  }}
                >
                  <GitHubCalendar
                    username="NiushaEbrahimi"
                    transformData={selectLastHalfYear}
                    labels={{
                      totalCount:
                        "{{count}} contributions in the last half year",
                    }}
                  />
                </div>
              </div>
            </Container>
          </>
        )}
      </Container>
    </Container>
  );
}
