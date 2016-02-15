import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import FollowUs from '../../components/FollowUs';

function setup() {
  let props = {
  };

  let renderer = TestUtils.createRenderer();
  renderer.render(<FollowUs {...props} />);
  let output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer,
  };
}

describe('FollowUs component', () => {
  it('should render correctly', () => {
    const { output } = setup();

    expect(output.type).toBe('ul');
    expect(output.props.className).toBe('menu');

    let [ li1, li2, li3, li4, li5, li6 ] = output.props.children;

    expect(li1.type).toBe('li');
    expect(li1.props.children.type).toBe('span');
    expect(li1.props.children.props.className).toBe('footer-item');
    expect(li1.props.children.props.children).toBe('Follow Us:');

    expect(li2.type).toBe('li');
    expect(li2.props.children.type).toBe('a');
    expect(li2.props.children.props.children.type).toBe('span');
    expect(li2.props.children.props.children.props.className).toBe('fi-social-twitter');

    expect(li3.type).toBe('li');
    expect(li3.props.children.type).toBe('a');
    expect(li3.props.children.props.children.type).toBe('span');
    expect(li3.props.children.props.children.props.className).toBe('fi-social-facebook');

    expect(li4.type).toBe('li');
    expect(li4.props.children.type).toBe('a');
    expect(li4.props.children.props.children.type).toBe('span');
    expect(li4.props.children.props.children.props.className).toBe('fi-social-youtube');

    expect(li5.type).toBe('li');
    expect(li5.props.children.type).toBe('a');
    expect(li5.props.children.props.children.type).toBe('span');
    expect(li5.props.children.props.children.props.className).toBe('fi-social-instagram');

    expect(li6.type).toBe('li');
    expect(li6.props.children.type).toBe('a');
    expect(li6.props.children.props.children.type).toBe('span');
    expect(li6.props.children.props.children.props.className).toBe('fi-social-pinterest');
  });
});
