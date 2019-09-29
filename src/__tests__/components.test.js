import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import TableRow from '../components/TableRow';
import Form from '../components/Form';
import {ResponseProvider} from "../context/ResponsesCtxt";

const tableProps = {
  result: {
      expected: "2",
      is_passed: "No",
      num_1: "1",
      num_2: "1",
      resp: "2"
    },
    id: 0
}

const formProps = {
    props: {
        onSubmit: jest.fn(),
        onChange: jest.fn(),
        state: {
            num_one: 1,
            num_two: 2
        }
    }
}

describe('TableRow component snapshot', () => {
    let wrapper = shallow(
        <ResponseProvider>
          <TableRow {...tableProps} />
        </ResponseProvider>
      );
  
    it('matches snapshot', () => {
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
  

describe('Form component snapshot', () => {
  let wrapper = shallow(<Form {...formProps} />);

  it('matches snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  
  it('calls onSubmit prop function when form is submitted', () => {
    const form = wrapper.find('form');
    form.simulate('submit');
    expect(formProps.props.onSubmit).toHaveBeenCalledTimes(1);
  });

});
