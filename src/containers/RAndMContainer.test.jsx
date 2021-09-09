import React from 'react';
import { render, screen } from '@testing-library/react';
import RAndMContainer from './RAndMContainer';

describe('RAndMContainer', () => {
  it('renders a list of Rick and Morty Characters to home page', async () => {
    render(<RAndMContainer />);

    screen.getByAltText('loading spinner');

    const ul = await screen.findByRole('list', {
      name: 'rick and morty characters',
    });

    expect(ul).toMatchSnapshot();
  });
});
