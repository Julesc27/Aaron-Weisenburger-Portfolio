import ExperienceCard from "./ExperienceCard.jsx";
import { experienceDetail } from "../data/experienceDetail.js";

export default function ExperiencePage() {
  return (
    <main className="experience-page">
      <div className="experience-page-glow" aria-hidden="true">
        <img src="/glow-ellipse-6.svg" alt="" />
      </div>
      <div className="experience-page-inner">
        <h1 className="section-heading section-heading--light experience-page-heading">
          Experience:
        </h1>
        <ol className="exp-timeline">
          {experienceDetail.map((item) => (
            <li className="exp-row" key={item.id}>
              <div className="exp-col exp-col--left">
                {item.side === "left" && (
                  <ExperienceCard
                    title={item.title}
                    date={item.date}
                    description={item.description}
                    tags={item.tags}
                    mirror
                  />
                )}
              </div>
              <div className="exp-marker" aria-hidden="true">
                <span
                  className={`exp-diamond exp-diamond--${item.side}`}
                ></span>
              </div>
              <div className="exp-col exp-col--right">
                {item.side === "right" && (
                  <ExperienceCard
                    title={item.title}
                    date={item.date}
                    description={item.description}
                    tags={item.tags}
                  />
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </main>
  );
}
