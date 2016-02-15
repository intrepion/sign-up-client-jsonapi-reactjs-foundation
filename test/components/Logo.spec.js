import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Logo from '../../components/Logo';

function setup() {
  let props = {
  };

  let renderer = TestUtils.createRenderer();
  renderer.render(<Logo {...props} />);
  let output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer,
  };
}

describe('Logo component', () => {
  it('should render correctly', () => {
    const { output } = setup();

    expect(output.type).toBe('a');
    expect(output.props.children.type).toBe('img');
  });
});
