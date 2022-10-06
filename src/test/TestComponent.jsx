import Header from "../components/Header";
import Loading from "../components/Loading";

function TestComponent(props) {
  return (
    <div>
      <h2>Loading</h2>
      <Loading message={"Loading"} />
      <h2>Header</h2>
      <Header />
    </div>
  );
}
export default TestComponent;
