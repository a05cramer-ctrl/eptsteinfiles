// Warning banner messages
export const WARNING_MESSAGES = [
  "EDUCATIONAL PLATFORM — PROTECT THE VULNERABLE",
  "KNOWLEDGE IS POWER — LEARN THE PATTERNS",
  "RECOGNIZE THE SIGNS — STOP PREDATORS",
  "REPORT SUSPICIOUS BEHAVIOR TO AUTHORITIES",
  "AWARENESS SAVES LIVES — SHARE THIS RESOURCE"
];

// Hero subtitle typewriter text
export const HERO_TEXT = "This platform exists to educate and protect. Learn to recognize predatory patterns before they cause harm. Knowledge is your first line of defense against those who prey on the vulnerable.";

// Educational popup facts
export const EDUCATIONAL_FACTS = [
  "1 in 5 children receive unwanted sexual solicitations online. Education is key to prevention.",
  "Predators often spend weeks or months building trust before any inappropriate behavior begins.",
  "76% of online predators are between 26-39 years old, but they often claim to be younger.",
  "Most grooming happens in private messages, not public forums. Be cautious of requests to move conversations to private channels.",
  "Children who report uncomfortable situations are never in trouble. Encourage open communication.",
  "Screenshots and saved conversations are crucial evidence. Teach children not to delete concerning messages.",
  "Predators often target children who appear lonely or isolated. Strong support systems are protective.",
  "\"You're so mature for your age\" is one of the most common grooming phrases. Teach children to recognize it."
];

// Grooming tactics data
export interface TacticData {
  id: string;
  icon: string;
  title: string;
  preview: string;
  details: string[];
}

export const TACTICS_DATA: TacticData[] = [
  {
    id: "trust",
    icon: "🎭",
    title: "FALSE TRUST BUILDING",
    preview: "Creating artificial bonds and emotional dependency...",
    details: [
      "Excessive flattery and compliments",
      "\"You're so mature for your age\"",
      "Pretending to understand them better than family",
      "Becoming the \"only one who gets them\"",
      "Love bombing and constant attention"
    ]
  },
  {
    id: "isolation",
    icon: "🔒",
    title: "ISOLATION TACTICS",
    preview: "Separating victims from support systems...",
    details: [
      "Discouraging friendships with peers",
      "\"Your parents don't understand you\"",
      "Creating conflict with family members",
      "Encouraging secrecy about the relationship",
      "Making victim feel dependent on predator"
    ]
  },
  {
    id: "gifts",
    icon: "🎁",
    title: "GIFT MANIPULATION",
    preview: "Using gifts to create obligation and secrecy...",
    details: [
      "Sending money, games, or virtual items",
      "Expensive gifts that require secrecy",
      "\"Don't tell your parents about this\"",
      "Creating sense of owing favors",
      "Using gifts as leverage later"
    ]
  },
  {
    id: "desensitization",
    icon: "📉",
    title: "DESENSITIZATION",
    preview: "Gradually normalizing inappropriate content...",
    details: [
      "Starting with \"innocent\" conversations",
      "Slowly introducing sexual topics",
      "Sharing inappropriate content as \"normal\"",
      "Pushing boundaries incrementally",
      "Making victim feel complicit"
    ]
  },
  {
    id: "identity",
    icon: "👤",
    title: "IDENTITY DECEPTION",
    preview: "Lying about age, appearance, and intentions...",
    details: [
      "Claiming to be a teenager or young adult",
      "Using fake photos and profiles",
      "Creating elaborate backstories",
      "Catfishing with stolen identities",
      "Multiple accounts for different purposes"
    ]
  },
  {
    id: "threats",
    icon: "⚡",
    title: "COERCION & THREATS",
    preview: "Using fear and blackmail to maintain control...",
    details: [
      "Threatening to share private content",
      "\"I'll tell your parents what you said\"",
      "Claiming they'll harm themselves",
      "Blackmail with screenshots",
      "Creating fear of consequences"
    ]
  }
];

// Safety tips
export const SAFETY_TIPS = [
  {
    number: "01",
    title: "Never share personal information",
    description: "Real name, school, address, phone number, or photos with strangers online."
  },
  {
    number: "02",
    title: "Question age claims",
    description: "Anyone can lie about their age online. Be skeptical of \"older friends.\""
  },
  {
    number: "03",
    title: "Keep conversations public",
    description: "If someone insists on moving to private chats, that's a red flag."
  },
  {
    number: "04",
    title: "Trust your instincts",
    description: "If something feels wrong, it probably is. Don't ignore discomfort."
  },
  {
    number: "05",
    title: "Tell a trusted adult",
    description: "You won't get in trouble for reporting uncomfortable interactions."
  }
];

// Warning steps if you suspect grooming
export const WARNING_STEPS = [
  {
    number: 1,
    title: "Don't delete evidence",
    description: "Save screenshots, chat logs, and any other communications."
  },
  {
    number: 2,
    title: "Stop contact immediately",
    description: "Block the person but don't delete the conversation history."
  },
  {
    number: 3,
    title: "Tell someone you trust",
    description: "Parent, teacher, counselor, or another trusted adult."
  },
  {
    number: 4,
    title: "Report to authorities",
    description: "Contact local police or use official reporting channels below."
  }
];

// Resource links
export const RESOURCES = [
  { 
    name: "National Center for Missing & Exploited Children", 
    id: "ncmec",
    url: "https://www.missingkids.org/"
  },
  { 
    name: "CyberTipline (Report Online Exploitation)", 
    id: "cybertipline",
    url: "https://report.cybertip.org/"
  },
  { 
    name: "Childhelp National Hotline: 1-800-422-4453", 
    id: "childhelp",
    url: "https://www.childhelp.org/hotline/"
  },
  { 
    name: "FBI Internet Crime Complaint Center", 
    id: "fbi-ic3",
    url: "https://www.ic3.gov/"
  },
  { 
    name: "RAINN National Sexual Assault Hotline", 
    id: "rainn",
    url: "https://www.rainn.org/"
  }
];
