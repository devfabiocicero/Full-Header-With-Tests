/* eslint-env mocha */

import React from 'react';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { shallow } from 'enzyme';
import FullHeader from '../../src/Main';

chai.use(chaiEnzyme());

describe('<FullHeader />', () => {
  it('should have header tag when mount', () => {
    const wrapper = shallow(<FullHeader />);
    expect(wrapper.find('header')).to.have.length(1);
  });

  context('Title', () => {
    it('should have h1 tag when title is passed', () => {
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
    it('should have h2 tag when subtitle is passed', () => {
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

  context('Bgcolor', () => {
    it('should have background-color equal #ccc when none is passed', () => {
      const wrapper = shallow(<FullHeader title="TDD" />);
      expect(wrapper).to.have.style('background-color').equal('#ccc');
    });

    it('should have background-color equal #000 when bgColor #000 is passed', () => {
      const wrapper = shallow(<FullHeader title="TDD" bgColor="#000" />);
      expect(wrapper).to.have.style('background-color').equal('#000');
    });
  });

  context('TextColor', () => {
    it('should have color equal #fff when none is passed', () => {
      const wrapper = shallow(<FullHeader title="TDD" />);
      expect(wrapper).to.have.style('color').equal('#fff');
    });

    it('should have color equal #ff0000 when textColor #ff0000 is passed', () => {
      const wrapper = shallow(<FullHeader title="TDD" textColor="#ff0000" />);
      expect(wrapper).to.have.style('color').equal('#ff0000');
    });
  });

  context('Font', () => {
    it('should have font equal sans-serif when none is passed', () => {
      const wrapper = shallow(<FullHeader title="TDD" />);
      expect(wrapper).to.have.style('font-family').equal('sans-serif');
    });

    it('should have font equal open-sans when font open-sans is passed', () => {
      const wrapper = shallow(<FullHeader title="TDD" font="open-sans" />);
      expect(wrapper).to.have.style('font-family').equal('open-sans');
    });
  });

  context('BgImg', () => {
    it('should have background-image empty when none is passed', () => {
      const wrapper = shallow(<FullHeader />);
      expect(wrapper).to.have.style('background-image').equal('url()');
    });

    it('should have background-image equal bg.jpg when bg.jpg is passed', () => {
      const wrapper = shallow(<FullHeader bgImg="bg.jpg" />);
      expect(wrapper).to.have.style('background-image').equal('url(bg.jpg)');
    });
  });

  context('Video', () => {
    it('should have video tag when video is passed', () => {
      const wrapper = shallow(<FullHeader video="video.mp4" />);
      expect(wrapper.find('video')).to.have.length(1);
    });

    it('should not have video tag when video is not passed', () => {
      const wrapper = shallow(<FullHeader />);
      expect(wrapper.find('video')).to.have.length(0);
    });

    it('should have video tag with source my_video.mp4 when source is passed', () => {
      const wrapper = shallow(<FullHeader video="my_video.mp4" />);
      expect(wrapper.find('video').props().src).to.be.equal('my_video.mp4');
    });
  });
});
