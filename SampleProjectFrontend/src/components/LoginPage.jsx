import Signuppage from "./Signuppage";


export default function LoginPage () {
  return (
    <>
   
   <div className="modal modal fade modal-xl g-0 mx-auto modal-centered"  id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel1" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered w-50">
    <div className="modal-content">
      <div className="modal-header" style={{backgroundColor:'lightgrey'}}>
        <h5 className="modal-title text-success mx-auto" style={{fontSize:'13.5px', fontWeight:'600' }}>Let&apos;s learn, share & inspire each other with our passion for computer engineering. Sign up now</h5>
        <button type="button" style={{position: 'relative',bottom: '45px',left: '38px' , backgroundColor:"grey",bsBtnPaddingY: '.25rem', bsBtnPaddingX: '.5rem'}} className="btn-close btn-secondary active rounded-5 w-44" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <div className="container">
            <div className="row row-cols-2">
                <div className="col col-md-6 text-start">
                    <p className="mx-1" style={{fontSize:'22.5px', fontWeight:'650'}}>Create Account</p>
                    <form action="" className="my-3" method="post">
                        <div className="row g-0">
                             <div className="col-6">
                                <input type="text" name="" className="form-control" id="" placeholder="First Name" />
                             </div>
                             <div className="col-6">
                                <input type="text" name="" id="" className="form-control" placeholder="Last Name" />
                             </div> 
                        </div>
                        <div className="row">
                             <div className="col-12">
                                <input type="email" className="form-control" name="" id="" placeholder="Email" />
                             </div>
                        </div>
                        <div className="row">
                             <div className="col-12">
                                <input type="password" className="form-control" name="" id="" placeholder="Password" />
                             </div>
                        </div>
                        <div className="row">
                             <div className="col">
                                <input type="password" className="form-control" name="" id="" placeholder="Confirm Password" />
                             </div>
                        </div>
                    </form>
            <div className="d-grid my-3 ">
            <button className="btn btn-primary rounded-5" type="button">Create Account</button>
            </div>
                </div>
                <div className="col col-md-6 text-end">
                   <p className="my-2" style={{fontSize:'13px', fontWeight:'400'}}>Already have an account? <a href="#" type="button" className="link-underline-light" data-bs-target="#exampleModal1" data-bs-toggle='modal'>Sign In</a></p> 
                   
                   <img className="px-5 g-0" style={{height: 'auto',width: '23rem',position: 'absolute',left: '20rem'}} src="../src/assets/image.png" alt="" />
                   
                </div>
               
                    
               
            </div>
        </div>
      </div>
      <div className="modal-footer border-0">
       <div className="container">
       <div className="row row-md-2">
       <div className="row row-cols-2 col-12">
         <div className="d-grid gap-2">
        <button className="btn" style={{position:'relative',left:'7px',border:'solid 0.1px lightgrey'}}  type="button"><img style={{height: 'auto',width: '11%'}} src='../src/assets/facebook.svg'/> <span style={{fontSize:'15px', fontWeight:'600'}}>Sign up with Facebook</span></button>
        <button className="btn" style={{position:'relative',left:'7px',border:'solid 0.1px lightgrey'}} type="button"><img style={{    height: 'auto',width: '7%'}} src='../src/assets/google.svg'/> <span style={{fontSize:'15px', fontWeight:'600'}} >Sign up with Google</span></button>
        </div>
        <div className="col text-end" style={{marginTop:'3.5rem'}}>
        <span style={{fontSize:'10.1px',fontStretch:'semi-expanded',position:'relative',left:'1.2rem',WebkitTextStroke:'0.2px grey', fontWeight:'200'}}>By signing up, you agree to our Terms and conditions, Privacy policy</span> 
        </div>
        
        </div>
           
       </div>
       
        
       </div>
      </div>
    </div>
  </div>
</div>
<Signuppage/>
    </>
  )
}

