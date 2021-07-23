import { fireEvent, render, screen } from '@testing-library/react';
import { Counter } from './Counter';

describe('Counter', () => {
  describe('initialized with defaultCount=0 and description="My Counter"', () => {
    beforeEach(() => {
      render(<Counter defaultCount={0} description="My Counter" />);
    });

    it('renders "Current Count: 0"', () => {
      expect(screen.getByText('Current Count: 0')).toBeInTheDocument();
    });

    it('renders title as "MyCounter"', () => {
      expect(screen.getByText(/my counter/i)).toBeInTheDocument();
    });

    describe('when - is clicked', () => {
      beforeEach(() => {
        fireEvent.click(
          screen.getByRole('button', { name: 'Subtract from Counter' })
        );
      });

      it('renders "Current count: 1"', () => {
        expect(screen.getByText('Current Count: -1')).toBeInTheDocument();
      });
    });

    describe('when + is clicked', () => {
      beforeEach(() => {
        fireEvent.click(screen.getByRole('button', { name: 'Add to Counter' }));
      });

      it('renders "Current count: -1"', () => {
        expect(screen.getByText('Current Count: 1')).toBeInTheDocument();
      });
    });
  });
});
