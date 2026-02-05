export default function Heart({ likes, handleLike }) {
  return (
    <button className="like-btn" onClick={handleLike}>
      ❤️ {likes}
    </button>
  );
}
