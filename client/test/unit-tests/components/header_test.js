import { renderComponent , expect } from '../test_helper';
import Header from '../../../src/components/header';

describe('Header' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(Header);
  });

  it('renders something', () => {
    expect(component).to.exist;
  });

  it('has the right class', () => {
    expect(component).to.have.class('header-component');
  });
});
