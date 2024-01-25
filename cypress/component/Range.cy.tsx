import { Range } from '@/src/common/components/Range/Range';

describe('<Range />', () => {
  it('renders', () => {
    cy.mount(
      <Range
        staticData={{
          min: 1,
          max: 100,
        }}
      />
    );

    cy.get('#min').should('have.value', '1');
    cy.get('#max').should('have.value', '100');
  });

  describe('when min value is changed', () => {
    beforeEach(() => {
      cy.mount(
        <Range
          staticData={{
            min: 1,
            max: 50,
          }}
        />
      );
    });

    it('It change min value correctly', () => {
      cy.get('#min').should('have.value', '1');
      cy.get('#min').clear().type('10').blur();
      cy.get('#min').should('have.value', '10');
    });
    it('It can not change to max value (but will take the last number that is correct) ', () => {
      cy.get('#min').should('have.value', '1');
      cy.get('#min').clear().type('50').blur();
      cy.get('#min').should('have.value', '5');
    });
  });
  describe('when max value is changed', () => {
    beforeEach(() => {
      cy.mount(
        <Range
          staticData={{
            min: 1,
            max: 50,
          }}
        />
      );
    });

    it('It change max value correctly', () => {
      cy.get('#max').should('have.value', '50');
      cy.get('#max').clear().type('40').blur();
      cy.get('#max').should('have.value', '40');
    });
    it('It can not change to max value (but will take the last number that is correct) ', () => {
      cy.get('#max').should('have.value', '50');
      cy.get('#max').clear().type('1').blur();
      cy.get('#max').should('have.value', '50');
    });
  });

  describe('drag and drop check', () => {
    beforeEach(() => {
      cy.mount(
        <Range
          staticData={{
            min: 1,
            max: 50,
          }}
        />
      );
    });
    it('Can drag min value', () => {
      const dataTransfer = new DataTransfer();

      cy.get('#drag-min').trigger('dragstart', {
        dataTransfer,
      });

      cy.get('#drop-39').trigger('drop', {
        dataTransfer,
      });

      cy.get('#min').should('have.value', '40');
    });

    it('Can drag max value', () => {
      const dataTransfer = new DataTransfer();

      cy.get('#drag-max').trigger('dragstart', {
        dataTransfer,
      });

      cy.get('#drop-39').trigger('drop', {
        dataTransfer,
      });

      cy.get('#max').should('have.value', '40');
    });

    it('It can not drag min value to more than max value', () => {
      const dataTransfer = new DataTransfer();

      cy.get('#drag-max').trigger('dragstart', {
        dataTransfer,
      });

      cy.get('#drop-39').trigger('drop', {
        dataTransfer,
      });

      cy.get('#max').should('have.value', '40');

      cy.get('#drag-min').trigger('dragstart', {
        dataTransfer,
      });

      cy.get('#drop-40').trigger('drop', {
        dataTransfer,
      });

      cy.get('#min').should('have.value', '1');
    });
    it('It can not drag max value to less than min value', () => {
      const dataTransfer = new DataTransfer();

      cy.get('#drag-min').trigger('dragstart', {
        dataTransfer,
      });

      cy.get('#drop-39').trigger('drop', {
        dataTransfer,
      });

      cy.get('#min').should('have.value', '40');

      cy.get('#drag-max').trigger('dragstart', {
        dataTransfer,
      });

      cy.get('#drop-38').trigger('drop', {
        dataTransfer,
      });

      cy.get('#max').should('have.value', '50');
    });
  });
});
