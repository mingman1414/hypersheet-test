import Folders from "../app/folders/page";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";


test('renders Folders correctly', () => {
  render(<Folders />);
  expect(screen.getByText('New Form')).toBeInTheDocument();
});