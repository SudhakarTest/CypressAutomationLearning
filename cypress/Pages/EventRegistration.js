export class EventRegistrationPage
{
    PageElements =
    {
       FirstName:'input#first_name',
       LastName:'input#last_name',
       UserEmail:'input#user_email',
       UserPassword:'input#user_pass',
       Phone:'input#phone_1665630575',
       Gender:'input#radio_1665631120_Male',
       AccomodationData:'input#input_box_1665631521',
       VolunteeringOption:'input#radio_1665632432_No',
       //EventReferralSource:'',
       FriendName:'input#input_box_1665632559',
       Submit:'button[type="Submit"]'

    }

    FirstNameAction(Fname)
    {
          cy.get(this.PageElements.FirstName).type(Fname)
    }
    LastNameAction(Lname)
    {
        cy.get(this.PageElements.LastName).type(Lname)
    }
    UserEmailAction(EmailId)
    {
        cy.get(this.PageElements.UserEmail).type(EmailId)
    }
    UserPasswordAction(Emailpwd)
    {
     cy.get(this.PageElements.UserPassword).type(Emailpwd)
    }
    PhonenumberAction(Phonenumber)
    {
      cy.get(this.PageElements.Phone).type(Phonenumber)
    }
    GenderAction()
    {
      cy.get(this.PageElements.Gender).click()
    }
    AccomodationAction(AccomodationOption)
    {
       cy.get(this.PageElements.AccomodationData).type(AccomodationOption)
    }
    VolunteeringoptionAction()
    {
        cy.get(this.PageElements.VolunteeringOption).click()
    }
    FriendnameAction(friendname)
    {
       cy.get(this.PageElements.FriendName).type(friendname)
    }
    EventSubmission()
    {
        cy.get(this.PageElements.Submit).click()
    }
    

    URL()
    {
        cy.visit(Cypress.env('URL'))
    }

}