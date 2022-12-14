function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="./index.html">
        <img src="./_img/bank_logo.png" width="30" height="30" />
        MIT BadBank</a>

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">

          <li className="nav-item">
            <a className="nav-link" href="#/createAccount/">Create Account</a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#/login/">Login</a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#/deposit/">Deposit</a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#/withdraw/">Withdraw</a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#/balance/">Balance</a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#/allData/">All Data</a>
          </li>

        </ul>
      </div>
    </nav>
  );
}
