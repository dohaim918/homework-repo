export default function Profile() {
  const name = "김도하";
  const curYear = new Date().getFullYear();
  const birthYear = 2000;
  const hobbies = ["코딩", "수면", "여행"];
  const mbti = "INFP";
  return (
    <div className="profile-card">
      <h2 className="profile-name">{name}</h2>
      <hr className="line" />
      <div className="profile-wrap">
        <p className="profile-info">나이 : {curYear - birthYear + 1}</p>
        <p className="profile-info">취미 : {hobbies.join(", ")}</p>
        <p className="profile-info">MBTI : {mbti}</p>
      </div>
    </div>
  );
}
