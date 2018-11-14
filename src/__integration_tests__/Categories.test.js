import React from 'react';
import { mount } from 'enzyme';
import Root from 'Root';
import CategoriesList from 'components/categories/list';

let wrapper;

beforeEach(() => {
  const initialState = {
    categories: {
      1: {id: 1, name: 'category name 1'},
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

it('has a form input and a button', () => {
  wrapper.find('.toggle-category-detail').simulate('click');
  expect(wrapper.find('input').length).toEqual(1);
});

it('has click handlers for X delete and submit', () => {
  wrapper.find('.toggle-category-detail').simulate('click');
  expect(wrapper.render().text()).toContain('X');
  expect(wrapper.render().text()).toContain('delete');
  expect(wrapper.render().text()).toContain('submit');
});

describe ('the input form', () => {
  beforeEach(() => {
    wrapper.find('.toggle-category-detail').simulate('click');
    wrapper.find('input').simulate('change', {
      target: { value: 'new category' }  
    });
    wrapper.update(); 
  });

  it('has a input that users can type in', () => {
    expect(wrapper.find('input').prop('value')).toEqual('new category');
  });

  it('input form contains the current category name', () => {
    wrapper.find('form').simulate('submit');
    wrapper.update();
    wrapper.find('.toggle-category-detail').simulate('click');
    expect(wrapper.find('input').prop('value')).toEqual('new category');
  });
});

