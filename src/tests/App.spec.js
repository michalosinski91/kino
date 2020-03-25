import React from "react";
import { shallow } from "enzyme";
import App from "../App";
import Navbar from "../layout/Navbar/Navbar";

describe("App", () => {
  let wrapper;
  beforeEach(() => (wrapper = shallow(<App />)));

  it("should render a <div />", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });

  it("should render a Navbar component", () => {
    expect(wrapper.containsMatchingElement(<Navbar />)).toEqual(true);
  });
});
