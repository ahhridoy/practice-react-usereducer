import React from 'react';
import Todo from './Todo';

const Todos = ({todos}) => {
   return (
      <div>
         <h1>Todo App</h1>
         {
            todos.map(todo => (
               <Todo key={todo.id} todo={todo} />
            )) 
         }
      </div>
   );
};

export default Todos;