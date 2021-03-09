import { shallow, mount, render } from "enzyme";
import React from "react";
import { Card } from "./card.component";

it("expect to render cart component", () => {
  const card = shallow(<Card />);
  expect(card.length).toEqual(1);
});
