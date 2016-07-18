import { renderComponent , expect } from '../../test_helper';
import Signin from '../../../../src/components/auth/signin';

describe('Signin' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(Signin);
  });

  it('renders something', () => {
    expect(component).to.exist;
  });

  it('has the right class', () => {
    expect(component).to.have.class('signin-component');
  });
});
