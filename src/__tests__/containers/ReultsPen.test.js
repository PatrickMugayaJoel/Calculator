import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import ResultsPen from '../../containers/ResultsPen';
import {ResponseProvider} from "../../context/ResponsesCtxt";

describe('ResultsPen container snapshot', () => {
    let wrapper = shallow(
        <ResponseProvider>
          <ResultsPen />
        </ResponseProvider>
      );
  
    it('matches snapshot', () => {
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
