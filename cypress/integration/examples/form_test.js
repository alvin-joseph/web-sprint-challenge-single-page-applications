describe('User Onboarding App', () => {
    //here are our tests
    //we are trying to simulate what the user does

    beforeEach(() => {
        //code we want running before our test run
        cy.visit('http://localhost:3000/pizza')
    });

    const nameInput = () => cy.get('input[name="name"]')
    const specialInput = () => cy.get('input[name="special"]')
    const sizeSelect = () => cy.get('select[name="size"]')
    const pepperoniBox = () => cy.get('input[name="pepperoni"]')
    const sausageBox = () => cy.get('input[name="sausage"]')
    const baconBox = () => cy.get('input[name="bacon"]')
    const extraCheeseBox = () => cy.get('input[name="extraCheese"]')
    const sauceBtn = () => cy.get('input[name="sauce"]')
    const submitBtn = () => cy.get('button')


    it('sanity test to make sure tests work', () => {
        expect(1 + 2).to.equal(3);
        expect(2 + 2).not.to.equal(5);
        expect({}).not.to.equal({}) 
        expect({}).to.eql({})
    });

    it("can type text into inputs", () => {
        nameInput()
          .should("have.value", "")
          .type("Billy Bob")
          .should("have.value", "Billy Bob")

        specialInput()
          .should("have.value", "")
          .type("I like pizza")
          .should("have.value", "I like pizza")
        
    });


    it('can check multiple toppings', () => {
        pepperoniBox().check()
        sausageBox().check()
        baconBox().check()
        extraCheeseBox().check()
    })


    it('should submit the form once details are filled out', () => {
        nameInput().type("Jordan")
        sizeSelect().select('Large')
        sauceBtn().check()
        specialInput().type("I like pizza")
        submitBtn().click()
    })
})