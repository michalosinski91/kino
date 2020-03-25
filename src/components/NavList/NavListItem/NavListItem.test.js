import React from "react";
import { shallow } from "enzyme";

import NavListItem from "./NavListItem";

describe("NavListItem", () => {
  let wrapper;
  beforeEach(() => (wrapper = shallow(<NavListItem section="" />)));

  it("should display a <li />", () => {
    expect(wrapper.find("li").length).toEqual(1);
  });

  it("renders the section value passed in props", () => {
    wrapper.setProps({ section: "Repertuar" });
    expect(wrapper.find("li").text()).toEqual("Repertuar");
  });
});
