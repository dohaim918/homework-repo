import { useState } from "react";

export default function SignupForm() {
  const [form, setForm] = useState({
    email: "",
    pw: "",
    pwConfirm: "",
  });
  const [isEmail, setIsEmail] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [isAgree, setIsAgree] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);

  // 인풋 이벤트
  const handleInput = (e) => {
    const { id, value } = e.target;
    setForm((prev) => ({ ...prev, [id]: value }));

    // 이메일 입력시 에러 문구 초기화
    if (id === "email") {
      setIsEmail(false);
      setEmailError("");
    }
  };

  // 체크박스 이벤트
  const handleIsAgree = (e) => setIsAgree(e.target.checked);

  // 제출 이벤트
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmit(true);

    if (!isEmail) {
      setEmailError("이메일 중복 확인을 해주세요");
      return;
    }
    if (form.pw === "" || form.pw !== form.pwConfirm || !isAgree) {
      return;
    }
    alert("가입 성공");
  };

  const isValidEmail = (value) => value.includes("@") && value.includes(".");

  const handleEmail = () => {
    if (form.email == "") {
      setEmailError("이메일을 입력해주세요");
      return;
    }

    if (!isValidEmail(form.email)) {
      setEmailError("이메일 형식이 올바르지 않습니다");
      return;
    }

    if (form.email == "user@test.com") {
      setEmailError("이미 사용중인 이메일입니다");
      return;
    }

    setIsEmail(true);
    setEmailError("사용 가능한 이메일입니다");
  };

  return (
    <div className="card">
      <h2>회원 가입</h2>
      <form onSubmit={handleSubmit}>
        <div className="from-group">
          <label htmlFor="email">이메일</label>
          <div className="email-wrapper">
            <input
              type="email"
              id="email"
              value={form.email}
              placeholder="이메일을 입력해 주세요"
              className={emailError && (isEmail ? "success" : "error")}
              onChange={handleInput}
            />
            <button type="button" className="check-btn" onClick={handleEmail}>
              중복확인
            </button>
          </div>
          {emailError && (
            <p className={`message  ${isEmail ? "success" : "error"}`}>{emailError}</p>
          )}
        </div>

        <div className="from-group">
          <label htmlFor="pw">비밀번호</label>
          <input
            type="password"
            id="pw"
            value={form.pw}
            className={isSubmit && form.pw === "" ? "error" : ""}
            placeholder="비밀번호을 입력해 주세요"
            onChange={handleInput}
          />
          {isSubmit && form.pw === "" && <p className="message error">비밀번호를 입력해 주세요</p>}
        </div>

        <div className="from-group">
          <label htmlFor="pwConfirm">비밀번호 확인</label>
          <input
            type="password"
            id="pwConfirm"
            value={form.pwConfirm}
            placeholder="비밀번호을 입력해 주세요"
            className={isSubmit && form.pw !== form.pwConfirm ? "error" : ""}
            onChange={handleInput}
          />
          {isSubmit && form.pw !== form.pwConfirm && (
            <p className={"message error"}>비밀번호가 일치하지 않습니다</p>
          )}
        </div>

        <div className="checkbox-group">
          <div className="chechbox">
            <input type="checkbox" id="agree" checked={isAgree} onChange={handleIsAgree} />
            <label htmlFor="agree">이용약관에 동의합니다</label>
          </div>
          {isSubmit && !isAgree && <p className="message error">약관에 동의해주세요</p>}
        </div>
        <button type="submit" className="submit-btn">
          가입하기
        </button>
      </form>
    </div>
  );
}
