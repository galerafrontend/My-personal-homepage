import { styleIcon } from "./styled";
import { ReactComponent as GitHubIcon } from "./Icons/github_icon.svg";
import { ReactComponent as LinkedInIcon } from "./Icons/linkedin_icon.svg";
import { ReactComponent as InstagramIcon } from "./Icons/instagram_icon.svg";

export const socials = [
  {
    name: "GitHub",
    url: "https://github.com/eltair41",
    Icon: styleIcon(GitHubIcon),
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com",
    Icon: styleIcon(LinkedInIcon),
  },
  {
    name: "Instagram",
    url: "https://instagram.com",
    Icon: styleIcon(InstagramIcon),
  },
];