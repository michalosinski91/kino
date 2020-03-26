import React from "react";
import { shallow } from "enzyme";
import FooterListItem from "./FooterListItem";

describe("FooterListItem", () => {
  let wrapper;

  beforeEach(() => (wrapper = shallow(<FooterListItem />)));
  it("should display a <li /> element", () => {
    expect(wrapper.find("li").length).toEqual(1);
  });

  it("renders the section value passed in props", () => {
    wrapper.setProps({ section: "Aktualności" });
    expect(wrapper.find("li").text()).toEqual("Aktualności");
  });
});
