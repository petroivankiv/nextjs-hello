describe('Navigation', () => {
  it('should has Blog title', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/');

    cy.get('h2').contains('Blog');
  });
});
