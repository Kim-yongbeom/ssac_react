import todolist from '../css/todolist.module.css';
import todoItem from '../css/todoitem.module.css';
import { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { baseURL } from '../App';

function TodoItem({ todo, removeTodo, setTodoArray }) {
  const editInputRef = useRef(null);

  const [edited, setEdited] = useState(false);
  const [newText, setNewText] = useState(todo.todoContent);
  // mark 태그를 클릭했을 때 , edited = true 가 되면서 input창이 나오게 한다
  // input에 focus 넣어줘야 한번에 수정모드 가능 ref={editInputRef}

  // 수정할 텍스트를 적고, enter키(onKeyPress)를 눌렀을 때 통신을 진행하고, 새로운 배열값을 결과값으로 받은 후
  // 이를 todoArr에 적용 (setTodoArray)

  useEffect(() => {
    if (edited) {
      editInputRef.current.focus();
    }
  }, [edited]); // 뒤에 [] 빈칸이면 렌더링될 때 처음 한번만 출력 , ex) [test] 이면 test가 들어올 때 출력

  const onClickEdit = () => {
    setEdited(true); //비동기라 밑에 ref가 값이 받아지지 않는다.
  };
  const onChangeEditInput = (event) => {
    const { name, value } = event.target;
    setNewText(value);
  };

  const onPressSubmit = async (id) => {
    try {
      const enterTodo = {
        idx: id,
        todoContent: newText, // 수정할 텍스트
      };
      const response = await axios({
        method: 'PUT',
        url: `${baseURL}/lists/${id}`, // App.js에서 전체적으로 주소 변수 설정해줌
        data: enterTodo,
      });
      const result = response.data.data;
      console.log(response.data);
      setTodoArray(result);
      setEdited(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <li className={todoItem['todo-item']}>
      <input type="checkbox" className={todoItem.check} />
      {edited ? (
        <input
          ref={editInputRef}
          value={newText}
          className={todoItem.edit_input}
          onChange={onChangeEditInput}
          onKeyPress={(event) => {
            if (event.key === 'Enter') {
              onPressSubmit(todo.id);
            }
          }}
        />
      ) : (
        <mark className={todoItem.text} onClick={onClickEdit}>
          {todo.todoContent}
        </mark>
      )}

      <button
        type="button"
        className={todoItem.del}
        onClick={function () {
          return removeTodo(todo.id);
        }}
      >
        <img src="add_button.svg" alt="" className={todoItem.img} />
      </button>
    </li>
  );
}
function TodoList({ todoArray, removeTodo, setTodoArray }) {
  return (
    <section className={todolist.section}>
      <ul className="todo-list">
        {todoArray.map(function (todo) {
          return (
            <TodoItem
              todo={todo}
              key={todo.id}
              removeTodo={removeTodo}
              setTodoArray={setTodoArray}
            />
          );
        })}
      </ul>
    </section>
  );
}

export default TodoList;
