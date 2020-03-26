import React from "react";
import { shallow } from "enzyme";
import SearchBar from "./SearchBar";

describe("SearchBar", () => {
  let wrapper;

  beforeEach(() => (wrapper = shallow(<SearchBar />)));

  it("should render a <div />", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });

  it("should render a <form />", () => {
    expect(wrapper.find("form").length).toEqual(1);
  });

  it("should render an <input />", () => {
    expect(wrapper.find("input").length).toEqual(1);
  });

  it("should render a <button />", () => {
    expect(wrapper.find("button").length).toEqual(1);
  });
});
