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
    },
    topics: {
      1: {
        id: 1,
        title: 'topic1',
        description: 'topic1 description',
        categoryId: 1,
      },
    },
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

describe ('the topic toggle event', () => {
  it('contains an edit button', () => {
    expect(wrapper.render().text()).toContain('edit');
  });

  it('toggles the detail topic display', () => {
    wrapper.find('.toggle-topic-in').simulate('click');
    wrapper.update();
    expect(wrapper.render().text()).toContain('X');
    wrapper.find('.toggle-topic-out').simulate('click');
    wrapper.update();
    expect(wrapper.find('.toggle-topic-out').exists()).toEqual(false);
  });
});

describe ('the topic input forms', () => {
  beforeEach(() => {
    wrapper.find('.toggle-topic-in').simulate('click');
  });

  it('has a submit button', () => {
    expect(wrapper.render().text()).toContain('submit');
  });

  it('has a input with the current topic title', () => {
    expect(wrapper.find('.topic-input').prop('value')).toEqual('topic1');
  });

  it('can submit updated input title', () => {
    wrapper.find('.topic-input').simulate('change', {
      target: { value: 'topic1 updated' }
    });
    wrapper.update();
    wrapper.find('.topic-form').simulate('submit');
    wrapper.update();
    expect(wrapper.find('.topic-title').render().text()).toContain('topic1 updated');
  });
});

describe ('the topic input form', () => {
  beforeEach(() => {
    wrapper.find('.toggle-topic-in').simulate('click');
  });

  it('has a submit button', () => {
    expect(wrapper.render().text()).toContain('submit');
  });

  it('has a input with the current topic title', () => {
    expect(wrapper.find('.topic-input').prop('value')).toEqual('topic1');
  });

  it('can submit updated input title', () => {
    wrapper.find('.topic-input').simulate('change', {
      target: { value: 'topic1 updated' }
    });
    wrapper.update();
    wrapper.find('.topic-form').simulate('submit');
    wrapper.update();
    expect(wrapper.find('.topic-title').render().text()).toContain('topic1 updated');
  });
});

describe ('the topic textarea form', () => {
  beforeEach(() => {
    wrapper.find('.toggle-topic-in').simulate('click');
  });

  it('has a textarea with the current topic description', () => {
    expect(wrapper.find('.topic-textarea').prop('value')).toEqual('topic1 description');
  });

  it('can submit updated textarea description', () => {
    wrapper.find('.topic-textarea').simulate('change', {
      target: { value: 'topic1 description updated' }
    });
    wrapper.update();
    wrapper.find('.topic-form').simulate('submit');
    wrapper.update();
    wrapper.find('.topic-title').simulate('click');
    wrapper.update();
    expect(wrapper.find('.detail-topic-description').render().text())
      .toContain('topic1 description updated');
  });
});

describe ('the delete event', () => {
  beforeEach(() => {
    wrapper.find('.toggle-topic-in').simulate('click');
    wrapper.update(); 
  });

  it('has a delete button', () => {
    expect(wrapper.find('.delete-topic').exists()).toEqual(true);
  });

  it('removes the topic when delete is clicked', () => {
    wrapper.find('.delete-topic').simulate('click');
    wrapper.update();
    expect(wrapper.find('.toggle-topic-in').exists()).toEqual(false);
  });
});


