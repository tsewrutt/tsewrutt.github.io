export type Project = {
  id: number;
  title: string;
  desc: string;
  img: string;
  skill: string;
};

export const projects = [
  {
    id: 1,
    title: "Calendar Scheduler",
    desc: "Developed a calendar web application for the Canadian Engineering Leadership Conferences, enabling over 200 engineering students to manage personalized event schedules throughout the conference. ",
    skill:
      "react, postgresql, node.js, tailwind.css, html, cloudflare, digital ocean",
    img: "data/pictures/project3.jpg",
    // img: "/data/pictures/project3.jpg",
    date: "2024-12",
  },
  {
    id: 2,
    title: "Dance XR",
    desc: "Dance XR allows users to capture, edit, and sequence dance moves using intuitive mixed-reality controls. Worked with an AI model to create a markerless motion capture system. ",
    skill:
      "mixed reality, unity c#, inverse kinematic, animation rigging, motion capture, spatial computing, pose-estimation",
    img: "pictures/project3.jpg",
    date: "2024-Present",
  },
  {
    id: 3,
    title: "Tactix Haptic Glove",
    desc: "Involved developing an immersive environment for their haptic glove, enabling users to experience tactile feedback while interacting with virtual objects. ",
    skill:
      "mvc, human-computer interaction, event handling, graphical user interface, object-oriented programming, user experience, mixed reality ",
    img: "/pictures/project3.jpg",
    date: "2024-04",
  },
  {
    id: 4,
    title: "Robots in the home",
    desc: "Studied how neurotic behaviors in autonomous robots affect human willingness to maintain them, using experimental testing and a remote-control app. (Publication in progress) ",
    skill:
      "human-robot interaction, human behavior, autonomous robotics, teleoperation, experiment design, qualitative/quantitative analysis ",
    img: "/pictures/project3.jpg",
    date: "2023-12",
  },
  {
    id: 5,
    title: "Crosshair Hue: Targeting Perception Variations",
    desc: "Explored how alterations in crosshair colors influence target and background perception, aiming to enhance overall shooting accuracy and adaptability.",
    skill:
      "mvc, human-computer interaction, event handling, graphical user interface, object-oriented programming, user experience, mixed reality ",
    img: "/pictures/project3.jpg",
    date: "2023-03",
  },
  {
    id: 6,
    title: "Tactix Haptic Glove",
    desc: "Involved developing an immersive environment for their haptic glove, enabling users to experience tactile feedback while interacting with virtual objects. ",
    skill:
      "mvc, human-computer interaction, event handling, graphical user interface, object-oriented programming, user experience, mixed reality ",
    img: "/pictures/project3.jpg",
    date: "2024",
  },
  {
    id: 7,
    title: "Tactix Haptic Glove",
    desc: "Involved developing an immersive environment for their haptic glove, enabling users to experience tactile feedback while interacting with virtual objects. ",
    skill:
      "mvc, human-computer interaction, event handling, graphical user interface, object-oriented programming, user experience, mixed reality ",
    img: "/pictures/project3.jpg",
    date: "2024",
  },
];

export default projects;
