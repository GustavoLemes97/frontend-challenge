import React from 'react';
import { render, screen, configure } from '@testing-library/react';

import { addRemoveInputProps } from '../helpers/componentsProps';

import AddRemoveButton from '../components/AddRemoveButton';

import {
  BUTTON_ID,
} from '../constants/tagIds';

configure({ testIdAttribute: 'id' });

const { removeButton, addButton } = addRemoveInputProps;

describe('Create a AddRemove with the following characteristics', () => {
  test('Verify if the remove button to be with correct characteristics', () => {
    render(<AddRemoveButton { ...removeButton(() => {}) } />);
    const decrementButton = screen.getByTestId(BUTTON_ID.removeButton);
    const decrementButtonImage = screen.getByRole('img');

    expect(decrementButton).toBeInTheDocument();
    expect(decrementButtonImage).toHaveAttribute('src', 'minus.png');
  });

  test('Verify if the add button to be with correct characteristics', () => {
    render(<AddRemoveButton { ...addButton(() => {}) } />);
    const incrementButton = screen.getByTestId(BUTTON_ID.addButton);
    const incrementButtonImage = screen.getByRole('img');

    expect(incrementButton).toBeInTheDocument();
    expect(incrementButtonImage).toHaveAttribute('src', 'plus.png');
  });
});
