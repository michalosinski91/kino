import React from "react";
import { shallow } from "enzyme";

import NavSearch from "./NavSearch";

describe("NavSearch", () => {
  let wrapper;
  const testClick = jest.fn();

  beforeEach(
    () => (wrapper = shallow(<NavSearch toggleSearchBar={testClick} />))
  );
  it("should display a <div /> with a toggleSearchBar onClick function", () => {
    const div = wrapper.find("div");
    expect(div.length).toEqual(1);
    div.simulate("click");
    expect(testClick).toHaveBeenCalledTimes(1);
    div.simulate("click");
    expect(testClick).toHaveBeenCalledTimes(2);
  });
});
