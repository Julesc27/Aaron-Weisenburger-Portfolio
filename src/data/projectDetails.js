// Rich case-study content for individual project detail pages. Keyed by
// project id (matching the ids in projects.js). Only projects with a
// finished detail design in Figma have an entry here — others fall back
// to the simple "coming soon" placeholder in ProjectDetail.jsx.
export const projectDetails = {
  "l1-rocket": {
    eyebrow: "FEATURED PROJECT",
    heroTitle: "Level 1 High-Powered Rocket:",
    heroParagraphs: [
      "Built, launched, and recovered a high-powered model rocket with an H-class motor(Impulse range: 226 Newton-seconds), demonstrating understanding of structural design, propulsion, and safety.",
    ],
    badges: ["Rensselaer Rocket Society", "Aerospace"],
    materialsHeading: "Materials and construction:",
    materialsGroups: [
      {
        title: "Airframe construction",
        rows: [
          { label: "Body tubes", value: "Fiberglass roll-wrapped" },
          { label: "Composite layup", value: "6 oz fiberglass + sleeve" },
          { label: "Wall thickness", value: "2.4 mm" },
          { label: "Motor tube", value: "4-inch aluminum casing" },
          { label: "Bonding system", value: "Aeropoxy" },
        ],
      },
      {
        title: "Structural Components",
        rows: [
          { label: "Fins", value: "1/4-inch G12 fiberglass" },
          { label: "Fin design", value: "Through-the-wall" },
          { label: "Reinforcement", value: "Carbon-fiber tip-to-tip" },
          { label: "Nose cone", value: "Fiberglass sleeve" },
          { label: "Mandrel", value: "3D-printed form" },
        ],
      },
    ],
    resultsHeading: "Results",
    skillsLine: "Skills: Open Rocket, Laser Cutting, Safety",
    resultsImageCount: 2,
    resultsParagraphs: [
      "The rocket was built from September to November of 2025 under the guidance of senior members of Rensselaer Rocket Society.",
      "Learned the basics of rocket design using Open Rocket and building techniques such as creating good fin fillets.",
      "Laid the foundation for my future projects. The rocket achieved a max height of 569 meters.",
    ],
  },
};
