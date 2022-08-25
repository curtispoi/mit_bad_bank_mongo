function CreateAccount() {
  const [showForm, setShowForm] = React.useState(true);

  const formElements = ['name', 'email', 'password', 'button'];
  const bgcolor = 'primary';
  const txtcolor = 'white'
  const initialButtonMessage = 'Create Account'
  const successMessage = 'Account was created. Do you want to create another account?'
  const successButtonText = 'Create another account'

  return (
    <Card
      bgcolor={bgcolor}
      txtcolor={txtcolor}
      headerText="Create Account"
      body={
        showForm ? 
        <Form 
          pageName="CreateAccount"
          setShowForm={setShowForm}
          formElements={formElements}
          bgcolor={bgcolor} 
          txtcolor={txtcolor}
          initialButtonMessage={initialButtonMessage}
        /> : 
        <FormMessage
          pageName="CreateAccount"
          setShowForm={setShowForm}
          bgcolor={bgcolor}
          txtcolor={txtcolor}
          successMessage={successMessage}
          successButtonText={successButtonText}
        />
      }
    />
  );
}
