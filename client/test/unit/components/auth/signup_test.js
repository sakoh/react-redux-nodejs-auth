import { renderComponent , expect } from '../../test_helper';
import Signup from '../../../../src/components/auth/signup';

describe('Signup' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(Signup);
  });

  it('renders something', () => {
    expect(component).to.exist;
  });

  it('has the right class', () => {
    expect(component).to.have.class('signup-component');
  });
});
