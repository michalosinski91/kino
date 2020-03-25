import React from "react";
import { shallow } from "enzyme";
import NavList from "./NavList";
import NavListItem from "./NavListItem/NavListItem";

describe("NavList", () => {
  let wrapper;

  beforeEach(() => (wrapper = shallow(<NavList />)));
  it("should display a <ul />", () => {
    expect(wrapper.find("ul").length).toEqual(1);
  });

  it("should contain 4 child NavListItem components", () => {
    expect(wrapper.find("NavListItem").length).toEqual(4);
  });
});
