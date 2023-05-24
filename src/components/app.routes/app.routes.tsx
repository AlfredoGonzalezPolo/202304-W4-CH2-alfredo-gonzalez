import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

const Step1 = lazy(() => import("../step1/Step1"));
const ToDo = lazy(() => import("../todo/todo"));

export function AppRoutes() {
  return (
    <Suspense>
      <Routes>
        <Route path="" element={<Step1></Step1>}></Route>
        <Route path="todo" element={<ToDo></ToDo>}></Route>
      </Routes>
    </Suspense>
  );
}
