import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import NotSignedIn from '../../components/NotSignedIn';

function setup() {
  let props = {
  };

  let renderer = TestUtils.createRenderer();
  renderer.render(<NotSignedIn {...props} />);
  let output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer,
  };
}

describe('NotSignedIn component', () => {
  it('should render correctly', () => {
    const { output } = setup();

    expect(output.type).toBe('ul');
    expect(output.props.className).toBe('menu');

    let [ li1, li2 ] = output.props.children;

    expect(li1.type).toBe('li');
    expect(li1.props.children.type).toBe('a');
    expect(li1.props.children.props.children).toBe('Sign In');

    expect(li2.type).toBe('li');
    expect(li2.props.children.type).toBe('a');
    expect(li2.props.children.props.className).toBe('button');
    expect(li2.props.children.props.children).toBe('Sign Up');
  });
});
