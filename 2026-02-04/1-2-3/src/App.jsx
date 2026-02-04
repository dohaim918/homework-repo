import Post from "./components/Post";
import ProfileCard from "./components/ProfileCard";

export default function App() {
  return (
    <div className="container">
      <ProfileCard name="김도하" age="26" job="디발자가 되고 싶은 Dev-린이 🌱" />
      <Post author="김도하" content="자스에 이어서 리액트.. 행복하다..ㅎ" />
    </div>
  );
}
