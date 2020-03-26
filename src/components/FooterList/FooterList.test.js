import React from "react";
import { shallow } from "enzyme";
import FooterList from "./FooterList";

describe("FooterList", () => {
  let wrapper;

  beforeEach(() => (wrapper = shallow(<FooterList />)));
  it("should display a <div />", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });
});
