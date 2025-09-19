import { render, screen, fireEvent } from "@testing-library/react";
import { MantineProvider } from "@mantine/core";
import SearchCard from "@/component/home/searchCard";

describe("SearchCard Component", () => {
  const renderWithProvider = (props: any) =>
    render(
      <MantineProvider>
        <SearchCard {...props} />
      </MantineProvider>
    );

  /* Test 1: Check if the input renders with the correct placeholder */
  it("renders the input with correct placeholder", () => {
    renderWithProvider({ search: "", setSearch: () => {} });

    // Find the input element by its placeholder text
    const inputElement = screen.getByPlaceholderText("Search posts...");

    // Assert that the input is present in the document
    expect(inputElement).toBeInTheDocument();
  });

  /* Test 2: Ensure typing into the input calls the setSearch function */
  it("calls setSearch when typing in the input", () => {
    const mockSetSearch = jest.fn(); // Create a mock function
    renderWithProvider({ search: "", setSearch: mockSetSearch });

    const inputElement = screen.getByPlaceholderText("Search posts...");

    // Simulate typing into the input
    fireEvent.change(inputElement, { target: { value: "Hello" } });

    // Assert that the mock function was called with the new value
    expect(mockSetSearch).toHaveBeenCalledWith("Hello");
  });

  /* Test 3: Verify that the input correctly displays the current search value */
  it("displays the current search value", () => {
    renderWithProvider({ search: "Test", setSearch: () => {} });

    // Find the input element by its current value
    const inputElement = screen.getByDisplayValue("Test");

    // Assert that the input with the given value exists in the document
    expect(inputElement).toBeInTheDocument();
  });
});
