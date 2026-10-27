// Shared by the "Build Your Financial Plan" funnel page (client) and its API route (server),
// so the server can reject any answer that is not one of the offered options.
// `property` is the HubSpot contact property the answer is saved to.

export type FunnelQuestion = {
  key: "who" | "goal" | "hasPlan" | "income" | "advisor" | "timeline";
  property: string;
  q: string;
  opts: string[];
};

export const FUNNEL_QUESTIONS: FunnelQuestion[] = [
  {
    key: "who",
    property: "plan_who",
    q: "Which best describes you?",
    opts: [
      "Professional or employee",
      "Business owner",
      "Executive or senior leader",
      "Family with children",
      "Near or in retirement",
    ],
  },
  {
    key: "goal",
    property: "plan_top_goal",
    q: "What is your most important financial goal right now?",
    opts: [
      "Retire comfortably",
      "Protect my family",
      "Lower my taxes",
      "Save for my children's education",
      "Grow my investments",
      "Plan my estate and legacy",
    ],
  },
  {
    key: "hasPlan",
    property: "plan_has_plan",
    q: "Do you have a written financial plan?",
    opts: [
      "Yes, and it is up to date",
      "Yes, but it is outdated",
      "I have pieces, but nothing written",
      "No plan yet",
    ],
  },
  {
    key: "income",
    property: "plan_income_range",
    q: "What is your approximate household income?",
    opts: [
      "Under $100,000",
      "$100,000 to $250,000",
      "$250,000 to $500,000",
      "$500,000 or more",
      "Prefer not to say",
    ],
  },
  {
    key: "advisor",
    property: "plan_has_advisor",
    q: "Do you work with a financial advisor today?",
    opts: [
      "Yes, and I am happy with them",
      "Yes, but I am looking for a change",
      "No",
    ],
  },
  {
    key: "timeline",
    property: "plan_timeline",
    q: "When would you like to get started?",
    opts: ["As soon as possible", "Within 1 to 3 months", "I am just exploring"],
  },
];
