export default function VideoList({ videos = [] }) {
  if (!videos.length) return null;

  return (
    <div className="video-list">
      <h3>Recommended learning videos</h3>
      <div className="grid two">
        {videos.map((video) => (
          <a key={video.title} className="video-card card" href={video.url} target="_blank" rel="noreferrer">
            <span className="badge">YouTube</span>
            <h4>{video.title}</h4>
            <p>{video.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
