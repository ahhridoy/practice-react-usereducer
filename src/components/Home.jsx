import React from 'react';
import Todos from './Todos';

const todos = [
   {
      id: 1,
      title: "one",
      des: "one is best"
   },
   {
      id: 2,
      title: "one",
      des: "one is best"
   },
   {
      id: 3,
      title: "one",
      des: "one is best"
   },
]

const Home = () => {
   return (
      <div>
         <Todos todos={todos} />
      </div>
   );
};

export default Home;