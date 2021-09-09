import React from 'react';
import { render, screen } from '@testing-library/react';
import RAndMDetailContainer from './RAndMDetailContainer';

describe('RAndMContainer', () => {
  it('renders a list of Rick and Morty Characters to home page', async () => {
    render(<RAndMDetailContainer />);

    screen.getByAltText('loading spinner');
  });
});
