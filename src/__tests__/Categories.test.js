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

describe ('the toggle event', () => {
  it('contains an edit button', () => {
    expect(wrapper.render().text()).toContain('edit');
  });

  it('toggles detail category display', () => {
    wrapper.find('.toggle-category-detail').simulate('click');
    wrapper.update();
    expect(wrapper.render().text()).toContain('X');
    wrapper.find('.toggle-category-detail').simulate('click');
    wrapper.update();
    expect(wrapper.render().text()).toContain('edit');
  });
});

describe ('the input form', () => {
  beforeEach(() => {
    wrapper.find('.toggle-category-detail').simulate('click');
    wrapper.find('input').simulate('change', {
      target: { value: 'new category' }  
    });
    wrapper.update(); 
  });

  it('has a submit button', () => {
    expect(wrapper.render().text()).toContain('submit');
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

describe ('the delete event', () => {
  beforeEach(() => {
    wrapper.find('.toggle-category-detail').simulate('click');
    wrapper.update(); 
  });

  it('has a delete button', () => {
    expect(wrapper.render().text()).toContain('delete');
  });

  it('removes the category when delete is clicked', () => {
    wrapper.find('.delete-category').simulate('click');
    wrapper.update();
    expect(wrapper.find('.category-li').exists()).toEqual(false);
  });
});

