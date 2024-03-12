import NewFieldModal from "../app/folders/modals/newfieldModal"
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";


test('renders Folders correctly', () => {
  render(<NewFieldModal />);
  expect(screen.getByText('Field Type')).toBeInTheDocument();
});