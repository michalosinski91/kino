import React from "react";
import { shallow } from "enzyme";
import Copyright from "./Copyright";

describe("Copyright", () => {
  let wrapper;

  beforeEach(() => (wrapper = shallow(<Copyright />)));
  it("should display a <div />", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });
});
