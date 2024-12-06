import React from "react";

function Navbar (){
    return(
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className ="container-fluid bg-dark margin p-3">
    <a className="navbar-brand textcolor" href="#">Start Bootstrap</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse collapse justify-content-end " id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link textcolor" href="#">Home</a>
        <a className="nav-link textcolor" href="#">About</a>
        <a className="nav-link textcolor" href="#">Services</a>
        <a className="nav-link textcolor" href="#">Contact</a>
      </div>
    </div>
  </div>
</nav>
    )
}

export default Navbar