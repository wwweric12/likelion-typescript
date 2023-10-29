interface TodosProps {
  props: string[];
}

const Todos = ({ props }: TodosProps) => {
  return (
    <>
      {props.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </>
  );
};

export default Todos;
