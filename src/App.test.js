// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders AxonStream title', () => {
    render(<App />);
    const titleElement = screen.getByText(/AxonStream/i);
    expect(titleElement).toBeInTheDocument();
});
