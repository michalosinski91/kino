import React from "react";
import { shallow } from "enzyme";
import FooterList from "./FooterList";
import FooterListItem from "./FooterListItem/FooterListItem";

describe("FooterList", () => {
  let wrapper;

  beforeEach(() => (wrapper = shallow(<FooterList />)));
  it("should display a <ul />", () => {
    expect(wrapper.find("ul").length).toEqual(1);
  });

  it("should contain 4 child FooterListItem components", () => {
    expect(wrapper.find("FooterListItem").length).toEqual(4);
  });
});
