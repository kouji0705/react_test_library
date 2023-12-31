import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

describe('Counter コンポーネント', () => {
  test('初期状態でカウントは0である', () => {
    render(<Counter />);
    expect(screen.getByText('0')).toBeInTheDocument();
  });

  test('ボタンをクリックするとカウントが1増加する', () => {
    render(<Counter />);
    fireEvent.click(screen.getByText('カウントアップ'));
    expect(screen.getByText('1')).toBeInTheDocument();
  });
});
