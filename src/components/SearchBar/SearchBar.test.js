import React from "react";
import { shallow } from "enzyme";
import SearchBar from "./SearchBar";

describe("SearchBar", () => {
  let wrapper;
  let mockShowSearchBar = false;
  const mockToggleSearchBar = jest.fn();

  beforeEach(
    () =>
      (wrapper = shallow(
        <SearchBar
          showSearchBar={mockShowSearchBar}
          toggleSearchBar={mockToggleSearchBar}
        />
      ))
  );

  it("should render a <div /> which is hidden initially", () => {
    const div = wrapper.find("div");
    expect(div.length).toEqual(1);
    expect(div.hasClass("search-bar")).toBe(true);
    expect(div.hasClass("seach-bar--show")).toBe(false);
  });

  it("should render a <form />", () => {
    expect(wrapper.find("form").length).toEqual(1);
  });

  it("should render an <input />", () => {
    expect(wrapper.find("input").length).toEqual(1);
  });

  it("should render a <button />", () => {
    const button = wrapper.find("button");
    expect(button.length).toEqual(1);
  });
});
