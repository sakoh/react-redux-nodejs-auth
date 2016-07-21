import { renderComponent, driver, expect } from '../test_helper';
import Welcome from '../../../src/components/welcome';

describe('Welcome' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(Welcome);
  });

  it('renders something', () => {
    expect(component).to.exist;
  });

  it('has the right class', () => {
    expect(component).to.have.class('welcome-component');
  });
});
