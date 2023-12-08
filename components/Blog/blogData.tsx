import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Pour atteindre les objectifs climatiques, un surcroît d’ambition politique, de financements privés et d’innovation s’impose",
    paragraph:
      "Une coopération internationale est plus importante que jamais parce qu’aucun pays ne peut s’attaquer au changement climatique isolément",
    image: "/images/blog/1.png",
    author: {
      name: "Samuyl Joshi",
      image: "/images/blog/author-01.png",
      designation: "Graphic Designer",
    },
    tags: ["creative"],
    publishDate: "2025",
  },
  {
    id: 2,
    title: "Les pays émergents ont besoin de beaucoup plus de financements privés en faveur de la transition climatique",
    paragraph:
      "Un large éventail de mesures sont indispensables pour mobiliser les capitaux privés nécessaires dans les pays émergents et les pays en développement et générer un impact climatique positif.",
    image: "/images/blog/2.png",
    author: {
      name: "Musharof Chy",
      image: "/images/blog/author-02.png",
      designation: "Content Writer",
    },
    tags: ["computer"],
    publishDate: "2025",
  },
  {
    id: 3,
    title: "Les pays doivent limiter le réchauffement climatique tout en maîtrisant leur endettement",
    paragraph:
      "Pour réussir, la transition écologique suppose un équilibre budgétaire délicat et le bon dosage de politiques économiques.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Lethium Deo",
      image: "/images/blog/author-03.png",
      designation: "Graphic Designer",
    },
    tags: ["design"],
    publishDate: "2025",
  },
];
export default blogData;
