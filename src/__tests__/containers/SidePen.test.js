import React from 'react';
import toJson from 'enzyme-to-json';
import { mount } from 'enzyme';
import SidePen from '../../containers/SidePen';
import {ResponseProvider} from "../../context/ResponsesCtxt";

const wrapper = mount(
    <ResponseProvider>
      <SidePen />
    </ResponseProvider>
  );

describe('SidePen container snapshot', () => {
    it('matches snapshot', () => {
      expect(toJson(wrapper)).toMatchSnapshot();
    });
});

describe('Rendering form', () => {
    it('Should render form', () => {
        const form = wrapper.find('Form');
        expect(form).toHaveLength(1);
    });
});
