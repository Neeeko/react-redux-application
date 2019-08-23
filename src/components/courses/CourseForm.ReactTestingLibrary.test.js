import React from "react";
import { cleanup, render } from "react-testing-library";
import CourseForm from "./CourseForm";

// Unlike Enzyme, React Testing Library always mount the components. No shallow rendering.

afterEach(cleanup);

function renderCourseForm(args) {
  const defaultProps = {
    authors: [],
    course: {},
    saving: false,
    errors: {},
    onSave: () => {},
    onChange: () => {}
  };

  const props = { ...defaultProps, ...args };
  return render(<CourseForm {...props} />);
}

it("sould render Add Course header", () => {
  const { getByText } = renderCourseForm();
  getByText("Add Course");
});

it('sould label save button as "Save" when not saving', () => {
  const { getByText } = renderCourseForm();
  getByText("Save");
});

it('sould label save button as "Saving..." when saving', () => {
  const { getByText } = renderCourseForm({ saving: true });
  // const { getByText, debug } = renderCourseForm({ saving: true });
  // debug();
  getByText("Saving...");
});
