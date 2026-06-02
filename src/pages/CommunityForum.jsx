import { useEffect, useState } from 'react';
import PageHeader from '../components/PageHeader.jsx';
import PostForm, { initialForm } from '../components/PostForm.jsx';
import PostCard from '../components/PostCard.jsx';
import { loadFromStorage, saveToStorage } from '../utils/storage.js';

const STORAGE_KEY = 'fightiq-forum-posts';

export default function CommunityForum() {
  const [posts, setPosts] = useState([]);
  const [formData, setFormData] = useState(initialForm);
  const [editingPostId, setEditingPostId] = useState(null);

  useEffect(() => {
    setPosts(loadFromStorage(STORAGE_KEY, []));
  }, []);

  useEffect(() => {
    saveToStorage(STORAGE_KEY, posts);
  }, [posts]);

  const resetForm = () => {
    setFormData(initialForm);
    setEditingPostId(null);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (editingPostId) {
      setPosts((current) => current.map((post) => post.id === editingPostId ? { ...post, ...formData } : post));
      resetForm();
      return;
    }

    const newPost = {
      id: crypto.randomUUID(),
      ...formData,
      createdAt: new Date().toLocaleString()
    };
    setPosts((current) => [newPost, ...current]);
    resetForm();
  };

  const handleEdit = (post) => {
    setEditingPostId(post.id);
    setFormData({ name: post.name, title: post.title, category: post.category, content: post.content });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = (id) => {
    setPosts((current) => current.filter((post) => post.id !== id));
    if (editingPostId === id) resetForm();
  };

  return (
    <div className="page">
      <PageHeader eyebrow="Community" title="Training Forum" text="Share training experiences and demonstrate full CRUD with localStorage persistence." />
      <div className="layout two-column wide-left">
        <section>
          <PostForm
            formData={formData}
            setFormData={setFormData}
            onSubmit={handleSubmit}
            editingPostId={editingPostId}
            onCancel={resetForm}
          />
        </section>
        <aside className="card stats-card">
          <h3>Forum Stats</h3>
          <p><strong>{posts.length}</strong> local posts saved</p>
          <p>Data persists in your browser using localStorage.</p>
        </aside>
      </div>

      <section className="section">
        <div className="section-title compact-title">
          <h2>All Posts</h2>
          <span className="badge">Read · Update · Delete</span>
        </div>
        {posts.length === 0 ? (
          <div className="card empty-state">No posts yet. Create the first training note.</div>
        ) : (
          <div className="grid two">
            {posts.map((post) => <PostCard key={post.id} post={post} onEdit={handleEdit} onDelete={handleDelete} />)}
          </div>
        )}
      </section>
    </div>
  );
}
