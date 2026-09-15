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
    heroImage: { src: "/irec-2026-team.jpeg", alt: "Team presenting IREC 2026" },
    materialsHeading: "Materials and construction:",
    materialsGroups: [
      {
        title: "Airframe construction",
        rows: [
          { label: "Body tubes", value: "156.2mm fiberglass airframes" },
          { label: "Motor tube", value: "102 mm fiberglass MM" },
          { label: "Bonding system", value: "Aeropoxy" },
        ],
      },
      {
        title: "Structural Components",
        rows: [
          { label: "Fins", value: "1/4 inch G12 fins" },
          { label: "Fin design", value: "Through-the-wall" },
          { label: "Nose cone", value: "Haack series fabricated with fiberglass sleeves"},
          
        ],
      },
    ],
    resultsHeading: "Results",
    skillsLine: "Skills: Open Rocket, Composities, CAD/CAM, Safety",
    // No real photos yet — each entry renders as an actual <img>, just
    // pointed at a placeholder graphic for now. Once real photos exist,
    // drop the files in /public and swap the `src` (and `alt`) here.
    resultsImages: [
      { src: "/irec-2026.jpeg", alt: "Photo of the finished rocket (coming soon)" },
    ],
    resultsParagraphs: [
      "4th in SRAD 10K category. 24th out of 143 overall teams in IREC. Apogee: 9,863ft.",
      "Demonstrates my growth in the structures subsystem in RRS as I helped launch a complex,multidisciplinary vehicle. Through the combination of propulsion development, payload experimentation,avionics redundancy, recovery planning, and rigorous structural testing, we developed a vehicle intended not only to reach the target altitude, but also to produce meaningful technical data and lasting institutional knowledge for future competition seasons.",
    ],
  },
  "glove-box-holder": {
    eyebrow: "FEATURED PROJECT",
    heroTitle: "Glove Box Holder",
    heroParagraphs: [
      "",
    ],
    badges: ["The Forge", "CAD"],
    heroImage: { src: "/glove-box-picture.png", alt: "The finished 3D-printed glove box holder" },
    resultsHeading: "Results",
    skillsLine: "Skills: CAD, FDM Printing, Safety",
    resultsImages: [
      {
        src: "/glove-box-drawing.png",
        alt: "CAD drawing of the glove box holder",
        className: "detail-results-image--drawing",
      },
    ],
    resultsParagraphs: [
      "The completed holder was fabricated, installed, and put into use at the Form 4 workstation. It successfully holds the glove box vertically against the pegboard while keeping gloves immediately accessible to students working with the resin printer.",
      "The project turned previously unused vertical space into dedicated PPE storage and created a more organized workstation without requiring permanent modifications to the makerspace. Because the holder interfaces with the existing pegboard system, it can also be removed or repositioned as the workspace changes.",
    ],
  },
  "ammo-box": {
    eyebrow: "FEATURED PROJECT",
    heroTitle: "Over Engineered Ammo Box",
    heroParagraphs: [
      "",
    ],
    badges: ["The Forge", "CAD"],
    heroImage: { src: "/finished-box.jpeg", alt: "The finished custom ammo box" },
    resultsHeading: "Results",
    skillsLine: "Skills: CAD, Problem Solving, FDM Printing",
    // Shown as a carousel (more than 2 images) rather than a static row —
    // see useResultsCarousel in ProjectDetailContent.jsx.
    resultsImages: [
      { src: "/box-drawing.png", alt: "CAD drawing of the ammo box" },
      { src: "/lid-drawing.png", alt: "CAD drawing of the box lid" },
      { src: "/screw-drawing.png", alt: "CAD drawing of the screw" },
      { src: "/nut-drawing.png", alt: "CAD drawing of the nut" },
      { src: "/bullet-drawing.png", alt: "CAD drawing of the bullet" },
    ],
    resultsParagraphs: [
      "As one of the freshman room managers at RPI's student makerspace, The Forge, I took on a challenge given to every room manager: design and fabricate a custom box, touching every machine available in the space along the way.",
      "Every part — the box, the lid, the screws, the nuts, and the bullets that fill it — was modeled from scratch in Siemens NX, then carried through the shop's full machine lineup to become the finished piece.",
    ],
  },
};
