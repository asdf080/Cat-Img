import React from "react";

const Form = (props) => {
  const [value, setValue] = React.useState("");
  const includesHangul = (text) => /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/i.test(text);
  const [errorMsg, setErrorMsg] = React.useState("");
  function handleInputChg(e) {
    const userValue = e.target.value;
    setErrorMsg("");
    setValue(userValue.toUpperCase());
    if (includesHangul(userValue)) setErrorMsg("한글은 입력 불가");
  }

  function handleS(e) {
    e.preventDefault();
    setErrorMsg("");
    if (value === "") {
      setErrorMsg("빈 값으로 생성 불가");
      return;
    }
    props.updateCat(value);
  }
  return (
    <form onSubmit={handleS}>
      <input
        type="text"
        name="name"
        placeholder="영어 대사를 입력해주세요"
        onChange={handleInputChg}
        value={value}
      />
      <button type="submit">생성</button>
      <p style={{ color: "red" }}>{errorMsg}</p>
    </form>
  );
};

export default Form;
