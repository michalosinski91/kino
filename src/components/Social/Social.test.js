import React from "react";
import { shallow } from "enzyme";
import Social from "./Social";

describe("Social", () => {
  let wrapper;

  beforeEach(() => (wrapper = shallow(<Social />)));
  it("should display a <div />", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });
});
