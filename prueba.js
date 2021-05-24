describe ('Login test', function(){
it ('Login', function(){
      //Login de usuario
      cy.visit ('https://practis.co.il/automation/');
      cy.get('[type="text"]').type('admin');
      cy.get('[type="password"]').type('admin');
      cy.get('button').click();
      //Con esta validacion comprueba que se encuentre logeado
      cy.get('#welcomeMsg').contains ('Welcome to the Main page!'); 
      })

      it('Button 1', function(){
            cy.get('#do1').click();
            cy.get('#do1').should('be.disabled')
            cy.wait(1000);
       
             })  
       
        it('Button 2', function(){
            cy.get('#do2').click();
            cy.get('#do2').should('be.disabled')
            Cypress.on('uncaught:exception', (err, runnable) => {
                // returning false here prevents Cypress from
                // failing the test
                return false
              })
        
             })  

           
        it('Button up', function(){
            cy.get('#btnIncreaseFont').click().click().click();
            cy.wait(1000);
             }) 
       
        it('Button down', function(){
            cy.get('#btnDecreaseFont').click().click().click().click();
            cy.wait(1000);
             })
        
        it('set background', function(){
        cy.get('#bgColor').type('pink');
        cy.get('#btnSetBgColor').click();
              })
 
})