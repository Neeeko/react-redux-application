import { createStore } from "redux";
import rootReducer from "./reducers";
import initialState from "./reducers/initialState";
import * as courseActions from "./actions/courseActions";

it("should handle creating courses", () => {
  // arrange
  const store = createStore(rootReducer, initialState);

  const course1 = {
    id: 1,
    title: "Clean Code"
  };

  const course2 = {
    id: 2,
    title: "How to be a failure"
  };

  const newCourse = {
    id: 2,
    title: "How to be successful"
  };

  const actions = [
    courseActions.createCourseSuccess(course1),
    courseActions.createCourseSuccess(course2),
    courseActions.updateCourseSuccess(newCourse)
  ];
  // act
  // by dispatching this action, we can assert that the store, the actions and the reducers work as expected
  actions.forEach(store.dispatch);

  // assert
  const createdCourse1 = store.getState().courses[0];
  const createdCourse2 = store.getState().courses[1];

  expect(createdCourse1).toEqual(course1);
  expect(createdCourse2).not.toEqual(course2);
  expect(createdCourse2).toEqual(newCourse);
  expect(store.getState().courses.length).toEqual(2);
});
