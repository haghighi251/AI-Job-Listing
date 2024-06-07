import { describe } from "@jest/globals";
import { render } from '@testing-library/react';
import ReactQueryProvider from "@/components/ReactQueryProvider/ReactQueryProvider";
import RootLayout from "@/app/layout";
import { Inter } from "next/font/google";


jest.mock('@tanstack/react-query');
jest.mock("next/font/google", () => ({
    Inter: jest.fn(() => ({ className: 'inter-font' }))
}));


jest.mock('@/components/ReactQueryProvider/ReactQueryProvider', () => ({
  __esModule: true,
  default: ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => <div>{children}</div>
}));

describe('RootLayout', () => {
  it('renders children correctly', () => {
    const { getByText } = render(
      <RootLayout>
        <div>Test Child</div>
      </RootLayout>
    );

    expect(getByText('Test Child')).toBeInTheDocument();
  });

  it('applies the font class', () => {
    const { container } = render(
      <RootLayout>
        <div>Test</div>
      </RootLayout>
    );

    expect(container.querySelector('body')).toHaveClass('inter-font');
  });
});

