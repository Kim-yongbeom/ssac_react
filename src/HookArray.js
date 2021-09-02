// 하나의 component 파일에 여러개 component 작성
// map 함수 사용

function ListItem({ value }) {
  return (
    <li>
      {value.name} : {value.color}
    </li>
  );
}

function HookArray({ carArray }) {
  return (
    <ul>
      {carArray.map((car) => {
        return <ListItem value={car} key={car.id} />;
      })}
    </ul>
  );
}

export default HookArray;
