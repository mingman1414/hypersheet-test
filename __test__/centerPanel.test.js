import CenterPanel from "../app/formedit/centerPanel";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";


test('renders Folders correctly', () => {
  render(<CenterPanel />);
  expect(screen.getByText('Phoenix')).toBeInTheDocument();
});