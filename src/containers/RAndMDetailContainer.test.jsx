import React from 'react';
import { render, screen } from '@testing-library/react';
import RAndMDetailContainer from './RAndMDetailContainer';
import { MemoryRouter } from 'react-router';

describe('RAndMDetailContainer', () => {
  it('renders a detail view of a single character', async () => {
    render(
      <MemoryRouter>
        <RAndMDetailContainer
          match={{
            params: {
              id: '1',
            },
          }}
        />
      </MemoryRouter>
    );

    screen.getByAltText('loading spinner');

    const detail = await screen.findByRole(
      'article',
      { name: 'detail-view' },
      { timeout: 2000 }
    );
    screen.debug();
    expect(detail).toMatchSnapshot();
  });
});
