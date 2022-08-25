function Balance() {
  const [balance, setBalance] = React.useState(null);
  const context = React.useContext(UserContext);

  // get user and set balance
  React.useEffect(() => {
    if (context.currentUser !== null) {
      fetch(`/find/user/${context.currentUser}`)
        .then(response => response.json())
        .then(user => {
          setBalance(user.balance);
        });
    }
  }, []);

  return (
    <Card
      bgcolor="light"
      txtcolor="black"
      headerText="Balance"
      status=""
      body={
        context.currentUser !== null ?
        <div>
          {balance === null ? 'Checking...' : `Your Balance Is $${balance}.`}
        </div>
        :
        <div>
          Login First.
        </div>
      }
    />
  );
}