import { render } from '@testing-library/react';

import Page1 from './Page1';

describe('<Page1 />', () => {
  test('should render Page1', async () => {
    const { getByText } = render(<Page1 />);
    expect(getByText('This is page 1 of app2')).toBeTruthy();
  });
});
