import React from "react";
import { shallow } from "enzyme";
import Logo from "./Logo";

describe("Logo", () => {
  let wrapper;

  beforeEach(() => (wrapper = shallow(<Logo />)));
  it("should display a <div />", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });
});
