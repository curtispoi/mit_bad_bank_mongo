function Deposit() {
  const [showForm, setShowForm] = React.useState({form: true, balance: null});
  const context = React.useContext(UserContext);

  const formElements = ['amount', 'button'];
  const bgcolor = 'light'
  const txtcolor = 'dark'
  const initialButtonMessage = 'Deposit'
  const successMessage = `Your Balance Is $${showForm.balance}.`
  const successButtonText = 'Would you like to make another deposit?'

  return (
    <Card
      bgcolor={bgcolor}
      txtcolor={txtcolor}
      headerText="Deposit"
      body={
        context.currentUser !== null ? (
        showForm.form ? 
          <Form 
            pageName="Deposit"
            setShowForm={setShowForm}
            formElements={formElements}
            bgcolor={bgcolor} 
            txtcolor={txtcolor}
            initialButtonMessage={initialButtonMessage}
          /> 
        : 
          <FormMessage
            pageName="Deposit"
            setShowForm={setShowForm}
            bgcolor={bgcolor}
            txtcolor={txtcolor}
            successMessage={successMessage}
            successButtonText={successButtonText}
          />
        )
        :
        <div>
         Please <a href='#/login/' className="btnDeposit" data-toggle="tooltip" title="Login to your Account">Login</a> to deposit funds and check your balance. <br/><br/><br/>
				  Don't have an account? Create one! <a href="#/createaccount/" className="btnDeposit" data-toggle="tooltip" title="Create new account"> here...</a>. 
        </div>
      }
    />  
  );
}