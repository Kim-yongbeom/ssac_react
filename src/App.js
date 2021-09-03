// '../' = 상위폴더, './' = 현재폴더
import './App.css';
import TodoHeader from './component/TodoHeader';
import TodoMain from './component/TodoMain';
import TodoList from './component/TodoList';
import TodoItem from './component/TodoItem';
import TodoStatus from './component/TodoStatus';
import TodoFooter from './component/TodoFooter';
import { useState, useRef } from 'react';

function App() {
  // 기본 데이터(객체) 배열
  const [todoArray, setTodoArray] = useState([
    {
      id: 1,
      todoContent: '할일 1',
    },
    {
      id: 2,
      todoContent: '할일 2',
    },
    {
      id: 3,
      todoContent: '할일 3',
    },
  ]);

  // 기본 데이터 배열의 추가/삭제를 위한 객체 변수
  const [todoInput, setTodoInput] = useState({
    todoContent: '',
  });

  // 구조분해할당
  const { todoContent } = todoInput;

  // input에 텍스트 입력시 carInput에 데이터 업데이트, 화면에 텍스트 표시 리렌더링하는 함수
  const changeTodo = (e) => {
    const { name, value } = e.target;
    setTodoInput({
      ...todoInput,
      [name]: value,
    });
  };

  // useRef에 매개변수 값을 넣어주면 해당 값이 current property 값으로 설정
  const nextId = useRef(4);

  const [number, setNumber] = useState(todoArray.length);

  // 버튼 클릭시 input에 입력되어 있는 텍스트를 기본 데이터 배열에 추가 / 리렌더링
  const addTodo = () => {
    // 기본 데이터 배열에 넣어줄 객체
    const newTodo = {
      id: nextId.current,
      todoContent: todoContent,
    };
    setTodoArray([...todoArray, newTodo]);
    setTodoInput({
      todoContent: '',
    });

    setNumber(number + 1);

    nextId.current++;
  };

  const removeTodo = (id) => {
    // filter 내장 함수 : 조건에 맞는 데이터만 추출해서 새로운 데이터(배열) 생성
    setTodoArray(
      todoArray.filter(function (todo) {
        return todo.id !== id;
      }),
    );
    setNumber(number - 1);
  };

  return (
    <>
      <TodoHeader
        todoContent={todoContent}
        changeTodo={changeTodo}
        addTodo={addTodo}
      />
      <TodoMain>
        <TodoList todoArray={todoArray} removeTodo={removeTodo} />
        <TodoStatus number={number} />
      </TodoMain>
      <TodoFooter />
    </>
  );
}

export default App;
