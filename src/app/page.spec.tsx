import { describe } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

describe("Root Page", () => {
it("should Run the root page without any errors", () => {
render(<Home />);
const h1 = screen.getByRole('heading', { name: 'root page.tsx file'});
expect(h1).toBeInTheDocument();
});
});