import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AppRouterProps } from "../app.router/app.router";
import "./button.scss";

export function Button({ menuOptions }: AppRouterProps) {
  const [counter, setCounter] = useState(0);

  const handlerClick = (increment: number) => {
    if (counter === 0) return;
    if (counter === 2) return;
    setCounter(counter + increment);
  };

  useEffect(() => {}, [counter]);

  return (
    <nav className="button">
      <Link to={menuOptions[counter].path} onClick={() => handlerClick(-1)}>
        ◀
      </Link>

      <Link to={menuOptions[counter + 1].path} onClick={() => handlerClick(-1)}>
        {" "}
        ▶
      </Link>
    </nav>
  );
}
