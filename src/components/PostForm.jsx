const initialForm = { name: '', title: '', category: 'General', content: '' };
const categories = ['Boxing', 'MMA', 'BJJ', 'Wrestling', 'Self-defense', 'Fitness', 'General'];

export { initialForm, categories };

export default function PostForm({ formData, setFormData, onSubmit, editingPostId, onCancel }) {
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  return (
    <form className="card form-card" onSubmit={onSubmit}>
      <div className="form-row two-cols">
        <label>
          Name
          <input name="name" value={formData.name} onChange={handleChange} placeholder="Your name" required />
        </label>
        <label>
          Category
          <select name="category" value={formData.category} onChange={handleChange}>
            {categories.map((category) => <option key={category}>{category}</option>)}
          </select>
        </label>
      </div>
      <label>
        Title
        <input name="title" value={formData.title} onChange={handleChange} placeholder="Training lesson or question" required />
      </label>
      <label>
        Content
        <textarea name="content" value={formData.content} onChange={handleChange} placeholder="Share your experience, training note, or question..." required />
      </label>
      <div className="button-row">
        <button className="primary-btn" type="submit">{editingPostId ? 'Update Post' : 'Create Post'}</button>
        {editingPostId && <button className="ghost-btn" type="button" onClick={onCancel}>Cancel</button>}
      </div>
    </form>
  );
}
