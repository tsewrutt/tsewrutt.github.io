export type Project = {
  id: number;
  title: string;
  desc: string;
  img: string;
  skill: string;
  date: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Calendar Scheduler",
    desc: "Developed a calendar web application for the Canadian Engineering Leadership Conferences, enabling over 200 engineering students to manage personalized event schedules throughout the conference. ",
    skill:
      "react, postgresql, node.js, tailwind.css, html, cloudflare, digital ocean",
    img: "/pictures/cs.png",
    date: "2024-12",
  },
  {
    id: 2,
    title: "Dance XR",
    desc: "Dance XR allows users to capture, edit, and sequence dance moves using intuitive mixed-reality controls. Worked with an AI model to create a markerless motion capture system. ",
    skill:
      "mixed reality, unity c#, hololens, quest 3, inverse kinematic, animation rigging, motion capture, spatial computing, pose-estimation",
    img: "/pictures/dxr.jpg",
    date: "2024-Present",
  },
  {
    id: 3,
    title: "Tactix Haptic Glove",
    desc: "Involved developing an immersive environment for their haptic glove, enabling users to experience tactile feedback while interacting with virtual objects. ",
    skill:
      "mvc, human-computer interaction, event handling, graphical user interface, object-oriented programming, user experience, mixed reality ",
    img: "/pictures/tac.jpeg",
    date: "2024-04",
  },
  {
    id: 4,
    title: "Robots in the home",
    desc: "Studied how neurotic behaviors in autonomous robots affect human willingness to maintain them, using experimental testing and a remote-control app. (Publication in progress) ",
    skill:
      "human-robot interaction, human behavior, autonomous robotics, teleoperation, experiment design, qualitative/quantitative analysis ",
    img: "/pictures/room.png",
    date: "2023-12",
  },
  {
    id: 5,
    title: "Crosshair Hue: Targeting Perception Variations",
    desc: "Explored how alterations in crosshair colors influence target and background perception, aiming to enhance overall shooting accuracy and adaptability.",
    skill:
      "mvc, human-computer interaction, event handling, graphical user interface, object-oriented programming, user experience, mixed reality ",
    img: "/pictures/cross.png",
    date: "2023-03",
  },
  {
    id: 6,
    title: "Earth Defense",
    desc: "Tower defense type game where Earth is being destroyed by human activities such as wildfires, pollution, overfishing, oil spillage & mining. You are given the task of saving Earth as a guardian angel. \nWill you take the job or not?",
    skill:
      "unity, thematic storytelling, player decision-making, strategy, resource management, interactive narrative, dynamic game states",
    img: "/pictures/earth.png",
    date: "2023-03",
  },
  {
    id: 7,
    title: "SoundSky Streaming Service",
    desc: "Developed a music streaming SPA using the MVVM model with HTML, Vue.js, and SQL. Implemented CRUD operations and integrated REST API for seamless data communication between the web page and the backend.",
    skill:
      "spa, mvvm, vue.js, rest api, database management, client-server model, sql",
    img: "/pictures/sound.png",
    date: "2023-23",
  },
  {
    id: 8,
    title: "Virtual Piano",
    desc: "Implemented a JavaFX piano application using MVC architecture, enabling users to play using keyboard or mouse input. Included a theme selection menu for choosing seasonal themes.",
    skill:
      "java fx, mvc, event handling, graphical user interface, user interaction, customizable interface",
    img: "/pictures/piano.png",
    date: "2021-11",
  },
  {
    id: 9,
    title: "Puzzle Box",
    desc: "A 2D platformer using Unity. The inspiration for this project came from Geometry Dash. Development involved level designing with a top layer HUD which accomodated for resets, level selection, volume regulating. In this project, most of the sprites and animations were done by me. I had a lot of fun making this one.",
    skill:
      "Unity, 2D platformer, tile maps, custom sprites, game development, level design, geometry dash inspired",
    img: "/pictures/puzzle.png",
    date: "2022-04",
  },
];

export default projects;
