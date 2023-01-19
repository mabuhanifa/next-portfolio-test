import { FaServer } from "react-icons/fa";
import { IoIosApps } from "react-icons/io";
import { MdWeb } from "react-icons/md";

export const data = [
  {
    id: 1,
    name: "Static Website",
    info: "Static pages are made with plain HTML, CSS and few line of Javascript!. They are also called “client-side” languages because they execute in the user’s web browser. When a user requests a page from the server with a URL, the server returns the HTML file that is specified by the URL and any accompanying CSS and/or JavaScript files.",
    list: [
      "Static Website can be built with vanilla JavaScript,HTML and CSS.",
      "Improved performance for end users compared to dynamic websites.",
      "Static Websites are faster and less complex than web application.",
    ],
    icon: MdWeb,
    tech: [
      { name: "HTML", bg: "#dd4a253f", tx: "#DD4B25" },
      { name: "CSS", bg: "#254add46", tx: "#254BDD" },
      { name: "JavaScript", bg: "#efd61d38", tx: "#EFD81D" },
    ],
  },
  {
    id: 2,
    name: "Single Page Application",
    info: "Single page applications (SPAs) are everywhere. Even if you're not exactly sure what they are, you most likely use them regularly — they're a great tool for making incredibly engaging and unique experiences for website users. A single page application is a website or web application that dynamically rewrites a current web page with new data from the web server.!",
    list: [
      "Single Page Application can be built with React, Redux and others packages with css stylings.",
      "Improved functionality comes with dynamic websites and interactions.",
      "SPA's are complex and has more features than a Static Websites.",
    ],
    icon: IoIosApps,
    tech: [
      { name: "REACT", bg: "#dd4a253f", tx: "#DD4B25" },
      { name: "REACT-ROUTER", bg: "#254add46", tx: "#254BDD" },
      { name: "FIREBASE", bg: "#efd61d38", tx: "#EFD81D" },
    ],
  },
  {
    id: 3,
    name: "Web Application",
    info: "A Web application (Web app) is an application program that is stored on a remote server and delivered over the Internet through a browser interface. Web services are Web apps by definition and many, although not all, websites contain Web apps. Web app are made with multiple technologies and commonly a combination of both frontend and backend.",
    list: [
      "A WEB Application is a combination of frontend and backend technologies.",
      "It can have static pages/Single Page App or combination of both.",
      "Backend technologies are made with API and Database.",
    ],
    icon: FaServer,
    tech: [
      { name: "MONGODB", bg: "#dd4a253f", tx: "#DD4B25" },
      { name: "EXPRESS-JS", bg: "#254add46", tx: "#254BDD" },
      { name: "REACT", bg: "#efd61d38", tx: "#EFD81D" },
      { name: "NODE", bg: "#efd61d38", tx: "#EFD81D" },
    ],
  },
];
