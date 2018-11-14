import React from 'react';
import { mount } from 'enzyme';
import Root from 'Root';
import CategoriesList from 'components/categories/list';
import TopicsList from 'components/topics/list';

let wrapper;

beforeEach(() => {
  const initialState = {
    categories: {
      1: {id: 1, name: 'category1'},
      2: {id: 2, name: 'category2'},
    },
    topics: {
      1: {
        id: 1,
        title: 'topic1',
        description: 'topic description 1',
        categoryId: 1,
      },
      2: {
        id: 2,
        title: 'topic2',
        description: 'topic description 2',
        categoryId: 2,
      },
    }
  }

  wrapper = mount(
    <Root initialState={initialState}>
      <CategoriesList>
        <TopicsList />
      </CategoriesList>
    </Root>
  );
});

afterEach(() => {
  wrapper.unmount();
});

it('shows the name for each category', () => {
  expect(wrapper.render().text()).toContain('topic1')
  expect(wrapper.render().text()).toContain('topic2')
});




