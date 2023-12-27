import tests from '../fixtures/seats.json'
describe("movie tikets reservations screen", () => {
   
   beforeEach( () => {
     cy.visit('/')
  })

tests.forEach((test) => {
    it("should display 7 days", () => {
       cy.get('.page-nav__day').should('have.length', 7)
    })
        tests.forEach((test) => {
            it("Should be possible to book", () => {
                cy.get('.page-nav > :nth-child(2)').click()
                cy.get('.movie').first().contains('11:00').click();
                test.data.forEach((seat) => {
                cy.get(`.buying-scheme__wrapper > :nth-child(${seat.row}) > :nth-child(${seat.seat})`).click();  
            })
          })
       })
    })
})
    
describe("login and pass", () => {
    
  beforeEach( () => {
    cy.visit('https://qamid.tmweb.ru/admin/')
  })

  const {
    email,
    pass,
  } = require("../fixtures/all.json");

  it ('test login', () => {
    cy.login(email,pass)
    cy.get('#hall-control > .conf-step__header').should('be.visible')
  })

  it ('test empty email', () => {
    cy.login(null,pass)
    cy.get('[for="email"] > .login__input').then((elements) => {
        expect(elements[0].checkValidity()).to.be.false
        expect(elements[0].validationMessage).to.be.eql('Заполните это поле.')
  })
})

  it ('test empty password', () => {
    cy.login(email, null)
    cy.get('[for="pwd"] > .login__input').then((elements) => {
      expect(elements[0].checkValidity()).to.be.false
      expect(elements[0].validationMessage).to.be.eql('Заполните это поле.')
    })
  })

})
