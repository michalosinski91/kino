import React from "react";
import { shallow } from "enzyme";
import { App } from "../App";
import Navbar from "../layout/Navbar/Navbar";
import SearchBar from "../components/SearchBar/SearchBar";
import Footer from "../layout/Footer/Footer";
import Main from "../layout/Main/Main";

describe("App", () => {
  let wrapper;
  beforeEach(() => (wrapper = shallow(<App />)));

  it("should render a <div />", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });

  it("should render a Navbar component", () => {
    expect(wrapper.containsMatchingElement(<Navbar />)).toEqual(true);
  });

  it("should render a SearchBar component", () => {
    expect(wrapper.containsMatchingElement(<SearchBar />)).toEqual(true);
  });

  it("should render a Main component", () => {
    expect(wrapper.containsMatchingElement(<Main />)).toEqual(true);
  });

  it("should render a Footer component", () => {
    expect(wrapper.containsMatchingElement(<Footer />)).toEqual(true);
  });
});
