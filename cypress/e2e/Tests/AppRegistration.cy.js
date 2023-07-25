import { EventRegistrationPage } from "../../Pages/EventRegistration";
import UserData from "../../fixtures/UserData.json"

const EventRegistrationpageElements=new EventRegistrationPage()

describe('EventRegistrationProcess',()=>{

    it('NewUserRegistration',()=>{

        EventRegistrationpageElements.URL()
        EventRegistrationpageElements.FirstNameAction(UserData.Fname)
        EventRegistrationpageElements.LastNameAction(UserData.Lname)
        EventRegistrationpageElements.UserEmailAction(UserData.UserEmail)
        EventRegistrationpageElements.UserPasswordAction(UserData.UserPassword)
        cy.wait(4000)
        EventRegistrationpageElements.PhonenumberAction(UserData.Phone)
        EventRegistrationpageElements.GenderAction()
        EventRegistrationpageElements.AccomodationAction(UserData.AccomodationData)
        EventRegistrationpageElements.VolunteeringoptionAction()
        EventRegistrationpageElements.FriendnameAction(UserData.FriendName)

        EventRegistrationpageElements.EventSubmission()

    })
})