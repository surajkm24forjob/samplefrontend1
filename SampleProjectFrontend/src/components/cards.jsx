import CreateIcon from '@mui/icons-material/Create';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';

export default function Cards () {
  return (
    <>
    <div className="container-fluid w-85 p-4 my-5 px-5 py-2 mx-auto card-section">
      <div className='row mx-auto'>
        <div className="col my-3 px-5" style={{maxWidth:'100%'}}>
        <div className="CardSection d-flex flex-column align-items-center w-100 h-75">
      <div className="card text-start mb-3 h-100 d-flex justify-content-start w-75">
  <img src="/sample1.jpg" style={{height:'17rem'}} className="card-img-top img-w-24" alt="..."/>
  <div className="card-body">
    <h5 className="card-title" style={{fontSize:'19px', fontWeight:'600', position:'relative'}}><img style={{    height: 'auto',width: '3.5%'}} src='/Writing.png'/> <span style={{position:'relative',top:'3px'}}>Article</span></h5>
    <p className="card-text" style={{fontSize:'20px', fontWeight:'600', marginBottom:'5px'}}>What if famous brands had regular fonts? Meet <br /> RegulaBrands!</p>
    <p className="card-text"><small className="text-body-secondary mx-auto px-1" style={{fontSize:'19px', fontWeight:'400', paddingBottom:'25px'}}>I&apos;ve worked in UX for the better part of a decade. From now on, I plan to rei...</small></p>
    <div className='cardstack py-2'>
    <Stack direction="row" spacing={2}>
      <Avatar alt="Remy Sharp" src="/pic1.avif" />
      <p style={{    display: 'flex',position: 'relative',top: '5px'}}>Sarthak Kamra</p>
      <div className='Icons' style={{marginLeft:'58%', position:'relative', top:'5px'}}> 
      <i style={{position:'relative', right:'53%'}} className="fa-regular fa-eye"></i>
      <p style={{position:'relative', right:'45%'}}>1.4k views</p>
      <a type='button'><img style={{height:'27px',padding: '5px' ,backgroundColor:'lightgrey'}} src="/share (1).png" alt="" /></a>
      </div>
    </Stack>
    </div>
    
  </div>
</div>

<div className="card text-start mb-3">
  <img src="/Sample3.jpg" style={{height:'17rem',backgroundPosition:'center', backgroundRepeat:'no-repeat', backgroundSize:'cover'}} className="card-img-top img-w-24" alt="..."/>
  <div className="card-body">
    <h5 className="card-title" style={{fontSize:'18px', fontWeight:'600'}}><img style={{    height: 'auto',width: '3.5%'}} src='/microscope.png'/> <span style={{position:'relative',top:'3px'}}>Education</span></h5>
    <p className="card-text" style={{fontSize:'20px', fontWeight:'600', marginBottom:'5px'}}>Tax Benefits for Investment under National Pension<br /> Scheme launched by Government</p>
    <p className="card-text"><small className="text-body-secondary mx-auto px-1" style={{fontSize:'19px', fontWeight:'400', paddingBottom:'25px'}}>I&apos;ve worked in UX for the better part of a decade. From now on, I plan to rei...</small></p>
    <div className='cardstack py-2'>
    <Stack direction="row" spacing={2}>
      <Avatar alt="Remy Sharp" src="/blondgirl.jpg" />
      <p style={{    display: 'flex',position: 'relative',top: '5px'}}>Sarah west</p>
      <div className='Icons' style={{marginLeft:'58%', position:'relative', top:'5px'}}> 
      <i style={{position:'relative', right:'53%'}} className="fa-regular fa-eye"></i>
      <p style={{position:'relative', right:'45%'}}>1.4k views</p>
      <a type='button'><img style={{height:'27px',padding: '5px' ,backgroundColor:'lightgrey'}} src="/share (1).png" alt="" /></a>
      </div>
    </Stack>
    </div>
    
  </div>
</div>
<div className="card text-start mb-3">
  <img src="/Sample4.avif" style={{height:'17rem'}} className="card-img-top img-w-24" alt="..."/>
  <div className="card-body">
    <h5 className="card-title" style={{fontSize:'18px', fontWeight:'600'}}><img style={{    height: 'auto',width: '3.5%'}} src='/journal_5526358.png'/> <span style={{position:'relative',top:'3px'}}>Meetup</span></h5>
    <p className="card-text" style={{fontSize:'20px', fontWeight:'600', marginBottom:'5px'}}>Finance & Investment Elite Social Mixer @Lujiazui</p>
    <p className="card-text"><small className="text-body-black mx-auto px-1" style={{fontSize:'15px', fontWeight:'600', paddingBottom:'25px'}}><i className="fa-solid fa-calendar-day"></i>  Fri, 12 Oct, 2018    <i style={{position:'relative', left:'50px'}} className="fa-solid fa-location-dot"></i> <small style={{position:'relative', left:'60px',fontSize:'15px', fontWeight:'600', paddingBottom:'25px'}}>Ahmedabad, India</small></small></p>
    <div className="d-grid mx-auto">
  <button className="btn btn-outline-dark text-danger" style={{fontWeight:'500', fontSize:'14px'}} type="button">Visit Website</button>
</div>
    <div className='cardstack py-2'>
    <Stack direction="row" spacing={2}>
      <Avatar alt="Remy Sharp" src="/techiegirl.jpg" />
      <p style={{    display: 'flex',position: 'relative',top: '5px'}}>Ronal Jones</p>
      <div className='Icons' style={{marginLeft:'58%', position:'relative', top:'5px'}}> 
      <i style={{position:'relative', right:'53%'}} className="fa-regular fa-eye"></i>
      <p style={{position:'relative', right:'45%'}}>1.4k views</p>
      <a type='button'><img style={{height:'27px',padding: '5px' ,backgroundColor:'lightgrey'}} src="/share (1).png" alt="" /></a>
      </div>
    </Stack>
    </div>
    
  </div>
</div>
<div className="card text-start mb-3">
  <div className="card-body">
    <h5 className="card-title" style={{fontSize:'18px', fontWeight:'600'}}><img style={{    height: 'auto',width: '3.5%'}} src='/Suitcase.png'/> <span style={{position:'relative',top:'3px'}}>Job</span></h5>
    <p className="card-text" style={{fontSize:'20px', fontWeight:'600', marginBottom:'5px'}}>Software Developer</p>
    <p className="card-text"><small className="text-body-black mx-auto px-1" style={{fontSize:'15px', fontWeight:'600', paddingBottom:'25px'}}><WorkOutlineIcon/>  Innovaccer Analytics Private Ltd.   <i style={{position:'relative', left:'50px'}} className="fa-solid fa-location-dot"></i> <small style={{position:'relative', left:'60px',fontSize:'15px', fontWeight:'600', paddingBottom:'25px'}}>Noida, India</small></small></p>
    <div className="d-grid mx-auto">
  <button className="btn btn-outline-secondary text-success" style={{fontWeight:'500', fontSize:'14px'}} type="button">Apply on Timesjobs</button>
</div>
    <div className='cardstack py-2'>
    <Stack direction="row" spacing={2}>
      <Avatar alt="Remy Sharp" src="/toughguy.jpg" />
      <p style={{    display: 'flex',position: 'relative',top: '5px'}}>Joseph Gray</p>
      <div className='Icons' style={{marginLeft:'58%', position:'relative', top:'5px'}}> 
      <i style={{position:'relative', right:'53%'}} className="fa-regular fa-eye"></i>
      <p style={{position:'relative', right:'45%'}}>1.4k views</p>
      <a type='button'><img style={{height:'27px',padding: '5px' ,backgroundColor:'lightgrey'}} src="/share (1).png" alt="" /></a>
      </div>
    </Stack>
    </div>
    
  </div>
</div>

      </div>
        </div>
        <div className="col w-50">
        <div className="Searcharea">
      <div className='SearchareaDiv'>
      <input type="text" name="" id="" className='form-control form-control-md' style={{border: 'none',borderBottom: '1px solid lightgrey' ,  marginTop: '5rem', position: 'relative',bottom: '50%',left: '43%'}} placeholder="&#xf041; Search"  />
      <CreateIcon style={{position: 'relative',bottom: ' 65%',left: "86%"}}/>
      <p style={{fontSize:'12px',color:'lightgrey',fontWeight:'lighter',WebkitTextStroke:'0.4px grey',position: 'relative',bottom: '53%',left: '7rem', margin:'10px'}}><i className="fa-solid fa-circle-exclamation"></i> Your location help us server better and extend a personalised experience</p>
      </div>
      
    </div>
        </div>
      </div>
     
   

    </div>
    </>
  )
}

