export default function ProfileCard({ name, age, job }) {
  return (
    <div>
      <h2>ProfileCard</h2>
      <p>이름 : {name}</p>
      <p>나이 : {age}</p>
      <p>직업 : {job}</p>
    </div>
  );
}
