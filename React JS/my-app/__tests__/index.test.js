import React from 'react';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';

import TaskList from '../src/TaskList';


configure({ adapter: new Adapter() });

test('TaskList', () => {
  const component = shallow(
    <TaskList />,
  );

  expect(component.html()).toMatchSnapshot();
  component.find('li.bg-primary').first().find('button').first().simulate('click');
  expect(component.find('li').first().html()).toMatchSnapshot();
  component.find('li.bg-success').first().find('button').first().simulate('click');
  expect(component.find('li').first().html()).toMatchSnapshot();
  component.find('li.bg-success').first().find('button').last().simulate('click');
  expect(component.find('li').first().html()).toMatchSnapshot();
});