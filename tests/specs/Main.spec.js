/* eslint-env mocha */

import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import FullHeader from '../../src/Main';
import { isContext } from 'vm';

describe('<FullHeader />', () => {
  it('should have header tag when mount', () => {
    const wrapper = shallow(<FullHeader />);
    expect(wrapper.find('header')).to.have.length(1);
  });

  context('Title', () => {
    it('should have h1 tag when title passed', () => {
      const wrapper = shallow(<FullHeader title="TDD" />);
      expect(wrapper.find('h1')).to.have.length(1);
    });

    it('should not have h1 tag when title is not passed', () => {
      const wrapper = shallow(<FullHeader />);
      expect(wrapper.find('h1')).to.have.length(0);
    });

    it('should have h1 tag with "TDD" title when title is passed', () => {
      const wrapper = shallow(<FullHeader title="TDD" />);
      expect(wrapper.find('h1').props().children).to.be.equal('TDD');
    });
  });

  context('Subtitle', () => {
    it('should have h2 tag when subtitle passed', () => {
      const wrapper = shallow(<FullHeader subtitle="TDD with JS" />);
      expect(wrapper.find('h2')).to.have.length(1);
    });

    it('should not have h2 tag when title is not passed', () => {
      const wrapper = shallow(<FullHeader />);
      expect(wrapper.find('h2')).to.have.length(0);
    });

    it('should have h2 tag with "TDD with JS" subtitle when subtitle is passed', () => {
      const wrapper = shallow(<FullHeader subtitle="TDD with JS" />);
      expect(wrapper.find('h2').props().children).to.be.equal('TDD with JS');
    });
  });
});
