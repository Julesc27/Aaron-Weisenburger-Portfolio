// Rich case-study content for individual project detail pages. Keyed by
// project id (matching the ids in projects.js). Only projects with a
// finished detail design in Figma have an entry here — others fall back
// to the simple "coming soon" placeholder in ProjectDetail.jsx.
export const projectDetails = {
  "l2-rocket-mk2": {
    eyebrow: "FEATURED PROJECT",
    heroTitle: "Level 2 High Powered Rocket MK2:",
    heroParagraphs: [
      "",
    ],
    badges: ["Rensselaer Rocket Society", "Aerospace"],
    heroImage: { src: "/l2-rocket-mk2.jpg", alt: "The finished MK2 rocket standing upright" },
    materialsHeading: "Materials and construction:",
    materialsGroups: [
      {
        title: "Airframe construction",
        rows: [
          { label: "Body tubes", value: "Fiberglass roll-wrapped" },
          { label: "Composite layup", value: "6 oz fiberglass cloth" },
          { label: "Wall thickness", value: "2.54 mm" },
          { label: "Motor tube", value: "54-mm cardboard" },
          { label: "Bonding system", value: "West Systems" },
        ],
      },
      {
        title: "Structural Components",
        rows: [
          { label: "Fins", value: "1/8-inch G10 fiberglass" },
          { label: "Fin design", value: "Through-the-wall" },
          { label: "Reinforcement", value: "Carbon-fiber tip-to-tip" },
          { label: "Nose cone", value: "3 inch 5:1 ogive fiberglass nosecone" },
        ],
      },
    ],
  },
  "l2-rocket-mk1": {
    eyebrow: "FEATURED PROJECT",
    heroTitle: "Level 2 High Powered Rocket MK1:",
    heroParagraphs: [
      "",
    ],
    badges: ["Rensselaer Rocket Society", "Aerospace"],
    heroImage: { src: "/mk1-midair.jpg", alt: "The finished MK2 rocket standing upright" },
    materialsHeading: "Materials and construction:",
    materialsGroups: [
      {
        title: "Airframe construction",
        rows: [
          { label: "Body tubes", value: "3 inch x 32 CNC-slotted airframe" },
          { label: "Motor tube", value: "54 mm fiberglass MM" },
          { label: "Bonding system", value: "Raka Inc." },
        ],
      },
      {
        title: "Structural Components",
        rows: [
          { label: "Fins", value: "1/8 inch G10 fins" },
          { label: "Fin design", value: "Through-the-wall" },
          { label: "Nose cone", value: "3 inch 5:1 ogive fiberglass nosecone"},
          
        ],
      },
    ],
    resultsHeading: "Results",
    skillsLine: "Skills: Open Rocket, Laser Cutting, Safety",
    resultsImages: [
      { src: "/aaron-with-mk1.jpeg", alt: "Aaron holding the finished MK1 rocket" },
    ],
    resultsParagraphs: [
      "Apogee: 1373 meters. Max. Speed: 125 m/s.",
      "Champlain Region Model Rocket Club: 2/25/26 Conducted ground tests to verify that the amount of black powder was still correct due to temperature change. Drilled another vent hole in the fuselage. Verified center of pressure and center of gravity were at least one length of the diameter of the rocket away from each other. Launch unsuccessful; altimeter malfunctioned due to cold.",
      "Champlain Region Model Rocket Club.: 4/25/26. Launch unsuccessful, shock cord connecting body tube and av bay zippered. Recovered nose cone and av bay.",
    ],
  },
  "irec-rocket-2026": {
    eyebrow: "FEATURED PROJECT",
    heroTitle: "Rensselaer Rocket Society IREC Rocket (2026)",
    heroParagraphs: [
      "",
    ],
    badges: ["Rensselaer Rocket Society", "Aerospace"],
    heroImage: { src: "/", alt: "The finished MK2 rocket standing upright" },
    materialsHeading: "Materials and construction:",
    materialsGroups: [
      {
        title: "Airframe construction",
        rows: [
          { label: "Body tubes", value: "3 inch x 32 CNC-slotted airframe" },
          { label: "Motor tube", value: "54 mm fiberglass MM" },
          { label: "Bonding system", value: "Raka Inc." },
        ],
      },
      {
        title: "Structural Components",
        rows: [
          { label: "Fins", value: "1/8 inch G10 fins" },
          { label: "Fin design", value: "Through-the-wall" },
          { label: "Nose cone", value: "3 inch 5:1 ogive fiberglass nosecone"},
          
        ],
      },
    ],
    resultsHeading: "Results",
    skillsLine: "Skills: Open Rocket, Laser Cutting, Safety",
    // No real photos yet — each entry renders as an actual <img>, just
    // pointed at a placeholder graphic for now. Once real photos exist,
    // drop the files in /public and swap the `src` (and `alt`) here.
    resultsImages: [
      { src: "/", alt: "Photo of the finished rocket (coming soon)" },
      { src: "/results-placeholder.svg", alt: "Photo of the finished rocket (coming soon)" },
    ],
    resultsParagraphs: [
      "The rocket was built from September to November of 2025 under the guidance of senior members of Rensselaer Rocket Society.",
      "Learned the basics of rocket design using Open Rocket and building techniques such as creating good fin fillets.",
      "Laid the foundation for my future projects. The rocket achieved a max height of 569 meters.",
    ],
  },
  "irec-rocket-2027": {
    eyebrow: "FEATURED PROJECT",
    heroTitle: "Rensselaer Rocket Society IREC Rocket (2027)",
    heroParagraphs: [
      "",
    ],
    badges: ["Rensselaer Rocket Society", "Aerospace"],
    heroImage: { src: "/", alt: "The finished MK2 rocket standing upright" },
    materialsHeading: "Materials and construction:",
    materialsGroups: [
      {
        title: "Airframe construction",
        rows: [
          { label: "Body tubes", value: "3 inch x 32 CNC-slotted airframe" },
          { label: "Motor tube", value: "54 mm fiberglass MM" },
          { label: "Bonding system", value: "Raka Inc." },
        ],
      },
      {
        title: "Structural Components",
        rows: [
          { label: "Fins", value: "1/8 inch G10 fins" },
          { label: "Fin design", value: "Through-the-wall" },
          { label: "Nose cone", value: "3 inch 5:1 ogive fiberglass nosecone"},
          
        ],
      },
    ],
    resultsHeading: "Results",
    skillsLine: "Skills: Open Rocket, Laser Cutting, Safety",
    // No real photos yet — each entry renders as an actual <img>, just
    // pointed at a placeholder graphic for now. Once real photos exist,
    // drop the files in /public and swap the `src` (and `alt`) here.
    resultsImages: [
      { src: "/", alt: "Photo of the finished rocket (coming soon)" },
      { src: "/results-placeholder.svg", alt: "Photo of the finished rocket (coming soon)" },
    ],
    resultsParagraphs: [
      "The rocket was built from September to November of 2025 under the guidance of senior members of Rensselaer Rocket Society.",
      "Learned the basics of rocket design using Open Rocket and building techniques such as creating good fin fillets.",
      "Laid the foundation for my future projects. The rocket achieved a max height of 569 meters.",
    ],
  },
};
