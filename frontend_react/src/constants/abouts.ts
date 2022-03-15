import { images } from "../constants/index";

interface aboutsT {
  title: string;
  description: string;
  imageURL: string;
}

const abouts: aboutsT[] = [
  {
    title: "Web Development",
    description: "I am a good developer",
    imageURL: images.about01,
  },
  {
    title: "Web Design",
    description: "I am a good designer",
    imageURL: images.about02,
  },
  {
    title: "UI/UX",
    description: "I am a good at ui/ux",
    imageURL: images.about03,
  },
  {
    title: "Web Animations",
    description: "I am a good at animations",
    imageURL: images.about04,
  },
];

export default abouts;
