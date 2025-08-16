import Carousel from "./components/Carousel";

function App() {
  return (
    <div>
      <h1 className="font-bold text-center mt-2 underline">
        Carousel with picsum images
      </h1>

      <Carousel limit={"4"} page={"2"} />
    </div>
  );
}

export default App;
