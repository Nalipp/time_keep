import React from 'react';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import App from 'components/app/App';
import Header from 'components/header/Header';
import CategoryList from 'components/categories/list';
import Footer from 'components/footer/Footer';

let wrapper;

beforeEach(() => {
  wrapper = shallow(
    <App />
  );
});

it ('displays the Header component', () => {
  expect(wrapper.find(Header).length).toEqual(1);
});

it ('displays the CategoryList component', () => {
  expect(wrapper.find(CategoryList).length).toEqual(1);
});

it ('displays the Footer component', () => {
  expect(wrapper.find(Footer).length).toEqual(1);
});
