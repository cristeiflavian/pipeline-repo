describe('Run pipeline', ()=>{
    beforeEach(()=>{
        cy.visit('https://demoqa.com/')
    })

    it('Test case1', ()=>{
        cy.get('h5').contains('Elements').click()
    })

    it('Test case2', ()=>{
        cy.get('h5').contains('Elements').click().then((el)=>{
            cy.log(el.text())
        })
        cy.get('span').contains('Text Box').click()
        cy.get('#userName').click().clear().type('Cristei Flavian')
    })
})