export interface DatabaseEntry {
  id: string;
  alias: string;
  platform: string;
  tactics: string[];
  redflags: string[];
  risk: 'high' | 'medium' | 'low';
  status: 'active' | 'reported' | 'banned';
  dateAdded: string;
}

// Database entries
export const DATABASE_ENTRIES: DatabaseEntry[] = [
  {
    id: "PRD-001",
    alias: "GamerFriend_2023",
    platform: "Gaming",
    tactics: ["Trust Building", "Gift Giving"],
    redflags: [
      "Sends in-game currency to minors",
      "Asks to move to private Discord",
      "Claims to be 16 but uses adult references"
    ],
    risk: "high",
    status: "active",
    dateAdded: "2024-11-15"
  },
  {
    id: "PRD-002",
    alias: "CoolTeacher_Mike",
    platform: "Social Media",
    tactics: ["Trust Building", "Isolation"],
    redflags: [
      "DMs students outside school platforms",
      "Encourages secrecy from parents",
      "Excessive personal compliments"
    ],
    risk: "high",
    status: "reported",
    dateAdded: "2024-10-22"
  },
  {
    id: "PRD-003",
    alias: "SkaterGirl_15",
    platform: "Messaging Apps",
    tactics: ["Identity Deception", "Desensitization"],
    redflags: [
      "Profile age doesn't match writing style",
      "Quickly steers conversation to personal topics",
      "Requests photos early in conversation"
    ],
    risk: "high",
    status: "active",
    dateAdded: "2024-12-03"
  },
  {
    id: "PRD-004",
    alias: "MusicProducer_LA",
    platform: "Social Media",
    tactics: ["Gift Giving", "Isolation"],
    redflags: [
      "Offers career opportunities to teens",
      "Suggests meeting without parents",
      "Lavish promises and gifts"
    ],
    risk: "high",
    status: "banned",
    dateAdded: "2024-09-18"
  },
  {
    id: "PRD-005",
    alias: "Helpful_Homework_Guy",
    platform: "Forums",
    tactics: ["Trust Building", "Secret Keeping"],
    redflags: [
      "Offers excessive help to struggling students",
      "Asks personal questions about home life",
      "Suggests keeping tutoring sessions private"
    ],
    risk: "medium",
    status: "active",
    dateAdded: "2024-11-28"
  },
  {
    id: "PRD-006",
    alias: "AnimeClub_Admin",
    platform: "Messaging Apps",
    tactics: ["Trust Building", "Desensitization"],
    redflags: [
      "Shares increasingly mature content",
      "Creates VIP channels for select members",
      "Asks about relationship status"
    ],
    risk: "medium",
    status: "reported",
    dateAdded: "2024-12-10"
  },
  {
    id: "PRD-007",
    alias: "SportsFan_Dad42",
    platform: "Social Media",
    tactics: ["Trust Building", "Gift Giving"],
    redflags: [
      "Befriends children through sports content",
      "Offers tickets or merchandise",
      "Asks about supervision levels"
    ],
    risk: "medium",
    status: "active",
    dateAdded: "2024-11-05"
  },
  {
    id: "PRD-008",
    alias: "TechHelper_2024",
    platform: "Forums",
    tactics: ["Trust Building"],
    redflags: [
      "Offers remote computer help to minors",
      "Asks for screen sharing access",
      "Questions about parental monitoring software"
    ],
    risk: "medium",
    status: "active",
    dateAdded: "2024-12-01"
  }
];

// Platform mapping for filters
export const PLATFORM_MAP: Record<string, string> = {
  "Gaming": "gaming",
  "Social Media": "social",
  "Messaging Apps": "messaging",
  "Forums": "forums"
};

// Tactic mapping for filters
export const TACTIC_MAP: Record<string, string> = {
  "Trust Building": "trust",
  "Isolation": "isolation",
  "Gift Giving": "gifts",
  "Secret Keeping": "secrets",
  "Identity Deception": "identity",
  "Desensitization": "desensitization"
};
