// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders TokenHarbor title', () => {
    render(<App />);
    const titleElement = screen.getByText(/TokenHarbor/i);
    expect(titleElement).toBeInTheDocument();
});
