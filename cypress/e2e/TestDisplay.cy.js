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
                cy.get(':nth-child(2) > .movie-seances__time').first().contains('12:00').click();
                test.data.forEach((seat) => {
                cy.get(`.buying-scheme__wrapper > :nth-child(${seat.row}) > :nth-child(${seat.seat})`).click();  
            })
          })
       })
    })
})
    

