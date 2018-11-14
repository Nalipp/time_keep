import React from 'react';
import { mount } from 'enzyme';
import Root from 'Root';
import CategoriesList from 'components/categories/list';

let wrapper;

beforeEach(() => {
  const initialState = {
    categories: {
      1: {id: 1, name: 'category name 1'},
      2: {id: 2, name: 'category name 2'},
    }
  }

  wrapper = mount(
    <Root initialState={initialState}>
      <CategoriesList />
    </Root>
  );
});

afterEach(() => {
  wrapper.unmount();
});

it('shows the name for each category', () => {
  expect(wrapper.render().text()).toContain('category name 1')
  expect(wrapper.render().text()).toContain('category name 2')
});


