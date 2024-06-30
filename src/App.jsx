import "./App.css";
import Card from "./components/card";

function App() {
  let myObj = {
    username: "Saurav Kumar",
    age: 20,
  };
  return (
    <>
      <h1 className="bg-green-500 text-black p-4 rounded-xl mb-4">
        Saurav Kumar
      </h1>
      <Card username="Saurav Kumar" btnText="click me" />
      <Card username="Shivam Kumar" btnText="visit me" />
    </>
  );
}

export default App;
