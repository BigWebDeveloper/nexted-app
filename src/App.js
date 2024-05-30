import { useEffect } from "react";
import axios from 'axios'
import "./App.css";
import Header from "./component/header/Header.jsx";
import Banner from "./component/banner/Banner.jsx";
import Feeds from "./component/feeds/Feeds.jsx";
import Courses from "./component/courses/Courses.jsx";
import Analysis from "./component/analysis/Analysis.jsx";
import Project from "./component/project/Project.jsx";
import CourseFee from "./component/course-fee/CourseFee.jsx";
import Footer from "./component/footer/Footer.jsx";

function App() {
  useEffect(() => {

    // connect to the server
    const ConnectServer = async () => {
      try {
        const ServerPATH = "http://localhost:4001/"
        const res = await axios.get(ServerPATH);
        console.log(res.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    ConnectServer();
  }, []);

  return (
    <div className="App app-container">
      <Header />
      <Banner />
      <Feeds />
      <Courses />
      <Analysis />
      <Project />
      <CourseFee />
      <Footer />
    </div>
  );
}

export default App;
