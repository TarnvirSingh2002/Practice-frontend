import { render, screen } from '@testing-library/react';
import Calculation from './Calculation'; // adjust the path if needed
import '@testing-library/jest-dom'; 
import userEvent from '@testing-library/user-event';

describe('Calculation component', () => {

  test('renders initial value', () => {
    render(<Calculation initial={0}/>);
    expect(screen.getByRole('heading')).toHaveTextContent('0');
  });

  test('increments value when "Increase" is clicked', () => {
    render(<Calculation initial={1}/>);
    userEvent.click(screen.getByText('Increase'));
    expect(screen.getByRole('heading')).toHaveTextContent('2');
  });

  test('decrease the value by one',()=>{
    render(<Calculation initial={1}/>);
    userEvent.click(screen.getByText('Decrease'));
    expect(screen.getByRole('heading')).toHaveTextContent('0');
  });

  test('change the sign',()=>{
    render(<Calculation initial={1}/>);
    userEvent.click(screen.getByText('Change sign'));
    expect(screen.getByRole('heading')).toHaveTextContent('-1');
  })
  
})