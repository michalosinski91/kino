import React from "react";
import { shallow } from "enzyme";

import NavSearch from "./NavSearch";

describe("NavSearch", () => {
  let wrapper;

  beforeEach(() => (wrapper = shallow(<NavSearch />)));
  it("should display a <div />", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });
});
