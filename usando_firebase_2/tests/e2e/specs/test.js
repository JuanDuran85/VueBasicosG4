describe('My First Test', () => {
  it('Visits the app root url', () => {
    cy.visit('/');
    cy.contains('h1', 'Lista de Peliculas');
    cy.get('[data-cy="loginBoton"]').click();
    let email = "user@user.com";
    let password = '123456789';
    cy.get('#input-email').type(email).should('have.value', 'user@user.com');
    cy.get('#feedback-user').type(password).should('have.value',password);
    cy.pause();
    cy.get('[data-cy="resetBoton"]').click();
    cy.url().should('include', '/login');
    cy.get('#input-email').type(email).should('have.value', 'user@user.com');
    cy.get('#feedback-user').type(password).should('have.value',password);
    cy.get('[data-cy="loginBotonEntrar"]').click();
    
    cy.window().then(win =>{
      console.log(win.location);
    });

    cy.location().should((loc) => {
      expect(loc.href).to.eq('http://localhost:8081/');
      expect(loc.pathname).to.eq('/');
    });

    cy.location('href').should('equal', 'http://localhost:8081/');

    cy.get('[data-cy="usuarioNombre"]').should('be.visible');
    
    cy.get('[data-cy="verMas2"]').click();
    cy.get('[data-cy="agregarFav"]').click();
    
    cy.pause();
    
    cy.get('[data-cy="usuarioNombre"]').click();
    cy.get('[data-cy="visitarFav"]').click();


    cy.pause();
    
    cy.get('[data-cy="usuarioNombre"]').click();
    cy.get('[data-cy="salidaBoton"]').click();
    cy.url().should('include', '/login');
  })
})
