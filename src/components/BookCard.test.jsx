import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import BookCard from './BookCard.jsx';
import { formattedBooksArray } from '../utils/enums';

describe('<CharacterCard />', () => {
  let defaultProps;
  beforeEach(() => {
    defaultProps = {
      book: formattedBooksArray[0],
    };
  });

  it('should render correctly', () => {
    const component = shallow(<BookCard {...defaultProps} />);
    expect(toJson(component)).toMatchSnapshot();
  });
});
