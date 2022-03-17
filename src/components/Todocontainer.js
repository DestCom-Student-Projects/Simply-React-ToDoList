import Card from "./Card";

function Todocontainer({ task, setTask }) {
  return (
    <section className="flex flex-col lg:w-1/2 max-h-vp1/2 lg:max-h-3/4 overflow-y-scroll">
      <h2>A faire</h2>
      {task.map((card, index) => (
        <>
          {card.status === "todo" && (
            <Card card={card} setTask={setTask} index={index} key={card.id} />
          )}
        </>
      ))}

      <h2>Fait</h2>
      {task.map((card, index) => (
        <>
          {card.status === "do" && (
            <Card
              task={task}
              card={card}
              setTask={setTask}
              index={index}
              key={card.id}
            />
          )}
        </>
      ))}
    </section>
  );
}

export default Todocontainer;
