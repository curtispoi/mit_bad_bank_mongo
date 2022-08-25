function Withdraw() {
  const [showForm, setShowForm] = React.useState({form: true, balance: null});
  const context = React.useContext(UserContext);
  
  const formElements = ['amount', 'button'];
  const bgcolor = 'warning';
  const txtcolor = 'black'
  const initialButtonMessage = 'Withdraw'
  const successMessage = `Your Balance Is $${showForm.balance}.`
  const successButtonText = 'Would you like to make another withdraw?'

  return (
    <Card
      bgcolor={bgcolor}
      txtcolor={txtcolor}
      headerText="Withdraw"
      body={
        context.currentUser !== null ? (
        showForm.form ? 
          <Form 
            pageName="Withdraw"
            setShowForm={setShowForm}
            formElements={formElements}
            bgcolor={bgcolor} 
            txtcolor={txtcolor}
            initialButtonMessage={initialButtonMessage}
          /> 
        : 
          <FormMessage
            pageName="Withdraw"
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