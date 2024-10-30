interface Project {
  title: string;
  description: string;
  link?: string;
  github?: string;
  youtube?: string;
  type?: "featured" | "open-source" | "interface";
}

export const projects: Project[] = [
  {
    title: "Asenso",
    description:
      "Empower your finances with ease—effortlessly track, manage, and save. Take control and streamline your financial journey with precision and simplicity.",
    link: "https://asenso.vercel.app/",
    type: "featured",
  },
  {
    title: "WardrobeWiz",
    description:
      "WardrobeWiz is designed to transform the way users choose their daily outfits. By leveraging real-time weather data and current location, it takes the hassle out of dressing appropriately for the day. Say goodbye to wardrobe dilemmas and confidently step out in comfort no matter the weather.",
    github: "https://github.com/saltify-mob/WardrobeWiz",
    youtube: "https://www.youtube.com/watch?v=9SEmK6X6xzQ",
    type: "featured",
  },
  {
    title: "EquityAI",
    description:
      "In partnership with Sysarb, Equity AI is a predictive anomaly detection application designed to address the challenges associated with identifying and rectifying pay discrepancies within an organization. The app detects anomalies in payroll data, facilitating timely intervention and resolution of pay-related issues.",
    link: "https://equity-ai.vercel.app/",
    type: "featured",
  },
  {
    title: "Reoon Email Verifier Integrations",
    description:
      "ActivePieces lets you connect Reoon Email Verifier with the most popular apps",
    link: "https://www.activepieces.com/pieces/reoon-verifier",
    type: "open-source",
  },
  {
    title: "Digital Garden",
    description: "Personal digital garden and knowledge base",
    link: "https://notes.anne-mariel.com/",
    type: "interface",
  },
  {
    title: "AI Chatbot",
    description: "Personal AI assistant interface",
    link: "https://ai.anne-mariel.com/",
    type: "interface",
  },
];
