function HookArrayCreate({ name, color, changeText }) {
  return (
    <div>
      <input
        type="text"
        placeholder="차 이름 입력"
        value={name}
        onChange={changeText}
      />
      <input
        type="text"
        placeholder="차 색 입력"
        value={color}
        onChange={changeText}
      />
      <button type="button">추가</button>
    </div>
  );
}

export default HookArrayCreate;
