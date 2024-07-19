import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";
import TEST_IMAGES from "./_testCommon";

it("works when you click on the right arrow", function() {
  const { container } = render(
    <Carousel photos={TEST_IMAGES} />
  );
  // expect the first image to show, but not the second
  expect(
    container.querySelector('img[alt="first image alt text"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="second image alt text"]')
  ).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(
    container.querySelector('img[alt="first image alt text"]')
  ).not.toBeInTheDocument();
  expect(
    container.querySelector('img[alt="second image alt text"]')
  ).toBeInTheDocument();
});

it("works when you click on the left arrow", function() {
  const { container } = render(
    <Carousel photos={TEST_IMAGES} />
  );
  // move forward in the carousel
  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  fireEvent.click(rightArrow);

  // expect the second image to show
  expect(
    container.querySelector('img[alt="second image alt text"]')
  ).toBeInTheDocument();

  // move backward in the carousel
  const leftArrow = container.querySelector(".bi-arrow-left-circle");
  fireEvent.click(leftArrow);

  // expect the first image to show again
  expect(
    container.querySelector('img[alt="first image alt text"]')
  ).toBeInTheDocument();
});

it("hides the left arrow on the first image and the right arrow on the last image", function() {
  const { container } = render(
    <Carousel photos={TEST_IMAGES} />
  );

  // expect the left arrow to be missing on the first image
  expect(container.querySelector(".bi-arrow-left-circle")).not.toBeInTheDocument();

  // move to the last image
  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  fireEvent.click(rightArrow);
  fireEvent.click(rightArrow);

  // expect the right arrow to be missing on the last image
  expect(container.querySelector(".bi-arrow-right-circle")).not.toBeInTheDocument();
});
