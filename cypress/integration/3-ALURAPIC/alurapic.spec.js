describe('Usabilidade tela inicial', () => {

    beforeEach(() => {
      cy.visit('https://alura-fotos.herokuapp.com')

     })

     it('verifica mensagem de user name para letras maiusculas', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="userName"]').type('Jaqueline');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Must be lower case').should('be.visible');
    
    })

    

})
