export const site = {
  name: "Xinyu Lin | 林欣雨",
  title: "Xinyu Lin — Personal Website",
  description:
    "A graduate student at the University of Michigan. Seeking full-time opportunities in data analysis and problem solving.",
  url: "https://example.com",
  email: "meganliney@gmail.com",
  links: {
    github: "https://github.com/LinneaLiny",
    linkedin: "www.linkedin.com/in/linnealin2002",
    x: "https://x.com/MeganLinyu",
  },
  nav: [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ],
  projects: [
    {
      name: "项目名称 A",
      description: "一句话介绍你做了什么、解决了什么问题。",
      href: "https://example.com",
      tags: ["Next.js", "TypeScript", "Tailwind"],
    },
    {
      name: "项目名称 B",
      description: "一句话介绍你做了什么、解决了什么问题。",
      href: "https://example.com",
      tags: ["React", "Node.js"],
    },
  ],
} as const;

