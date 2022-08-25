function Home() {
  return(
    <Card
      bgcolor="light"
      txtcolor="dark"
      headerText="Welcome to MIT Bad Bank"
      body={<>
      Click here to <a href="#Login" class="btnDeposit">Login</a>.    
      </>}
    />
  );
}