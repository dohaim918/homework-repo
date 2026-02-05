import { useState } from "react";
import Heart from "./Heart";

export default function ProfileCard() {
  const [isFlipped, setIsFlipped] = useState(false);
  const handleCard = () => setIsFlipped((prev) => !prev);

  const [likes, setLikes] = useState(0);
  const handleLike = (e) => {
    e.stopPropagation();
    setLikes((prev) => prev + 1);
  };

  return (
    <div className={`card ${isFlipped && "flipped"}`} onClick={handleCard}>
      <div className="front">
        <div className="profile">
          <div className="avatar">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="person"
              viewBox="0 0 16 16"
              style={{ width: 60, height: 60 }}
            >
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
              <path
                fillRule="evenodd"
                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
              />
            </svg>
          </div>
          <div className="user">
            <h2>User Name</h2>
            <p>Frontend Dev</p>
          </div>
        </div>
        <Heart likes={likes} handleLike={handleLike} />
      </div>

      <div className="back">
        <div className="user-skills">
          <h2>My Skills</h2>
          <div className="skill-Wrap">
            <span className="skills">React</span>
            <span className="skills">Vue</span>
            <span className="skills">js</span>
          </div>
        </div>
        <Heart likes={likes} handleLike={handleLike} />
      </div>
    </div>
  );
}
