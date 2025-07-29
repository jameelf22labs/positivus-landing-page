import jhon from "../../../../assets/images/jhon.png";
import jane from "../../../../assets/images/jane.png";
import michel from "../../../../assets/images/micheal.png";
import emily from "../../../../assets/images/emily.png";
import brian from "../../../../assets/images/brian.png";
import sara from "../../../../assets/images/sara.png";

export type TeamType = {
  profilePic: string;
  name: string;
  role: string;
  linkedinUrl: string;
  exp: string;
};

export const teams : Array<TeamType> = [
  {
    profilePic: jhon,
    name: "Jhon Smith",
    role: "Co-Founder",
    linkedinUrl: "https://linkedin.com/in/jhon",
    exp: "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy.",
  },
  {
    profilePic: jane,
    name: "Jane Doe",
    role: "Chief Technology Officer",
    linkedinUrl: "https://linkedin.com/in/jane",
    exp: "12+ years in software engineering and team leadership. Skilled in system architecture and cloud technologies.",
  },
  {
    profilePic: michel,
    name: "Michael Johnson",
    role: "Product Manager",
    linkedinUrl: "https://linkedin.com/in/michael",
    exp: "8+ years managing cross-functional teams. Expert in agile methodologies and user-centered product design.",
  },
  {
    profilePic: emily,
    name: "Emily Davis",
    role: "UI/UX Designer",
    linkedinUrl: "https://linkedin.com/in/emily",
    exp: "7+ years of experience in UI/UX. Specializes in user research, wireframing, and design systems.",
  },
  {
    profilePic: brian,
    name: "Brian Lee",
    role: "Lead Backend Engineer",
    linkedinUrl: "https://linkedin.com/in/brian",
    exp: "9+ years building scalable backend services. Proficient in Node.js, Python, and microservices architecture.",
  },
  {
    profilePic: sara,
    name: "Sara Williams",
    role: "Marketing Manager",
    linkedinUrl: "https://linkedin.com/in/sara",
    exp: "6+ years in digital marketing and brand strategy. Experience with campaign execution and performance analytics.",
  },
];
