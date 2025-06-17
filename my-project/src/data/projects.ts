export type Project = {
  id: number;
  title: string;
  desc: string;
  img: string;
  skill: string;
  date: string;
  link: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Calendar Scheduler",
    desc: "📅 Developed a responsive calendar scheduling platform for the Canadian Engineering Leadership Conferences (CELC), used by over 200+ engineering students across Canada.\n\n🎯 **Core Features:**\n• Personalized schedules per attendee, synced across sessions and devices\n• Real-time updates for event changes or cancellations\n• Drag-and-drop functionality for rearranging sessions\n• Visual color-coding for different event types (Workshops, Panels, Networking)\n\n🛠️ **Tech Stack & Implementation:**\n• Built with React, TailwindCSS, and Supabase for backend services\n• Leveraged dynamic rendering for time blocks to support multiple time zones\n• Integrated with Google Calendar API for external syncing\n\n🧪 **Testing & Deployment:**\n• Utilized Jest and Cypress for frontend testing\n• CI/CD setup using GitHub Actions and Vercel for production deployment\n\n💡 **Impact:**\nThe scheduler replaced legacy paper handouts, increased session attendance tremendously, and significantly improved the coordination of 60+ conference sessions over 5 days.\n\n🔗(To add embedded link to walkthrough here.)",
    skill:
      "react, postgresql, node.js, tailwind.css, html, cloudflare, digital ocean",
    img: "/pictures/cs.png",
    date: "2024-12",
    link: "",
  },
  {
    id: 2,
    title: "Dance XR",
    //desc: "Dance XR allows users to capture, edit, and sequence dance moves using intuitive mixed-reality controls. Worked with an AI model to create a markerless motion capture system. ",
    desc: "💃 Worked on Dance XR, a cutting-edge mixed reality platform enabling dancers to capture, edit, and sequence choreography through spatial computing, without the need for markers or suits.\n\n🎯 **Contribution:**\n• Implemented markerless motion capture using an AI-based pose estimation model\n• Applied real-time skeletal rigging using Unity’s Animation Rigging & IK system\n• Developed a robust communication layer between the Unity client and the model server for continuous data streaming\n• Designed and implemented back-end architecture to support markerless tracking and perform complex calculations for real-world position estimation\n\n**Core Features:**\n• A markerless motion capture powered by Kinect initially\n• Real-time skeletal rig application using Unity’s Animation Rigging & IK\n• Hands-free editing tools via gesture and voice inputs\n• Timeline-based sequencer to blend and loop recorded moves\n• HoloLens 2 support\n\n🛠️ **Tech Stack & Implementation:**\n• Built in Unity (C#) \n• AI model trained for real-time body tracking from RGB input \n• Performance-optimized for complex motion handling\n\n🧪 **Testing & Workflow:**\n• Play Mode tests for interaction flows and scene persistence\n• Recorded and reviewed motion sessions to validate rig fidelity\n• Worked closely with dancers, testing and adjusting features based on their feedback to improve the experience\n\n💡 **Impact:**\nDance XR empowers choreographers and performers by turning creative ideas into movement, allowing them to bring their visions to life in immersive space.\n\n🔗(To add embedded link to walkthrough here.)",
    skill:
      "mixed reality, unity c#, hololens, quest 3, inverse kinematic, animation rigging, motion capture, spatial computing, pose-estimation",
    img: "/pictures/dxr.jpg",
    date: "2024-2025",
    link: "",
  },
  {
    id: 3,
    title: "Tactix Haptic Glove",
    desc: "🧤 Developed an immersive mixed reality environment for a haptic glove system, enabling users to experience realistic tactile feedback when interacting with virtual objects.\n\n🎯 **Contributions:**\n• Built the interactive environment in Unity (C#) where the glove was used for testing and demos\n• Created a custom C++ driver to integrate the glove with SteamVR\n• Supported the successful connection between the glove's SDK and VR systems to enable seamless interaction\n\n🎯 **Core Features:**\n• Real-time tactile feedback mapped to finger-specific interactions\n• Object manipulation with natural gesture-based control\n• Visual and haptic alignment for high-fidelity touch simulation\n• Interactive demos showcasing texture, weight, and resistance variations\n\n🛠️ **Tech Stack & Implementation:**\n• Built with Unity (C#) using an MVC architecture for modular design\n• Leveraged event-driven programming for responsive haptic triggering\n• Developed custom GUI elements for testing grip force and responsiveness\n• Integrated glove SDKs with Unity’s physics and input systems\n\n🧪 **Impact:**\nThis prototype redefined how users physically engage with digital environments, blending lifelike experiences with easy-to-use design to create more natural and meaningful ways to interact with technology.\n\n🎓 **Presentation:**\nThe project was presented at the Final Year Capstone project Symposium at UNB in 2024.\n\n🔗 (To add embedded link to walkthrough here.)",
    skill:
      "mvc, human-computer interaction, event handling, graphical user interface, object-oriented programming, user experience, mixed reality ",
    img: "/pictures/tac.jpeg",
    date: "2024-04",
    link: "",
  },
  {
    id: 4,
    title: "Robots in the home",
    desc: "🤖 Conducted a behavioral research study exploring how neurotic behaviors in autonomous robots influence human willingness to maintain and assist them over time.\n\n🧪 **Study Design & Methodology:**\n• Designed a remote-controlled autonomous robot exhibiting varied emotional traits\n• Developed a companion mobile app enabling participants to interact with and monitor the robot\n• Performed experimental trials involving human subjects in both physical and teleoperation contexts\n• Analyzed qualitative and quantitative feedback to assess empathy, trust, and fatigue levels\n\n📊 **Analysis & Insights:**\n• Observed significant variance in user behavior based on robot 'neuroticism' levels\n• Correlated user perceptions of emotional realism with their likelihood of long-term engagement\n• Discovered nuanced human behavior patterns when robots expressed dependency or distress\n\n🛠️ **Tech Stack & Tools:**\n• Custom-built robot system using ROS and Python for behavior scripting\n• Remote interface built for multi-device compatibility and event logging\n• Applied mixed-method analysis for human-subject data collection and behavioral coding\n\n🎓 **Academic Contribution:**\nAccepted and published at **IEEE RO-MAN 2025**, contributing to emerging research on emotional modeling in human-robot relationships and ethical design for robot behavior.\n\n🔗 To add link to paper submission here",
    skill:
      "human-robot interaction, human behavior, autonomous robotics, teleoperation, experiment design, qualitative/quantitative analysis ",
    img: "/pictures/room.png",
    date: "2023-12",
    link: "",
  },
  {
    id: 5,
    title: "Crosshair Hue: Targeting Perception Variations",
    desc: "🎯 Conducted an experimental UX study investigating how variations in crosshair color schemes impact target acquisition and background distinction in interactive environments.\n\n🔬 **Objective & Scope:**\n• Evaluated color perception and its influence on player response times and accuracy\n• Designed multiple crosshair configurations with variable hue, including a color blindness mode that was discussed but not fully tested due to limited participant availability\n• Simulated dynamic background environments to mimic in-game lighting or real world environments\n\n🧪 **Study Design & Testing:**\n• Developed an interactive testing platform using the Model-View-Controller (MVC) pattern\n• Incorporated real-time feedback loops for measuring hit accuracy and user reaction\n• Collected user performance data across randomized visual scenarios\n• Analyzed participant responses using both quantitative metrics and user surveys\n\n🛠️ **Tech Stack & UX Implementation:**\n• Built using C# and Unity with a focus on intuitive GUI and user flow\n• Implemented event-driven architecture to handle target spawning and interaction logging\n• Employed object-oriented design principles to modularize visual and behavioral components\n\n📘 **Outcome:**\nThe study demonstrated measurable differences in user effectiveness based on crosshair hues and background conditions. Findings were compiled into a research paper presented for academic evaluation as part of an HCI course project.",
    skill:
      "mvc, human-computer interaction, event handling, graphical user interface, object-oriented programming, user experience, mixed reality ",
    img: "/pictures/cross.png",
    date: "2023-03",
    link: "",
  },
  {
    id: 6,
    title: "Earth Defense",
    desc: "🌍 Developed an immersive tower defense game where players assume the role of a guardian angel tasked with saving Earth from environmental collapse caused by human activities such as wildfires, pollution, overfishing, oil spills, and reckless mining.\n\n🕹️ **Gameplay & Narrative:**\n• Strategically deploy eco-friendly defenses to combat waves of man-made disasters\n• Each environmental threat presents unique attack patterns and long-term effects\n• Player choices shape the Earth's fate through a dynamic interactive narrative\n• Offers moral dilemmas: sacrifice resources now or save them for future challenges?\n\n🎮 **Core Mechanics & Systems:**\n• Real-time strategy combined with resource management to upgrade defenses and unlock new eco-technologies\n• Unique levels themed around different ecosystems (oceans, forests, arctic, deserts)\n\n🛠️ **Design & Technical Stack:**\n• Built in Unity with custom systems for dynamic event progression and AI pathfinding\n• Integrated player decision-making mechanics that influence branching storylines\n• Leveraged Unity’s UI toolkit to visualize global impact and in-game moral score\n\n💡 **Impact:**\nDesigned to raise awareness about environmental issues through engaging gameplay and thoughtful worldbuilding, encouraging players to consider the consequences of inaction.\n\n🔗 (To add link to game here.)",
    skill:
      "unity, thematic storytelling, player decision-making, strategy, resource management, interactive narrative, dynamic game states",
    img: "/pictures/earth.png",
    date: "2023-03",
    link: "",
  },
  {
    id: 7,
    title: "SoundSky Streaming Service",
    desc: "Developed a music streaming SPA using the MVVM model with HTML, Vue.js, and SQL. Implemented CRUD operations and integrated REST API for seamless data communication between the web page and the backend.",
    skill:
      "spa, mvvm, vue.js, rest api, database management, client-server model, sql",
    img: "/pictures/sound.png",
    date: "2023-23",
    link: "",
  },
  {
    id: 8,
    title: "Virtual Piano",
    desc: "Implemented a JavaFX piano application using MVC architecture, enabling users to play using keyboard or mouse input. Included a theme selection menu for choosing seasonal themes.",
    skill:
      "java fx, mvc, event handling, graphical user interface, user interaction, customizable interface",
    img: "/pictures/piano.png",
    date: "2021-11",
    link: "",
  },
  {
    id: 9,
    title: "Puzzle Box",
    desc: "A 2D platformer using Unity. The inspiration for this project came from Geometry Dash. Development involved level designing with a top layer HUD which accomodated for resets, level selection, volume regulating. In this project, most of the sprites and animations were done by me. I had a lot of fun making this one.",
    skill:
      "Unity, 2D platformer, tile maps, custom sprites, game development, level design, geometry dash inspired",
    img: "/pictures/puzzle.png",
    date: "2022-04",
    link: "",
  },
];

export default projects;
