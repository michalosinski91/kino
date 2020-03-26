import React from "react";
import { shallow } from "enzyme";
import Social from "./Social";

describe("Social", () => {
  let wrapper;

  beforeEach(() => (wrapper = shallow(<Social />)));
  it("should display a <ul /> element", () => {
    expect(wrapper.find("ul").length).toEqual(1);
  });

  it("should display 4 child <li /> elements", () => {
    expect(wrapper.find("li").length).toEqual(4);
  });
});
