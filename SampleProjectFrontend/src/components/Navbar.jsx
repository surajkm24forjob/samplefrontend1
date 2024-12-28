import LoginPage from "./LoginPage"


const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary border rounded">
  <div className="container-fluid">
    <a className="navbar-brand py-1 quicksand-m nav1" >ATG.WORLD</a>
    <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
        <div className="searchbar mx-auto">
    <form style={{ background: 'lightgrey',width: '20rem',padding: '2px', borderRadius:'20px' , gap:'10px'}} className="d-flex" role="search">      
       <span style={{ position: 'relative',  display: 'flex',flexDirection: 'column',justifyContent: 'center',color:'grey', backgroundColor:'lightgrey', left:10}}><i className="fa-solid fa-magnifying-glass" type='button' ></i></span>
      <input className="form-control me-4" style={{backgroundColor:'lightgrey', color: 'white',  maxWidth: "100%",height: '38px',width: '100%',fontSize:'13px' , borderRadius: '0px 20px 20px 0px',border: 'none'}} type="search" placeholder="Search for your favourite group in ATG" aria-label="Search"/>
    </form>
    </div>
    <div className="navbar">
        Create account. <a className="link-underline-light" href="#" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">It&apos;s free</a>
    </div>
    <LoginPage/>
        </div>  
  </div>
</nav>
    </>
  )
}

export default Navbar