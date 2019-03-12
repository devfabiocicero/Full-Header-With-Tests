import React from 'react';
import FullHeader from '../src/Main'; // This is our component
import { storiesOf } from '@storybook/react';

storiesOf('React Full Header', module)
  .add('with title', () => (
    <FullHeader title="TDD" />
  ))
  .add('with title and subtitle', () => (
    <FullHeader
      title="TDD"
      subtitle="TDD With JS"
    />
  ))
  .add('with title, subtitle and bgColor', () => (
    <FullHeader
      title="TDD"
      subtitle="TDD With JS"
      bgColor="#3299BB"
    />
  ))
  .add('with title, subtitle, bgColor and textColor', () => (
    <FullHeader
      title="TDD"
      subtitle="TDD With JS"
      bgColor="#3299BB"
      textColor="#FF9900"
    />
  ))
  .add('with title, subtitle, bgColor, textColor and font', () => (
    <FullHeader
      title="TDD"
      subtitle="TDD With JS"
      bgColor="#3299BB"
      textColor="#FF9900"
      font="cursive"
    />
  ))
  .add('with title, subtitle and bgImg', () => (
    <FullHeader
      title="TDD"
      subtitle="TDD With JS"
      bgImg="https://raw.githubusercontent.com/willianjusten/photo-examples/master/iceland-glacier.jpg"
    />
  ))
  .add('with title, subtitle and video', () => (
    <FullHeader
      title="TDD"
      subtitle="TDD With JS"
      bgColor="#3299BB"
      textColor="#FF9900"
      video="http://html5videoformatconverter.com/data/images/happyfit2.mp4"
    />
  ));
