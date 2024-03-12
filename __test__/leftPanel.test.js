import LeftPanel from "../app/formedit/leftPanel";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";


test('renders Folders correctly', () => {
  render(<LeftPanel />);
  expect(screen.getByText('Fields')).toBeInTheDocument();
});