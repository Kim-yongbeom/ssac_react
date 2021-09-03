// 하나의 component 파일에 여러개 component 작성
// map 함수 사용
function ListItem({ car, removeText }) {
  return (
    <li>
      <span>
        {car.carname} : {car.color}
      </span>
      <button
        type="button"
        onClick={function () {
          return removeText(car.id);
        }}
      >
        삭제
      </button>
    </li>
  );
}

function HookArray({ carArray, removeText }) {
  return (
    <ul>
      {carArray.map(function (car) {
        return <ListItem car={car} key={car.id} removeText={removeText} />;
      })}
    </ul>
  );
}

export default HookArray;
