import Card from "./Card";

function Todocontainer({ task, setTask }) {
  return (
    <section className="flex flex-col w-1/2">
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
            <Card card={card} setTask={setTask} index={index} key={card.id} />
          )}
        </>
      ))}
    </section>
  );
}

export default Todocontainer;
