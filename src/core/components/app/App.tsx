import { AppRouter } from "../app.router/app.router";
import { Button } from "../button/button";
import { Header } from "../header/header";
import "./App.css";

export type MenuOption = {
  label: string;
  path: string;
};
const menuOptions: MenuOption[] = [
  { label: "Step-1", path: "/step1" },
  { label: "Step-2", path: "/step2" },
  { label: "Step-3", path: "/step3" },
];

function App() {
  return (
    <div className="App">
      <Header></Header>
      <AppRouter menuOptions={menuOptions}></AppRouter>
      <Button menuOptions={menuOptions}></Button>
    </div>
  );
}

export default App;
