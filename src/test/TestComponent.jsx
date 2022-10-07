import Header from "../components/Header";
import Loading from "../components/Loading";
import NavBar from "../components/Navbar";

function TestComponent(props) {
  return (
    <div>
      <h2>Loading</h2>
      <Loading message={"Loading"} />
      <h2>Header</h2>
      <Header />
      <h2>Nav bar</h2>
      <NavBar />
    </div>
  );
}
export default TestComponent;
