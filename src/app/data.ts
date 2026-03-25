import { faCode, faPalette } from "@fortawesome/free-solid-svg-icons";

export const data = {
  services: [
    {
      id: 1,
      title: "تطوير الويب",
      description:
        "بناء مواقع وتطبيقات ويب سريعة وآمنة باستخدام أحدث التقنيات ",
      icon: faCode,
    },
    {
      id: 2,
      title: "تصميم الأنظمة",
      description:
        "تصميم واجهات مستخدم جذابة وتجارب مستخدم سلسة باستخدام أدوات التصميم الحديثة.",
      icon: faPalette,
    },
  ],
  projects: [
    {
      title: "futureidea",
      description:
        "عزّز مهاراتك من خلال برامج متخصصة، واحصل على شهادات تدعم مسيرتك العملية!",
      image: "/futureidea.png",
      liveLink: "https://futureidea.ly/",
      technologies: ["html", "Tailwind CSS", "js"],
    },
    {
      title: "paranestgroup",
      description: "Health is a Right, Not a Privilege",
      image: "/paranestgroup.png",
      liveLink: "https://paranestgroup.com/",
      technologies: ["html", "Tailwind CSS", "js"],
    },
  ],
  certificates: [
    {
      title: "شهادة تزكية - مطور ويب",
      issuer: "شركة الامثل",
      date: "2024",
      link: "/رسالة تزكيه شركة الامثل - محمد الهادي.pdf", // رابط التحقق من الشهادة إن وجد
    },
    {
      title: "شهادة تزكية - مطور ويب",
      issuer: "شركة العلامة",
      date: "2023",
      link: "/رسالة تزكيه شركة العلامة - محمد الهادي_.pdf", // رابط التحقق من الشهادة إن وجد
    },
    {
      title: "شهادة تزكية - مطور ويب",
      issuer: "شركة فاليو",
      date: "2024",
      link: "/رسالة تزكية شركة فاليو - محمد الهادي_.pdf", // رابط التحقق من الشهادة إن وجد
    },
  ],
  info: {
    aboutme:
      "مهندس برمجيات ومطور ويب متخصص في بناء تجارب رقمية مبتكرة وجذابة. أساعد الشركات والأفراد على تحقيق أهدافهم من خلال حلول تقنية متكاملة.",
    projectsCount: 5,
    whyWeChoose: [
      "جودة عالية في الكود والتصميم",
      "التزام بالمواعيد النهائية",
      "دعم فني مستمر",
    ],
  },
  contact: {
    email: "mohammedalhady002@gmail.com",
    phone: "092-8626876",
    address: "طرابلس - ليبيا",
    facebook: "https://www.facebook.com/mhmd.alhady.891127/",
    linkedin: "www.linkedin.com/in/mohammed-alhady-092a07259",
  },
};
