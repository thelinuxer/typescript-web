describe('tic tac toe spec', () => {
  it('user wins when a row is complete', () => {
    cy.visit('http://tictactoe.automationtesting.tech');
    cy.get('#square-0').click();
    cy.get('#square-3').click();
    cy.get('#square-1').click();
    cy.get('#square-4').click();
    cy.get('#square-2').click();
    cy.get('#winner').should('have.text', 'Winner: X')
  });

  it('a cell selected by a player cannot be selected by the other player', () => {

  });

  it('go back to certain move', () => {

  });
});