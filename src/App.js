// '../' = 상위폴더, './' = 현재폴더
import './App.css';
import TodoHeader from './component/TodoHeader';
import TodoMain from './component/TodoMain';
import TodoList from './component/TodoList';
//import TodoItem from './component/TodoItem';
import TodoStatus from './component/TodoStatus';
import TodoFooter from './component/TodoFooter';
import { useState, useRef, useEffect } from 'react';
import axios from 'axios';

export const baseURL = 'http://localhost:3000';

function App() {
  //
  //
  // 주소 aws DNS로 바꿔서 해보기
  //
  //
  // 기본 데이터(객체) 배열
  const [todoArray, setTodoArray] = useState([]);

  // 기본 데이터 배열의 추가/삭제를 위한 객체 변수
  const [todoInput, setTodoInput] = useState({
    todoContent: '',
  });

  useEffect(() => {
    console.log('최초 1회 실행.');
    // url : /lists
    // method : get
    axios({
      method: 'GET',
      url: `${baseURL}/lists`,
    })
      .then((response) => {
        const result = response.data.data; //{id:0, todoContent:'내일 할일'}
        setTodoArray(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // 구조분해할당
  const { todoContent } = todoInput;

  const getAllData = async () => {
    const response = await axios({
      method: 'GET',
      url: `${baseURL}/lists`,
    });
    const result = response.data.data;
    return result;
  };

  // input에 텍스트 입력시 carInput에 데이터 업데이트, 화면에 텍스트 표시 리렌더링하는 함수
  const changeTodo = (e) => {
    const { name, value } = e.target;
    setTodoInput({
      ...todoInput,
      [name]: value,
    });
  };

  // 버튼 클릭시 input에 입력되어 있는 텍스트를 기본 데이터 배열에 추가 / 리렌더링
  // async 쓰는 방법 -> promise관련 문법
  const addTodo = async () => {
    // 기본 데이터 배열에 넣어줄 객체
    const newTodo = {
      todoContent: todoContent,
    };

    // method : post
    // url : /lists
    // body : {id, todoContent}
    // async 써서 위에 axios와는 살짝 적는 방법이 다름
    try {
      const response = await axios({
        method: 'POST',
        url: `${baseURL}/lists`,
        data: newTodo,
      });
      if (response.status === 200) {
        const result = await getAllData();
        console.log(result);
        setTodoArray(result);
        setTodoInput({
          todoContent: '',
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const removeTodo = async (id) => {
    // method : delete
    // url : /lists/:id
    try {
      const response = await axios({
        method: 'DELETE',
        url: `${baseURL}/lists/${id}`,
      });
      if (response.status === 200) {
        const result = await getAllData();
        console.log(result);
        setTodoArray(result);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <TodoHeader
        todoContent={todoContent}
        changeTodo={changeTodo}
        addTodo={addTodo}
      />
      <TodoMain>
        <TodoList
          todoArray={todoArray}
          removeTodo={removeTodo}
          setTodoArray={setTodoArray}
          getAllData={getAllData}
        />
        <TodoStatus todoArray={todoArray} />
      </TodoMain>
      <TodoFooter />
    </>
  );
}

export default App;
