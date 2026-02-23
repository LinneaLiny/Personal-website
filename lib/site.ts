export const site = {
  name: "Xinyu Lin | 林欣雨",
  title: "Xinyu Lin — Personal Website",
  description:
    "A graduate student at the University of Michigan. Seeking full-time opportunities in data analysis and problem solving.",
  url: "https://example.com",
  email: "meganliney@gmail.com",
  links: {
    github: "https://github.com/LinneaLiny",
    linkedin: "https://www.linkedin.com/in/linnealin2002",
    x: "https://x.com/MeganLinyu",
  },
  heroFunFacts: [
    "Graduate student @ University of Michigan",
    "Ski & ice skating enthusiast, future surfer wannabe",
    "Nintendo Switch casual, always up for a game",
  ],
  aboutIntro: [
    "My name is Xinyu Lin (林欣雨); I also go by Linnea. I'm a graduate student at the University of Michigan with a strong curiosity for learning and building things step by step. I'm currently seeking full-time opportunities where I can apply my skills in data analysis, problem solving, and continuous learning.",
    "When it comes to learning and work, I enjoy challenges and unfamiliar problems. I'm motivated by curiosity and find joy in gradual progress—turning complex problems into something understandable and solvable over time.",
    "Outside of work and study, I have a wide range of interests. I enjoy skiing and ice skating, and I'm very interested in trying surfing and scuba diving in the future; I plan to start by improving my swimming skills first. In my free time, I also like relaxing with my Nintendo Switch—feel free to add me as a friend!",
    "You're very welcome to explore my resume and projects. If my background or work resonates with you, feel free to reach out—I'm always open to new conversations and opportunities.",
  ],
  nav: [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ],
  projects: [
    {
      name: "LLM Context & Confidence Analysis",
      description:
        "Framework for testing how different contextual dimensions affect LLM confidence calibration and stance detection in social media. Evaluates multiple models (GPT-4, Claude, Llama, etc.) across 8 context variants with accuracy, calibration, and sensitivity metrics.",
      href: "https://github.com/LiMaoUM/llm-context",
      tags: ["Python", "LLM", "NLP", "Research"],
    },
  ],
} as const;

