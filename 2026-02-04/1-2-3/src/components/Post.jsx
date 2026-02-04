export default function Post({ author, content }) {
  return (
    <div>
      <h2>Post</h2>
      <p>저자 : {author}</p>
      <p>직업 : {content}</p>
    </div>
  );
}
