import { useState } from "react";

function Form({ task, setTask }) {
  const [data, setData] = useState({
    title: "",
    content: "",
    status: "todo",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    /* //Update du localStorage
    let taskTmp = task;
    taskTmp.push(data);
    window.localStorage.setItem("task", JSON.stringify(taskTmp)); */

    //Update du state
    setTask((prevTask) => [...prevTask, data]);

    //Set empty form
    setData({
      title: "",
      content: "",
      status: "todo",
    });
  };

  return (
    <>
      <form
        className="flex flex-col w-1/2 max-h-1/2 justify-center"
        onSubmit={(e) => handleSubmit(e)}
      >
        <h2 className="bg-transparent focus:outline-none focus:border-indigo-500 text-base m-auto w-9/12 text-center">
          Ajoutez vos tâches
        </h2>
        <input
          type="text"
          placeholder="Titre"
          className="bg-transparent border-b-2 border-gray-600 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 m-auto mb-2 w-9/12"
          onChange={(e) => setData({ ...data, title: e.target.value })}
          value={data.title}
          required
        />
        <textarea
          placeholder="Contenu"
          className="bg-transparent border-b-2 border-gray-600 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 m-auto mb-2 w-9/12"
          onChange={(e) => setData({ ...data, content: e.target.value })}
          value={data.content}
          required
        />
        <input
          type="submit"
          value="Ajouter"
          className="px-2 py-1 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200 w-9/12 m-auto cursor-pointer"
        />
      </form>
    </>
  );
}

export default Form;
