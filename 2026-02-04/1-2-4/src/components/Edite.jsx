import { useState } from "react";

export default function Edite({ isDark, toggleTheme }) {
  const [isEdite, setEdite] = useState(true);
  const [name, setName] = useState("김도하");
  const [content, setContent] = useState("디발자가 되고 싶은 데린이 🌱");

  const MAX_LENGTH = 20;

  const handleEdite = () => setEdite((prev) => !prev);
  const handleName = (e) => setName(e.target.value);

  const handleContent = (e) => {
    const value = e.target.value;
    if (value.length > MAX_LENGTH) return;
    setContent(value);
  };

  return (
    <>
      <div>
        <h2>{isEdite ? "Profile" : "Edit Profile"}</h2>
        {isEdite ? (
          <div className="input-container">
            <p>이름 : {name}</p>
            <p>상태 메시지 : {content}</p>
            <p className="none">20자 이내로 작성해주세요! ( {content.length} / 20 )</p>
          </div>
        ) : (
          <div className="input-container">
            <p>
              이름 : <input value={name} placeholder="이름을 입력하세요" onChange={handleName} />
            </p>
            <p>
              상태 메시지 :
              <input value={content} placeholder="내용을 입력하세요" onChange={handleContent} />
            </p>
            <p
              className="error"
              style={{ color: content.length == MAX_LENGTH ? "red" : "inherit" }}
            >
              20자 이내로 작성해주세요! ( {content.length} / {MAX_LENGTH} )
            </p>
          </div>
        )}
      </div>
      <div className="btn-group">
        <button onClick={toggleTheme}>{isDark ? "🌙 Dark Mode 🌙" : "☀️ Light Mode ☀️"}</button>
        <button onClick={handleEdite}>{isEdite ? "Edit" : "Save"}</button>
      </div>
    </>
  );
}
