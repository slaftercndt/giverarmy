/**
 * The 12 Causes.
 *
 * Each cause links to its campaign on the GiveSendGo crowdfunding platform
 * (givesendgo.com). These open in a new tab (external).
 *
 * TODO (compliance/ops): verify each campaign URL resolves before launch.
 * Any URL that 404s routes through the team's compliance/ops review.
 */
export type Cause = {
  name: string;
  description: string;
  url: string;
};

export const causes: Cause[] = [
  {
    name: "Crisis Response",
    description:
      "Aid and long-term recovery for communities hit by natural or man-made disaster.",
    url: "https://www.givesendgo.com/GlobalCrisis",
  },
  {
    name: "Rescue & Rehabilitation",
    description:
      "Rescuing people from trafficking and walking with those recovering from addiction.",
    url: "https://www.givesendgo.com/Rehabilitation",
  },
  {
    name: "Animal Care & Rescue",
    description: "Shelters, vet care, adoption, and responsible pet ownership.",
    url: "https://www.givesendgo.com/AnimalRescueandCare",
  },
  {
    name: "Pro-Life",
    description:
      "Single parents and families in need — relief, adoption, foster care, healthy homes.",
    url: "https://www.givesendgo.com/PROLIFEFund",
  },
  {
    name: "Earth Care",
    description:
      "Community gardens, service projects, and education for sustainable living.",
    url: "https://www.givesendgo.com/GSGEarthCare",
  },
  {
    name: "Medical Relief",
    description:
      "Help with medical debt, medication, and mental health in unavoidable hardship.",
    url: "https://www.givesendgo.com/MedicalRelief",
  },
  {
    name: "Essential for Life",
    description:
      "Food, water, transportation, utilities — the basics of daily living.",
    url: "https://www.givesendgo.com/EssentialsForLife",
  },
  {
    name: "Faith Based",
    description:
      "Missionary work, struggling ministries and churches, ministers in need.",
    url: "https://www.givesendgo.com/FaithBased",
  },
  {
    name: "Arts & Education",
    description:
      "Schools, educational programs, and initiatives that sustain the arts.",
    url: "https://www.givesendgo.com/EducationFund",
  },
  {
    name: "Current Emergencies",
    description:
      "Immediate aid for crises in today's news cycle, through our Care & Relief campaigns.",
    url: "https://www.givesendgo.com/CurrentEmergencies",
  },
  {
    name: "Justice for All",
    description:
      "Access to justice for those who cannot afford legal representation.",
    url: "https://www.givesendgo.com/Justice4All",
  },
  {
    name: "Barnabas Fund",
    description:
      "Amplifying other causes — visibility and reach for the issues that matter.",
    url: "https://www.givesendgo.com/BarnabasFund",
  },
];
