import "./App.css";
import { AComponent } from "./AComponent";
import image from './images.jpeg'
import LoginModule from "./LoginModule";

function App() {
  return (
    <>
      <p className=" display-5 p-5 mark text-muted ">
        <abbr title="BootStrap 5 and React">
          <code>BS5</code>
        </abbr>
        <small></small>
      </p>
      <img src={image} className="App-logo" alt="logo" />
      <div className="container-lg pt-5  bg-dark text-white row ">
        <LoginModule
          clasName="pt-5  my-5 bg-dark  col-sm-4 text-white"
          name="Animesh"
        />
        <button className="btn btn-primary center col-sm-8 bg-dark pt-5 text-success border">
          Hii there you are
        </button>
      </div>

      <div className="container-lg pt-5 bg-dark text-white row">
        <button className="btn1 btn-primary center bg-dark p-2 col-sm-4 pt-5 text-info border">
          how are you{" "}
        </button>
        <button className="btn1 btn-primary center bg-dark p-2 col-sm-8 pt-5 text-danger border">
          I am well{" "}
        </button>
      </div>
      <blockquote className="blockquote bg-white col-sm-12s  border">
        <pre className="text-info">
          For 50 years, WWF has been protecting the future of nature. The
          world's leading conservation organization, WWF works in 100 countries
          and is supported by 1.2 million members in the United States and close
          to 5 million globally.
        </pre>
        <footer className="blockquote-footer text-secondary">
          From WWF's website
        </footer>
      </blockquote>
      <dl className="row">
        <dt className="col-sm-12">Bs5</dt>
        <dd className="text-success">- use BootStrap 5</dd>
        <dt className="text-info">REACT</dt>
        <dd className="text-danger">- or use React </dd>
        <dd className="text-warning ">
          <p>
            To open task manager use <kbd className="text-warning bg-white"> ctrl+delete+alt</kbd>{" "}
          </p>
        </dd>
      </dl>

      <div>
        <img src={image} alt="something" />
      </div>

      <table className="table table-hover table-striped table-bordered table-responsive-lg">
        <thead className="table-warning ">
          <tr>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody className="table">
          <tr>
            <td>Default</td>
            <td>Defaultson</td>
            <td>def@somemail.com</td>
          </tr>
          <tr className="table-primary">
            <td>Primary</td>
            <td>Joe</td>
            <td>joe@example.com</td>
          </tr>
          <tr className="table-success">
            <td>Success</td>
            <td>Doe</td>
            <td>john@example.com</td>
          </tr>
          <tr className="table-danger">
            <td>Danger</td>
            <td>Moe</td>
            <td>mary@example.com</td>
          </tr>
          <tr className="table-info">
            <td>Info</td>
            <td>Dooley</td>
            <td>july@example.com</td>
          </tr>
          <tr className="table-warning">
            <td>Warning</td>
            <td>Refs</td>
            <td>bo@example.com</td>
          </tr>
          <tr className="table-active">
            <td>Active</td>
            <td>Activeson</td>
            <td>act@example.com</td>
          </tr>
          <tr className="table-secondary">
            <td>Secondary</td>
            <td>Secondson</td>
            <td>sec@example.com</td>
          </tr>
          <tr className="table-light">
            <td>Light</td>
            <td>Angie</td>
            <td>angie@example.com</td>
          </tr>
          <tr className="table-dark">
            <td>Dark</td>
            <td>Bo</td>
            <td>bo@example.com</td>
          </tr>
        </tbody>
      </table>
      <AComponent name={"Animesh"}/>
      <Greet/>
    </>
  );
}

export default App;
