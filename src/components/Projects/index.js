import React from "react";

export default function Projects() {
  const projectList = [
    {
      title: "Jibber Jabber",
      gitLink: "https://github.com/yasharjs/Jibber-Jabber",
      liveLink: "https://jibber-jabber-app.herokuapp.com/",
      imgLink: "JibberJabber.png",
    },

    {
      title: "Run Buddy",
      gitLink: "https://github.com/yasharjs/run-buddy",
      liveLink: "https://yasharjs.github.io/run-buddy/",
      imgLink: "runbuddy.png",
    },
    {
      title: "Tech Blog",
      gitLink: "https://github.com/yasharjs/tech-blog",
      liveLink: "hhttps://obscure-citadel-57604.herokuapp.com/",
      imgLink: "techblog.png",
    },
    {
      title: "Weather Dashboard",
      gitLink: "https://github.com/yasharjs/weather-dashboard",
      liveLink: "https://yasharjs.github.io/weather-dashboard/",
      imgLink: "weather-dashboard.png",
    },
    {
      title: "Note Taker",
      gitLink: "https://github.com/yasharjs/note-taker",
      liveLink: "https://sheltered-taiga-20597.herokuapp.com/",
      imgLink: "note-taker.png",
    },
    {
      title: "TaskMaster Pro",
      gitLink: "https://github.com/yasharjs/taskmaster-pro",
      liveLink: "https://yasharjs.github.io/taskmaster-pro/",
      imgLink: "taskmaster.png",
    },
  ];
  return (
    <div className="lg:flex lg:flex-wrap justify-evenly p-2">
      {projectList.map((p, i) => {
        return (
          <div className="projDiv p-2 m-2">
            <div className="mb-2 text-2xl font-medium text-center">{p.title}</div>
            <img
              className="projImg lg:h-80 lg:w-full"
              key={i}
              src={require(`../../assets/images/${p.imgLink}`)}
              alt={p.name}
            ></img>
            <div className="linkBtn">
            <button ><a href={p.gitLink}>GitHub Repo</a></button>
            <button ><a href={p.liveLink}>Live Site!</a></button>
            </div>
       
          </div>
        );
      })}
    </div>
  );
}
