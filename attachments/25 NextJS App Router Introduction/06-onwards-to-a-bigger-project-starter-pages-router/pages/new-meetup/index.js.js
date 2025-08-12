import NewMeetupForm from "../../components/meetups/NewMeetupForm";

// our-domain.com/new-neetup

function NewMeetupPage() {
  function addMeetuphandler(enteredMeetupData) {
    console.log(enteredMeetupData);
  }

  return <NewMeetupForm onAddMeetup={addMeetuphandler} />;
}
