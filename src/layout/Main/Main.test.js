import React from "react";
import { shallow } from "enzyme";

import Main from "./Main";

describe("Main", () => {
  let wrapper;
  beforeEach(() => (wrapper = shallow(<Main />)));

  it("should render a <div />", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });
});
