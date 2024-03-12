import RightPanel from "@/app/formedit/rightPanel";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";


test('renders Folders correctly', () => {
  render(<RightPanel />);
  expect(screen.getByText('Field Settings')).toBeInTheDocument();
});