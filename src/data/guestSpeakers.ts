type GuestSpeakers = {
  name: string;
  username: string;
  description: string;
  img: string;
};

const guestSpeakers: GuestSpeakers[] = [
  {
    name: "Mr. Carlo Antonio Taleon",
    username: "@taleoncarlo",
    description:
      "Carlo Antonio Taleon is a skilled React Developer and AI expert with a passion for creating innovative digital solutions. With a deep understanding of AI technologies and several years of experience, Carlo builds dynamic and responsive web applications that incorporate machine learning and natural language processing.",
    img: "/carlo.jpeg",
  },
  {
    name: "Jed Adrian Denosta",
    username: "@jedadriannn",
    description:
      "Jed Adrian Denosta is an experienced UI/UX Design expert who prioritizes user-centered design. His ability to simplify complex problems and deliver projects on time and within budget makes him a valuable speaker for any design or innovation-focused event.",
    img: "https://jedadrian.vercel.app/_next/image?url=%2FmyProfile.jpg&w=384&q=75",
  },
];

export default guestSpeakers;
