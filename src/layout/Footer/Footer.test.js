import React from "react";
import { shallow } from "enzyme";

import Footer from "./Footer";
import Social from "../../components/Social/Social";
import FooterList from "../../components/FooterList/FooterList";
import Copyright from "../../components/Copyright/Copyright";

describe("Footer", () => {
  let wrapper;
  beforeEach(() => (wrapper = shallow(<Footer />)));

  it("should render a main <div /> container and a secondary <div />", () => {
    expect(wrapper.find("div").length).toEqual(2);
  });

  it("should render a Social component", () => {
    expect(wrapper.containsMatchingElement(<Social />)).toEqual(true);
  });

  it("should render a List component", () => {
    expect(wrapper.containsMatchingElement(<FooterList />)).toEqual(true);
  });

  it("should render a Copyright component", () => {
    expect(wrapper.containsMatchingElement(<Copyright />)).toEqual(true);
  });
});
