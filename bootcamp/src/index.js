//import react
 import React, { PureComponent } from "react";
 //import dom
 import  ReactDOM  from "react-dom/client";
 import ClassComp from './first-day/ClassComp'
 import FunComp from './first-day/FunComp'
import Parent from "./2nd-day/props-learning/Parent";
import Send from "./2nd-day/props-learning/props/Send";
import First from "./2nd-day/Task/First";
import Frag from "./2nd-day/fragments/Frag";
import Condition from "./2nd-day/conditional-rendering/Condition";
import Global from "./3rd-day/props-drilling/Context-api/GlobalData";
import Consumer from "./3rd-day/props-drilling/Context-api/Consumer";
import ParentProp from "./3rd-day/Props-children/ParentProp";
import ColorChnage from "./3rd-day/Task/ColorChange";
import ColorChange from "./3rd-day/Task/ColorChange";
import Hoc2 from "./3rd-day/higer-order-component/Hoc2";
import LearnRef from "./4th-day/learning-useref/LearnRef";
import UnControlForm from "./4th-day/forms/UnControlForm";
import ControlForm from "./4th-day/forms/ControlForm";
import App from "./To-do-list/App";
import App1 from "./Task-to-do-list/App1";
import Life from "./5th-day/life-cycle methods/Life";
import LearnEffect from "./5th-day/learn-useEffect/LearnEffect";
import LearningKeys from "./5th-day/learning-keys/LearningKeys";
import LearnAxios from "./6th-day/learn-axios/LearnAxios";
import ToDo from "./6th-day/todo-task/ToDo";
import LearnPureComp from "./6th-day/pure-components/LearnPureComp";
import Pure from "./6th-day/pure-components/Pure";
//import Parent from "./6th-day/pure-components/Parent1";
import Parent1 from "./6th-day/pure-components/Parent1";
import Port from "./7th-day/portals/Port";
import AppRoute from "./7th-day/router/AppRoute";
import UseMemoLearn from "./7th-day/advance-hook/UseMemoLearn";
import Parent from "./8th-day/use-callback/Parent";

//import "./global.css";
//import One from "./3rd-day/props-drilling/One";
//ReactDOM.createRoot(document.getElementById("root")).render(<One/>)

 //ReactDOM.createRoot(document.getElementById("root")).render(
 //<Global.Provider value={{name:"chintu",age:24}}>
 // <Consumer/>
 //</Global.Provider>);

 ReactDOM.createRoot(document.getElementById("root")).render(<LearnAxios/>)