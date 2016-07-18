import { renderComponent , expect } from '../test_helper';
import Feature from '../../../src/components/feature';

describe('Feature' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(Feature);
  });

  it('renders something', () => {
    expect(component).to.exist;
  });

  it('has the right class', () => {
    expect(component).to.have.class('feature-component');
  });
});
