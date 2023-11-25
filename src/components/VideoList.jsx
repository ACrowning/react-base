const videos = [
  { name: "Замыкания От и До", duration: "15", id: 1 },
  {
    name: "Роадмеп по JS",
    duration: "15",
    id: 2,
  },
  {
    name: "Что такое фронтэнд",
    duration: "15",
    id: 3,
  },
  {
    name: "Что такое фронтэнд 2",
    duration: "10",
    id: 4,
  },
];

export function VideoList() {
  return (
    <>
      <h1>Video List</h1>
      {videos.map((video) => {
        return (
          <div key={video.id}>
            <p>{video.name}</p>
            <p>{video.duration}</p>
            <button>Лайк!</button>
          </div>
        );
      })}
    </>
  );
}
