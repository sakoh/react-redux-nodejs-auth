import { renderComponent , expect } from '../test_helper';
import Alert from '../../../src/components/alert';

describe('Alert' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(Alert);
  });

  it('renders something', () => {
    expect(component).to.exist;
  });

  it('has the right class', () => {
    expect(component).to.have.class('alert-component');
  });
});
