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
    title: "Data Dashboard",
    desc: "📊 Developed a comprehensive real-time analytics dashboard using Blazor Server and SignalR for visualizing live data streams with interactive charts and dynamic updates.\n\n🎯 **Core Features:**\n• Real-time data visualization with live chart updates using Chart.js integration\n• Interactive dashboard with customizable widgets and drill-down capabilities\n• Multi-user support with role-based access control and personalized views\n• Export functionality for reports in PDF and Excel formats\n\n🛠️ **Tech Stack & Implementation:**\n• Built with Blazor Server for server-side rendering and SignalR for real-time communication\n• Entity Framework Core with SQL Server for data persistence and query optimization\n• Implemented responsive design with Bootstrap and custom CSS for mobile compatibility\n• Integrated with external APIs for data ingestion and third-party service connections\n\n🧪 **Performance & Scalability:**\n• Optimized database queries with proper indexing and caching strategies\n• Implemented connection pooling and async/await patterns for better performance\n• Used Redis for session state management and distributed caching\n\n💡 **Purpose:**\nA demonstration of modern web development skills using .NET technologies, showcasing real-time data visualization capabilities and enterprise-grade architecture patterns.\n\n🔗 (To add embedded link to demo here.)",
    skill: "asp.net core, entity framework, sql server, chart.js, bootstrap, redis, real-time data",
    img: "/pictures/dashboard-placeholder.png",
    date: "2025-06",
    link: "",
  },
  // {
  //   id: 2,
  //   title: "TaskFlow API",
  //   desc: "⚡ Engineered a robust enterprise-grade REST API using ASP.NET Core for comprehensive task management with advanced workflow automation and team collaboration features.\n\n🎯 **Core Features:**\n• RESTful API with full CRUD operations for tasks, projects, and user management\n• JWT-based authentication with role-based authorization and refresh token support\n• Advanced workflow engine supporting custom approval processes and automated task routing\n• Real-time notifications using SignalR for instant updates across team members\n\n🛠️ **Tech Stack & Implementation:**\n• Built with ASP.NET Core 8.0 using Clean Architecture principles and CQRS pattern\n• Entity Framework Core with SQL Server for data persistence and migration management\n• Docker containerization for consistent deployment across development and production\n• Swagger/OpenAPI documentation with comprehensive API testing capabilities\n\n🧪 **Security & Performance:**\n• Implemented comprehensive security measures including input validation, SQL injection prevention, and rate limiting\n• Optimized database performance with proper indexing, query optimization, and connection pooling\n• Integrated with Azure Key Vault for secure configuration management\n\n💡 **Purpose:**\nA showcase of backend development expertise using modern .NET technologies, demonstrating enterprise-level API design, security best practices, and scalable architecture patterns.\n\n🔗 (To add embedded link to API documentation here.)",
  //   skill: "asp.net core, entity framework, jwt authentication, docker, swagger, sql server, signalr, clean architecture, cqrs",
  //   img: "/pictures/api-placeholder.png",
  //   date: "2025-06",
  //   link: "",
  // },
  {
    id: 3,
    title: "Calendar Scheduler",
    desc: "📅 Developed a responsive calendar scheduling platform for the Canadian Engineering Leadership Conferences (CELC), used by over 200+ engineering students across Canada.\n\n🎯 **Core Features:**\n• Personalized schedules per attendee, synced across sessions and devices\n• Real-time updates for event changes or cancellations\n• Drag-and-drop functionality for rearranging sessions\n• Visual color-coding for different event types (Workshops, Panels, Networking)\n\n🛠️ **Tech Stack & Implementation:**\n• Built with React, TailwindCSS, and Supabase for backend services\n• Leveraged dynamic rendering for time blocks to support multiple time zones\n• Integrated with Google Calendar API for external syncing\n\n🧪 **Testing & Deployment:**\n• Utilized Jest and Cypress for frontend testing\n• CI/CD setup using GitHub Actions and Vercel for production deployment\n\n💡 **Impact:**\nThe scheduler replaced legacy paper handouts, increased session attendance tremendously, and significantly improved the coordination of 60+ conference sessions over 5 days.\n\n🔗(To add embedded link to walkthrough here.)",
    skill:
      "react, postgresql, node.js, tailwind.css, html, cloudflare, digital ocean",
    img: "/pictures/cs.png",
    date: "2024-12",
    link: "",
  },
  {
    id: 4,
    title: "Dance XR",
    desc: "💃 Worked at UNB & Spandrel Interactive as a Research Lead Developer on their Dance XR project, a cutting-edge mixed reality platform enabling dancers to capture, edit, and sequence choreography through spatial computing, without the need for markers or suits.\n\n🎯 **Contribution:**\n• Implemented markerless motion capture using an AI-based pose estimation model\n• Applied real-time skeletal rigging using Unity’s Animation Rigging & IK system\n• Developed a robust communication layer between the Unity client and the model server for continuous data streaming\n• Designed and implemented back-end architecture to support markerless tracking and perform complex calculations for real-world position estimation\n\n**Core Features:**\n• A markerless motion capture powered by Kinect initially\n• Real-time skeletal rig application using Unity’s Animation Rigging & IK\n• Hands-free editing tools via gesture and voice inputs\n• Timeline-based sequencer to blend and loop recorded moves\n• HoloLens 2 support\n\n🛠️ **Tech Stack & Implementation:**\n• Built in Unity (C#) \n• AI model trained for real-time body tracking from RGB input \n• Performance-optimized for complex motion handling\n\n🧪 **Testing & Workflow:**\n• Play Mode tests for interaction flows and scene persistence\n• Recorded and reviewed motion sessions to validate rig fidelity\n• Worked closely with dancers, testing and adjusting features based on their feedback to improve the experience\n\n💡 **Impact:**\nDance XR empowers choreographers and performers by turning creative ideas into movement, allowing them to bring their visions to life in immersive space.\n\n🔗(To add embedded link to walkthrough here.)",
    skill:
      "mixed reality, c#, hololens, quest 3, inverse kinematic, animation rigging, motion capture, spatial computing, pose-estimation",
    img: "/pictures/dxr.jpg",
    date: "2024-2025",
    link: "",
  },
  {
    id: 5,
    title: "Tactix Haptic Glove",
    desc: "🧤 Developed an immersive mixed reality environment for a haptic glove system, enabling users to experience realistic tactile feedback when interacting with virtual objects.\n\n🎯 **Contributions:**\n• Built the interactive environment in Unity (C#) where the glove was used for testing and demos\n• Created a custom C++ driver to integrate the glove with SteamVR\n• Supported the successful connection between the glove's SDK and VR systems to enable seamless interaction\n\n🎯 **Core Features:**\n• Real-time tactile feedback mapped to finger-specific interactions\n• Object manipulation with natural gesture-based control\n• Visual and haptic alignment for high-fidelity touch simulation\n• Interactive demos showcasing texture, weight, and resistance variations\n\n🛠️ **Tech Stack & Implementation:**\n• Built with Unity (C#) using an MVC architecture for modular design\n• Leveraged event-driven programming for responsive haptic triggering\n• Developed custom GUI elements for testing grip force and responsiveness\n• Integrated glove SDKs with Unity’s physics and input systems\n\n🧪 **Impact:**\nThis prototype redefined how users physically engage with digital environments, blending lifelike experiences with easy-to-use design to create more natural and meaningful ways to interact with technology.\n\n🎓 **Presentation:**\nThe project was presented at the Final Year Capstone project Symposium at UNB in 2024.\n\n🔗 (To add embedded link to walkthrough here.)",
    skill:
      "mvc, c++, human-computer interaction, custom driver, graphical user interface, object-oriented programming, user experience, mixed reality ",
    img: "/pictures/tac.jpeg",
    date: "2024-04",
    link: "",
  },
  {
    id: 6,
    title: "Robots in the home",
    desc: "🤖 Conducted a behavioral research study as part of my work as a Research Associate at UNB with Dr.Rea, I explored how neurotic behaviors in autonomous robots influence human willingness to maintain and assist them over time.\n\n🧪 **Study Design & Methodology:**\n• Designed a remote-controlled autonomous robot exhibiting varied emotional traits using Kotlin\n• Developed a companion mobile app enabling participants to interact with and monitor the robot\n• Performed experimental trials involving human subjects in both physical and teleoperation contexts\n• Analyzed qualitative and quantitative feedback to assess empathy, trust, and fatigue levels\n\n📊 **Analysis & Insights:**\n• Observed significant variance in user behavior based on robot 'neuroticism' levels\n• Correlated user perceptions of emotional realism with their likelihood of long-term engagement\n• Discovered nuanced human behavior patterns when robots expressed dependency or distress\n\n🛠️ **Tech Stack & Tools:**\n• Custom-built robot system using ROS and Python for behavior scripting\n• Remote interface built for multi-device compatibility and event logging\n• Applied mixed-method analysis for human-subject data collection and behavioral coding\n\n🎓 **Academic Contribution:**\nAccepted and published at **IEEE RO-MAN 2025**, contributing to emerging research on emotional modeling in human-robot relationships and ethical design for robot behavior.\n\n🔗 To add link to paper submission here",
    skill:
      "human-robot interaction, Kotlin, human behavior, autonomous robotics, teleoperation, experiment design, qualitative/quantitative analysis ",
    img: "/pictures/room.png",
    date: "2023-12",
    link: "",
  },
  {
    id: 7,
    title: "Crosshair Hue: Targeting Perception Variations",
    desc: "🎯 Conducted an experimental UX study investigating how variations in crosshair color schemes impact target acquisition and background distinction in interactive environments.\n\n🔬 **Objective & Scope:**\n• Evaluated color perception and its influence on player response times and accuracy\n• Designed multiple crosshair configurations with variable hue, including a color blindness mode that was discussed but not fully tested due to limited participant availability\n• Simulated dynamic background environments to mimic in-game lighting or real world environments\n\n🧪 **Study Design & Testing:**\n• Developed an interactive testing platform using the Model-View-Controller (MVC) pattern\n• Incorporated real-time feedback loops for measuring hit accuracy and user reaction\n• Collected user performance data across randomized visual scenarios\n• Analyzed participant responses using both quantitative metrics and user surveys\n\n🛠️ **Tech Stack & UX Implementation:**\n• Built using C# and Unity with a focus on intuitive GUI and user flow\n• Implemented event-driven architecture to handle target spawning and interaction logging\n• Employed object-oriented design principles to modularize visual and behavioral components\n\n📘 **Outcome:**\nThe study demonstrated measurable differences in user effectiveness based on crosshair hues and background conditions. Findings were compiled into a research paper presented for academic evaluation as part of an HCI course project.",
    skill:
      "mvc, human-computer interaction, event handling, graphical user interface, object-oriented programming, user experience, mixed reality ",
    img: "/pictures/cross.png",
    date: "2023-03",
    link: "",
  },
  {
    id: 8,
    title: "Earth Defense",
    desc: "🌍 Developed an immersive tower defense game where players assume the role of a guardian angel tasked with saving Earth from environmental collapse caused by human activities such as wildfires, pollution, overfishing, oil spills, and reckless mining.\n\n🕹️ **Gameplay & Narrative:**\n• Strategically deploy eco-friendly defenses to combat waves of man-made disasters\n• Each environmental threat presents unique attack patterns and long-term effects\n• Player choices shape the Earth's fate through a dynamic interactive narrative\n• Offers moral dilemmas: sacrifice resources now or save them for future challenges?\n\n🎮 **Core Mechanics & Systems:**\n• Real-time strategy combined with resource management to upgrade defenses and unlock new eco-technologies\n• Unique levels themed around different ecosystems (oceans, forests, arctic, deserts)\n\n🛠️ **Design & Technical Stack:**\n• Built in Unity with custom systems for dynamic event progression and AI pathfinding\n• Integrated player decision-making mechanics that influence branching storylines\n• Leveraged Unity’s UI toolkit to visualize global impact and in-game moral score\n\n💡 **Impact:**\nDesigned to raise awareness about environmental issues through engaging gameplay and thoughtful worldbuilding, encouraging players to consider the consequences of inaction.\n\n🔗 (To add link to game here.)",
    skill:
      "unity, thematic storytelling, player decision-making, strategy, resource management, interactive narrative, dynamic game states",
    img: "/pictures/earth.png",
    date: "2023-03",
    link: "",
  },
  {
    id: 9,
    title: "SoundSky Streaming Service",
    desc: "🌐 Designed and developed a modern single-page music streaming web application using the MVVM architectural pattern with Vue.js, HTML, and SQL.\n\n🛠️ **Core Features & Architecture:**\n• Built with RESTful API integration for seamless frontend–backend communication\n• Implemented full CRUD operations for dynamic user interaction with playlists and tracks\n\n💻 **Tech Stack:**\n• Vue.js for dynamic rendering and state management\n• SQL for user storage and efficient query handling\n• Employed clean MVVM separation for scalability and maintainability\n\n💡 **Impact:**\nCreated with usability and scalability in mind, SoundSky delivers a polished interface and intuitive controls, making music discovery and playlist management enjoyable for users.(...and yes, it is a replica of soundcloud)\n\n🔗 (To add link to demo or GitHub)",
    skill:
      "spa, mvvm, vue.js, rest api, database management, client-server model, sql",
    img: "/pictures/sound.png",
    date: "2023-23",
    link: "",
  },
  {
    id: 10,
    title: "Virtual Piano",
    desc: "🎼 Developed a fully interactive piano application using JavaFX, enabling users to play notes via keyboard or mouse with real-time visual and audio feedback.\n\n🖱️ **Interaction & UI Design:**\n• Built with MVC architecture for a clean separation of logic and UI layers\n• Theme selector allows users to switch between seasonal visual styles\n• Responsive layout and input handling for fluid playability\n\n🛠️ **Core Technical Highlights:**\n• Event handling for both key and click-based input\n• Designed a customizable interface for enhanced accessibility and aesthetic flexibility\n\n🔗 (To add link to demo or GitHub)", ///We will add the link for demo here,as one extra part of the projects json
    skill:
      "java fx, mvc, event handling, graphical user interface, user interaction, customizable interface",
    img: "/pictures/piano.png",
    date: "2021-11",
    link: "",
  },
  {
    id: 11,
    title: "Puzzle Box",
    desc: "🚀 Created a fast-paced 2D platformer game in Unity, inspired by **Geometry Dash**, focusing on responsive gameplay and a fun time.\n\n🕹️ **Gameplay & Visuals:**\n• Designed multiple challenging levels with reset mechanics, dynamic volume control, and HUD-based feedback\n• Developed custom sprites and animations from scratch for a distinct visual identity\n• Level selector UI and in-game performance tuning tools included\n\n🛠️ **Core Systems & Tools:**\n• Unity 2D environment with tilemaps and layered collision systems\n• Integrated game loop logic for resets, scoring, and progress tracking\n• Implemented user-friendly menu navigation and options customization\n\n💡 **Impact:**\nA passion-driven project showcasing creativity in both art and development, PuzzleBox merges nostalgic platforming with modern design principles to create an addictively replayable experience. You can try to speed run it...if you dare?\n\n🔗 (To add link to game or GitHub)",
    skill:
      "Unity, 2D platformer, tile maps, custom sprites, game development, level design, geometry dash inspired",
    img: "/pictures/puzzle.png",
    date: "2022-04",
    link: "",
  },
];

export default projects;
