import axios from "axios";
import React from "react";
import { atom, selector, useRecoilValue } from "recoil";

const todoIdstate = atom({
  key: "todoIdState",
  default: 1,
});

const todoItemQuery = selector({
  key: "todoItemQuery",
  get: async ({ get }) => {
    const id = get(todoIdstate);

    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/todos/${id}`
    );

    return res.data;
  },
});

function App() {
  const data = useRecoilValue(todoItemQuery);

  return (
    <div>
      {data.title}
      {data.userId}
    </div>
  );
}
export default App;
