import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Legal from '../../components/Legal';

function setup() {
  let props = {
  };

  let renderer = TestUtils.createRenderer();
  renderer.render(<Legal {...props} />);
  let output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer,
  };
}

describe('Legal component', () => {
  it('should render correctly', () => {
    const { output } = setup();

    expect(output.type).toBe('ul');
    expect(output.props.className).toBe('menu');

    let [ li1, li2, li3 ] = output.props.children;

    expect(li1.type).toBe('li');
    expect(li1.props.children.type).toBe('a');
    expect(li1.props.children.props.children).toBe('Terms');

    expect(li2.type).toBe('li');
    expect(li2.props.children.type).toBe('a');
    expect(li2.props.children.props.children).toBe('Privacy');

    expect(li3.type).toBe('li');
    expect(li3.props.children.type).toBe('span');
    expect(li3.props.children.props.className).toBe('footer-item');
    expect(li3.props.children.props.children).toBe('©9999 Company');
  });
});
