import { lazy, Suspense } from "react";
import { Navigate, Route } from "react-router";
import { Routes } from "react-router-dom";
import { MenuOption } from "../app/App";

const Step1 = lazy(() => import("../../../features/step1/page/step1"));
const Step2 = lazy(() => import("../../../features/step2/page/step2"));
const Step3 = lazy(() => import("../../../features/step2/page/step2"));

type AppRouterProps = {
  menuOptions: MenuOption[];
};

export function AppRouter({ menuOptions }: AppRouterProps) {
  return (
    <Suspense>
      <Routes>
        <Route path={"/"} element={<Step1></Step1>}></Route>
        <Route path={menuOptions[0].path} element={<Step1></Step1>}></Route>
        <Route path={menuOptions[1].path} element={<Step2></Step2>}></Route>
        <Route path={menuOptions[2].path} element={<Step3></Step3>}></Route>
        <Route
          path={"*"}
          element={<Navigate to={"/"} replace={true}></Navigate>}
        ></Route>
      </Routes>
    </Suspense>
  );
}
