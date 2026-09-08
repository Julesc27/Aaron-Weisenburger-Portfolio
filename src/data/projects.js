export const featuredProject = {
  id: "l1-rocket",
  title: "Level 1 High Powered Rocket",
  description:
    "Designed and fabricated structural components for Rensselaer Rocket Society’s competition vehicle, including fiberglass body tubes, a nose cone, motor tube, couplers, fins, bulkheads, and a carbon-fiber-reinforced fin can.",
  results: "explain the results that happened here",
  tags: ["Fiberglass", "other things", "CAD", "Soldering"],
  category: "Aerospace",
};

export const projects = [
  {
    id: "l2-mk1-a",
    title: "Level 2 High Powered Rocket MK1",
    description:
      "Constructed and iterated on a fiberglass high-powered rocket while applying OpenRocket analysis, recovery-system testing, center-of-gravity checks, and avionics troubleshooting.",
    results: "explain the results that happened here",
    tags: ["Fiberglass", "other things", "CAD", "Soldering"],
    category: "Aerospace",
  },
  {
    id: "l2-mk1-b",
    title: "Level 2 High Powered Rocket MK1",
    description:
      "Constructed and iterated on a fiberglass high-powered rocket while applying OpenRocket analysis, recovery-system testing, center-of-gravity checks, and avionics troubleshooting.",
    results: "explain the results that happened here",
    tags: ["Fiberglass", "other things", "CAD", "Soldering"],
    category: "Aerospace",
  },
];

// All projects together, for the /projects page — the homepage's
// FeaturedWork section only shows a curated subset of these.
export const allProjects = [featuredProject, ...projects];
