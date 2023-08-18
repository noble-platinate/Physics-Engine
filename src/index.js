

import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from './components/App';
import Login from "./components/Que/login";
import Home from "./components/Que/home";
import Chapter from './components/Que/chapters'
import 'antd/dist/antd.css';

import Quegri from "./components/Que/Quegri";
import Nlmbasic from "./components/Que/Shownewtolaw/Nlmbasic";
import Nlmadvance from "./components/Que/Shownewtolaw/Nlmadvance";
import Feedback from "./components/Que/Feedback";
import Dashboard from "./components/Que/Dashboard/Home";
import Videos from "./components/Que/Videos/chaptervid";


const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="login" element={<Login />} />
      <Route path="home" element={<Home />} />
      <Route path="home/:quesId" element={<Home />} />
      <Route path="chapters" element={<Chapter />} />
      {/* <Route path="quegrid" element={<Quegrid />} /> */}
      <Route path="Quegr" element={<Quegri />} />
      <Route path="NLMbasic" element={<Nlmbasic/>} />
      <Route path="NLMadvance" element={<Nlmadvance />} />
      <Route path="feedback" element={<Feedback/>} />
      <Route path="dashboard" element={<Dashboard/>} />
      <Route path="videos" element={<Videos/>} />
    </Routes>
  </BrowserRouter>
);

