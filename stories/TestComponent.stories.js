import React from "react";
import { TestComponent } from "../components/TestComponent";

export default {
  title: "Test",
  component: TestComponent,
};
const data = { name: "Elhaw" };
export const TestComponentComponent = () => {
  return <TestComponent name={data.name} />;
};
