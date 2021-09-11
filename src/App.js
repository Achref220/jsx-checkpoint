import './style.css';
import image from "./rt.jpg"


function App() {
  return (
<>
  <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
    <h1 className="title red">Your name here</h1>
    <br />
    <img style={{ width: "400px" }} src="/nature.jpg" alt="nature"/>
    <br />
    <img style={{ width: "400px" }} src={image} alt="rt"/>
  </div>
  <video width={320} height={240} controls>
    <source src="myVideo.mp4" type="video/mp4" />
  </video>
</>
  );
}

export default App;
