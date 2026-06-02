import { useEffect, useRef, useState } from 'react';
import PageHeader from '../components/PageHeader.jsx';
import StreamCard from '../components/StreamCard.jsx';
import { streams } from '../data/streams.js';
import { loadFromStorage, saveToStorage } from '../utils/storage.js';

const STORAGE_KEY = 'fightiq-stream-comments';

export default function LocalFightStreams() {
  const [selectedStream, setSelectedStream] = useState(streams[0]);
  const [comments, setComments] = useState({});
  const [commentText, setCommentText] = useState('');
  const iframeRef = useRef(null);

  const getAutoplaySrc = (videoUrl) => {
    // YouTube embed supports autoplay and mute params; we use mute so autoplay works more reliably.
    try {
      const u = new URL(videoUrl);
      u.searchParams.set('autoplay', '1');
      u.searchParams.set('mute', '1');
      u.searchParams.set('rel', '0');
      return u.toString();
    } catch {
      return `${videoUrl}?autoplay=1&mute=1&rel=0`;
    }
  };

  // Start playing immediately when the user opens this tab.
  const [iframeSrc, setIframeSrc] = useState(() => getAutoplaySrc(streams[0]?.videoUrl));

  useEffect(() => {
    setComments(loadFromStorage(STORAGE_KEY, {}));
  }, []);

  useEffect(() => {
    saveToStorage(STORAGE_KEY, comments);
  }, [comments]);

  const streamComments = comments[selectedStream.id] || [];

  // Auto-play the selected stream when switching cards.
  useEffect(() => {
    setIframeSrc(getAutoplaySrc(selectedStream.videoUrl));
  }, [selectedStream]);

  // Ensure video stops when navigating away from this route.
  useEffect(() => {
    return () => {
      if (iframeRef.current) iframeRef.current.src = 'about:blank';
    };
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!commentText.trim()) return;

    const newComment = {
      id: crypto.randomUUID(),
      text: commentText.trim(),
      time: new Date().toLocaleTimeString()
    };

    setComments((current) => ({
      ...current,
      [selectedStream.id]: [...(current[selectedStream.id] || []), newComment]
    }));
    setCommentText('');
  };

  return (
    <div className="page">
      <PageHeader eyebrow="Local Stream Simulation" title="Local Fight Streams" text="Select a local fight card, watch a placeholder stream, and write comments saved per match." />
      <div className="layout streams-layout">
        <section className="stream-list">
          {streams.map((stream) => (
            <StreamCard key={stream.id} stream={stream} selected={selectedStream.id === stream.id} onSelect={setSelectedStream} />
          ))}
        </section>

        <section className="card stream-viewer">
          <div className="stream-header">
            <span className="badge">{selectedStream.status}</span>
            <h2>{selectedStream.eventName}</h2>
            <p>{selectedStream.fighters} · {selectedStream.date}</p>
          </div>
          <div className="video-frame">
            <iframe
              ref={iframeRef}
              src={iframeSrc}
              title={selectedStream.eventName}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <p>{selectedStream.description}</p>

          <div className="comments-section">
            <h3>Match Comments</h3>
            <form className="comment-form" onSubmit={handleSubmit}>
              <input value={commentText} onChange={(e) => setCommentText(e.target.value)} placeholder="Write a live reaction..." />
              <button className="primary-btn" type="submit">Send</button>
            </form>
            <div className="comments-list">
              {streamComments.length === 0 ? <p className="muted">No comments for this match yet.</p> : streamComments.map((comment) => (
                <div className="comment" key={comment.id}>
                  <span>{comment.text}</span>
                  <small>{comment.time}</small>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
