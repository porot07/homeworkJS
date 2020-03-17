import React from 'react';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow, mount, } from 'enzyme';

import TaskContainer from '../src/components/TaskContainer';


configure({ adapter: new Adapter() });

test('TaskContainer - should work adding new task', () => {
  const component = mount(
    <TaskContainer />,
  );

  expect(component.html()).toMatchSnapshot();
  component.find('input').first().simulate('change', { target: { value: 'Hello, World!' } });
  component.find('input').last().simulate('change', { target: { value: 'This is my first task!' } });
  component.find('form').simulate('submit');
  expect(component.html()).toMatchSnapshot();
  component.find('input').first().simulate('change', { target: { value: 'Second Task!!' } });
  component.find('input').last().simulate('change', { target: { value: 'This is my seconds task!' } });
  component.find('form').simulate('submit');
  expect(component.html()).toMatchSnapshot();
});

test('TaskContainer - should work finishing task', () => {
  const component = mount(
    <TaskContainer />,
  );

  component.find('input').first().simulate('change', { target: { value: 'Hello, World!' } });
  component.find('input').last().simulate('change', { target: { value: 'This is my first task!' } });
  component.find('form').simulate('submit');
  component.find('input').first().simulate('change', { target: { value: 'Second Task!!' } });
  component.find('input').last().simulate('change', { target: { value: 'This is my seconds task!' } });
  component.find('form').simulate('submit');
  component.find('.card').first().find('button').simulate('click');
  expect(component.html()).toMatchSnapshot();
  component.find('.card').last().find('button').simulate('click');
  expect(component.html()).toMatchSnapshot();
});

test('TaskContainer - should work removing task', () => {
  const component = mount(
    <TaskContainer />,
  );

  component.find('input').first().simulate('change', { target: { value: 'Hello, World!' } });
  component.find('input').last().simulate('change', { target: { value: 'This is my first task!' } });
  component.find('form').simulate('submit');
  component.find('input').first().simulate('change', { target: { value: 'Second Task!!' } });
  component.find('input').last().simulate('change', { target: { value: 'This is my seconds task!' } });
  component.find('form').simulate('submit');
  component.find('.card').first().find('button').simulate('click');
  component.find('.card').first().find('button').simulate('click');
  expect(component.html()).toMatchSnapshot();
  component.find('.card').last().find('button').simulate('click');
  component.find('.card').last().find('button').simulate('click');
  expect(component.html()).toMatchSnapshot();
});