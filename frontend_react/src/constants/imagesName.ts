import { images } from "../constants/index";

interface imageArray {
  name: string;
  imageURL: any;
}

const imagesName: imageArray[] = [
  {
    name: "React",
    imageURL: images.react,
  },
  { name: "NodeJS", imageURL: images.node },
  { name: "TypeScript", imageURL: images.typescript },
  { name: "SaaS", imageURL: images.sass },
];

export default imagesName;
