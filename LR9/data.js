import {
  FaHome,
  FaUserFriends,
  FaFolder,
  FaCalendar,
  FaBook,
  FaPhone,
  FaFacebook,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

export const links = [
  { id: 1, url: "/", text: "home", icon: <FaHome /> },
  { id: 2, url: "/team", text: "team", icon: <FaUserFriends /> },
  { id: 3, url: "/projects", text: "projects", icon: <FaFolder /> },
  { id: 4, url: "/calendar", text: "calendar", icon: <FaCalendar /> },
  { id: 5, url: "/documents", text: "documents", icon: <FaBook /> },
  { id: 6, url: "/contact", text: "contact", icon: <FaPhone /> },
];

export const social = [
  { id: 1, url: "https://facebook.com", icon: <FaFacebook /> },
  { id: 2, url: "https://linkedin.com", icon: <FaLinkedin /> },
  { id: 3, url: "https://github.com", icon: <FaGithub /> },
];
