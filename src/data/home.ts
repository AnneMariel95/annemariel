export const homeData = {
  hero: {
    title: "Hi, I'm Anne Mariel",
    subtitle:
      "As a technology strategist, I bridge the gap between business objectives and technical implementation. I merge a proven track record in business development with a versatile technical skill set, which enables me to create powerful and scalable systems that drive organizational success.",
    emojis: ["\ud83d\udc69\u200d\ud83d\udcbb", "\ud83d\ude80", "\ud83d\udca1"],
    codeSnippet: `class TechJourney {
  constructor() {
    this.roles = [
      "Developer",
      "Problem Solver",
      "Tech Enthusiast"
    ];
    this.superpower = "ProblemSolving";
  }

  async dailyRoutine() {
    try {
      await this.writeCode();
      await this.innovate();
      await this.inspire();
      return "Making an impact";
    } catch (error) {
      return "Coffee needed";
    }
  }
}`,
  },
  roles: {
    title: "Making an Impact in Tech",
    cards: [
      {
        emoji: "\ud83d\udc69\u200d\ud83d\udcbb",
        title: "The Developer",
        description:
          "Building efficient and maintainable solutions. Focused on writing clean code and learning best practices in full-stack development.",
      },
      {
        emoji: "\ud83d\ude80",
        title: "The Problem Solver",
        description:
          "Tackling challenges with analytical thinking and creativity. Continuously expanding my technical knowledge and skills.",
      },
      {
        emoji: "\ud83d\udca1",
        title: "The Tech Enthusiast",
        description:
          "Passionate about technology and its potential. Actively contributing to projects while learning from other developers.",
      },
    ],
  },
  standup: {
    title: "Daily Tech Update",
    items: [
      {
        label: "Yesterday",
        content:
          "Implemented new features, fixed bugs, and participated in code reviews",
      },
      {
        label: "Today",
        content: "Working on feature development and improving test coverage",
      },
      {
        label: "Blockers",
        content: "Not enough coffee \u2615",
      },
    ],
    codeSnippet: `// Tech Priority Queue
const priorities = [
  'Code.quality',
  'Learning.growth',
  'Feature.delivery',
  'Testing.coverage'
];

// Success Metric
const impact = 
  code.quality() + 
  personal.growth() + 
  team.contribution();`,
  },
};
