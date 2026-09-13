export const featuredProject = {
  id: "l2-rocket-mk2",
  title: "Level 2 High Powered Rocket MK2",
  description:
    "Constructed a fiberglass high-powered model rocket using parts from a 3-inch diamter Wildman Punisher kit and fabricated my own body tube, fins and centering rings. Designed my own avionics bay in Siemens NX to house necessary electronic components.",
    results: "Coming Soon",
  tags: ["Composites", "OpenRocket Simulator", "CAD"],
  category: "Aerospace", 
};

export const projects = [
  {
    id: "l2-rocket-mk1",
    title: "Level 2 High Powered Rocket MK1",
    description:
      "Constructed a fiberglass high-powered model rocket using a 3-inch-diameter Wildman Punisher kit. Applied avionics knowledge to resolve recovery issues by reconfiguring faulty components. Conducted ground test using black powdered charges to ensure complete seperation.",
    results: "Rocket achived max 1,373 meters max speed of Mach 0.4",
    tags: ["Composites", "OpenRocket Simulator", "CAD", "Soldering", "Safety"],
    category: "Aerospace",
  },
  {
    id: "irec-rocket-2026",
    title: "Rensselaer Rocket Society IREC Rocket (2026)",
    description:
      "Apart of structures subsystem for RRS's Intercollegiate Rocketry and Engineering Competition (IREC) team, which flew a payload of 9,863 feet on a student-developed solid rocket motor, deployed the payload at apogee, collected flight data, and recovered the vechile.",
    results: "Earned 24th out of 143 overall in IREC and 4th place overall in the 10K student-researched and developed(SRAD) category despite working on an extremely limited budget.",
    tags: ["Composites", "OpenRocket Simulator", "CAD/CAM", "CNC", "Safety"],
    category: "Aerospace",
  },
  {
    id: "irec-rocket-2027",
    title: "Rensselaer Rocket Society IREC Rocket (2027)",
    description:
      "Structures lead for RRS's Intercollegiate Rocketry and Engineering Competition(IREC) team committee, designning an aerospace vehicle with airbrakes to achieve an apogee 30,000 ft with a student-developed solied rocket motor. Organied team meetings approximately 4 hours a week to CAD and then fabricate a subscale of the IREC rocket to develop necessary skills for the actual vehicle.",
    results: "Coming Soon ",
    tags: ["Composites", "OpenRocket Simulator", "CAD", "Soldering"],
    category: "Aerospace",
  },
];

// All projects together, for the /projects page — the homepage's
// FeaturedWork section only shows a curated subset of these.
export const allProjects = [featuredProject, ...projects];
