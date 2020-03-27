import React from "react";
import { shallow } from "enzyme";
import Navbar from "./Navbar";
import Logo from "../../components/Logo/Logo";
import NavList from "../../components/NavList/NavList";
import NavSearch from "../../components/NavSearch/NavSearch";

describe("Navbar", () => {
  let wrapper;

  beforeEach(() => (wrapper = shallow(<Navbar />)));

  it("should render a <div />", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });

  it("should render a Logo component", () => {
    expect(wrapper.containsMatchingElement(<Logo />)).toEqual(true);
  });

  it("should render a Search trigger component", () => {
    expect(wrapper.containsMatchingElement(<NavSearch />)).toEqual(true);
  });

  it("should render a List component", () => {
    expect(wrapper.containsMatchingElement(<NavList />)).toEqual(true);
  });
});
