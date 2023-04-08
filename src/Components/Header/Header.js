import React from 'react';

const Header = () => {
    return (
        <div className=' m-2'>
          <nav class="navbar"style={{backgroundColor: "#e3f2fd"}}>
  <div className="container-fluid">
  <h3>Navbar</h3>
    <form className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>
        </div>
    );
};

export default Header;