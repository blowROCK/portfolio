import React from "react";
import ReactDOM from "react-dom";
import "./index.sass";
import * as serviceWorker from "./serviceWorker";
import "./thirdParty/tailwind.css";
import App from "./pages/App";

// import { BrowserRouter as Router, Route } from "react-router-dom";

ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(
//   <Router>
//     <div>
//       <App />
//       <Route exact path="/" component={Home} />
//       <Route path="/first" component={First} />
//       <Route path="/first" component={First} />
//       <Route path="/second" component={Second} />
//       <Route path="/third" component={Third} />
//     </div>
//   </Router>,
//   document.getElementById("root")
// );

serviceWorker.unregister();
