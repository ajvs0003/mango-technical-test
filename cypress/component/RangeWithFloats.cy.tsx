import { Range } from '@/src/common/components/Range/Range';

const values = [1.99, 5.99, 10.99, 30.99, 50.99, 70.99];

describe('<Range /> with float', () => {
  it('renders', () => {
    cy.mount(<Range data={values} />);

    cy.get('#min').should('have.value', '1.99').should('be.disabled');
    cy.get('#max').should('have.value', '70.99').should('be.disabled');
  });

  describe('drag and drop check', () => {
    beforeEach(() => {
      cy.mount(<Range data={values} />);
    });
    it('Can drag min value', () => {
      const dataTransfer = new DataTransfer();

      cy.get('#drag-min').trigger('dragstart', {
        dataTransfer,
      });

      cy.get('#drop-2').trigger('drop', {
        dataTransfer,
      });

      cy.get('#min').should('have.value', '10.99');
    });

    it('Can drag max value', () => {
      const dataTransfer = new DataTransfer();

      cy.get('#drag-max').trigger('dragstart', {
        dataTransfer,
      });

      cy.get('#drop-2').trigger('drop', {
        dataTransfer,
      });

      cy.get('#max').should('have.value', '10.99');
    });

    it('It can not drag min value to more than max value', () => {
      const dataTransfer = new DataTransfer();

      cy.get('#drag-max').trigger('dragstart', {
        dataTransfer,
      });

      cy.get('#drop-2').trigger('drop', {
        dataTransfer,
      });

      cy.get('#max').should('have.value', '10.99');

      cy.get('#drag-min').trigger('dragstart', {
        dataTransfer,
      });

      cy.get('#drop-4').trigger('drop', {
        dataTransfer,
      });

      cy.get('#min').should('have.value', '1.99');
    });
    it('It can not drag max value to less than min value', () => {
      const dataTransfer = new DataTransfer();

      cy.get('#drag-min').trigger('dragstart', {
        dataTransfer,
      });

      cy.get('#drop-3').trigger('drop', {
        dataTransfer,
      });

      cy.get('#min').should('have.value', '30.99');

      cy.get('#drag-max').trigger('dragstart', {
        dataTransfer,
      });

      cy.get('#drop-1').trigger('drop', {
        dataTransfer,
      });

      cy.get('#max').should('have.value', '70.99');
    });
  });
});
