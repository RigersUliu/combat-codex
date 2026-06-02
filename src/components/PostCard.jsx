export default function PostCard({ post, onEdit, onDelete }) {
  return (
    <article className="post-card card">
      <div className="post-head">
        <span className="badge">{post.category}</span>
        <small>{post.createdAt}</small>
      </div>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      <div className="post-footer">
        <strong>By {post.name}</strong>
        <div className="button-row compact">
          <button className="ghost-btn" onClick={() => onEdit(post)}>Edit</button>
          <button className="danger-btn" onClick={() => onDelete(post.id)}>Delete</button>
        </div>
      </div>
    </article>
  );
}
