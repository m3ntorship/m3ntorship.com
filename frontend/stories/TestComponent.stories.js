import React from "react";
import { TestComponent } from "../components/TestComponent";

export default {
  title: "Test",
  component: TestComponent,
};
const data = { name: "Initial set up" };
export const TestComponentComponent = () => {
  return <TestComponent name={data.name} />;
};
