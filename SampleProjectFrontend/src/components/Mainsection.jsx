import PeopleIcon from '@mui/icons-material/People';

const Mainsection = () => {
  return (
    <>
    <div className="py-4 px-4 container-fluid Nav" style={{top:'2rem'}}>
       <ul className="nav" style={{marginBottom: '-14px'}}>
  <li className="nav-item">
    <a className="nav-link text-black"  aria-current="page" href="#">All Post(32)</a>
  </li> 
  <li className="nav-item">
    <a className="nav-link" href="#">Article</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Event </a>
  </li>
  <li className="nav-item">
    <a className="nav-link " aria-disabled="false">Education</a>
  </li>
  <li className="nav-item">
    <a className="nav-link " aria-disabled="false">Job</a>
  </li>
  <div className="buttonGroup">
  <div className="dropdown">
  <a className="btn dropdown-toggle" style={{backgroundColor:'lightgrey', fontStyle:'normal', fontWeight:700}} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    Write a Post 
  </a>

  <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="#">Action</a></li>
    <li><a className="dropdown-item" href="#">Another action</a></li>
    <li><a className="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
<button className="btn btn-primary" type="submit">  <PeopleIcon/> Join Group</button>
  </div> 
</ul>
        </div>
       
        <div className="mobile-posts">
        <span>Posts (368)</span>
        <div className="dropdown">
          <button className="btn dropdown-toggle" style={{ backgroundColor: 'lightgrey' }} type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Filter: All
          </button>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">All</a></li>
            <li><a className="dropdown-item" href="#">Articles</a></li>
            <li><a className="dropdown-item" href="#">Events</a></li>
            <li><a className="dropdown-item" href="#">Education</a></li>
            <li><a className="dropdown-item" href="#">Jobs</a></li>
          </ul>
        </div>
      </div>
      </>
  )
}

export default Mainsection