import tests from '../fixtures/seats.json'

describe("movie tikets reservations screen", () => {

    beforeEach( () => {
        cy.visit('/')
    })

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