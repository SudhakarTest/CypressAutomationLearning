describe("Alertpopup handling",()=>{

    //Cypress automatically closes the popup windows shown in UI by clicking on Ok button present in popups. But to perform other actions like, validating the message shown in 
    //popup, closing via 'Cancel' button, below mentioned event (Cy.on()) needs to be written in Automation script

    it("Basic Alert popup with Ok button",()=>{

        cy.visit("https://nxtgenaiacademy.com/alertandpopup/")
        cy.get("button[name='alertbox']").click()

        cy.on('window:alert',(t)=>{

            expect(t).to.contains('I am an alert box!')

        })

    })
})