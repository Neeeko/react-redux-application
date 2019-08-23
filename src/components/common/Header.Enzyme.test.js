import React from "react";
import { mount, shallow } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import Header from "./Header";

// Same purpose, different ways of testing

// Shallow: Fast, lightweight. Test one component in isolation.
it("contains 3 NavLinks via shallow", () => {
  const numLinks = shallow(<Header />).find("NavLink").length;
  expect(numLinks).toEqual(3);
});

// We use MemoryRouter since the Header expects to receive React Router's props
// Mount: More realistic. Render component AND children.
it("contains 3 anchors via mount", () => {
  const numAnchors = mount(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  ).find("a").length;

  expect(numAnchors).toEqual(3);
});
