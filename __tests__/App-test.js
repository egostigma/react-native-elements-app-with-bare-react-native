/**
 * @format
 */

import 'react-native';
import React from 'react';
import ButtonsHome from '../src/views/buttons_home';
import ButtonsDetails from '../src/views/buttons_detail';
import InputDetails from '../src/views/input_details';
import InputHome from '../src/views/input_home';
import ListsHome from '../src/views/lists_home';
import Lists from '../src/views/lists';
import Login from '../src/views/login';
import Pricing from '../src/views/pricing';
import Ratings from '../src/views/ratings';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<ButtonsHome />);
  renderer.create(<ButtonsDetails />);
  renderer.create(<InputDetails />);
  renderer.create(<InputHome />);
  renderer.create(<ListsHome />);
  renderer.create(<Lists />);
  renderer.create(<Login />);
  renderer.create(<Pricing />);
  renderer.create(<Ratings />);
});
