import React from 'react';
import { useRecoilState } from 'recoil';
import { toDoState } from '@/atoms';
import CreateToDo from './CreateDoTo';
import ToDo from './ToDo';

const ToDoList = () => {
  const [toDos] = useRecoilState(toDoState);
  return (
    <>
      <h1>To Dos</h1>
      <CreateToDo />
      <ul>
        {toDos.map((toDo) => (
          // <ToDo text={toDo.text} category={toDo.category} id={toDo.id} />
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
    </>
  );
};

export default ToDoList;
