// import logo from "./public/assets/logo/logo.svg";
import "./App.scss";
import Container from "./components/Container";
import Footer from "./components/Footer";
import PlayWindow from "./components/PlayWindow";

function App() {
  return (
    <div className="App">
      <Container>
        <img className="logo" src={`/assets/logo/logo@1x.png`} srcSet={`/assets/logo/logo@2x.png 2x, /assets/logo/logo@3x.png 3x`} alt={"playline logo"} />
        <PlayWindow />
        <Footer />
      </Container>
    </div>
  );
}

export default App;
