import Button from "./Button";

const List = [
  "All",
  "Gaming",
  "Songs",
  "Live",
  "Soccer",
  "Cricket",
  "Cooking",
  "Live",
  "Soccer",
  "Cricket",
];

const ButtonList = () => {
  return (
    <div className="flex">
      {List.map((data, index) => (
        <Button key={index} name={data} />
      ))}
    </div>
  );
};

export default ButtonList;
