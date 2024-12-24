

export default function Signuppage () {
    
  return (

    <div className="modal fade modal-xl g-0 mx-auto modal-centered" id="exampleModal1" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                    <p className="mx-1" style={{fontSize:'22.5px', fontWeight:'650'}}>Sign In</p>
                    <form action="" className="my-3" method="post">
                       
                        <div className="row">
                             <div className="col-12">
                                <input type="Email" className="form-control" name="" id="" placeholder="Email" />
                             </div>
                        </div>
                        <div className="row">
                             <div className="col">
                                <input type="password" className="form-control" name="" id="" placeholder="Password" />
                             </div>
                        </div>
                    </form>
            <div className="d-grid my-3 ">
            <button className="btn btn-primary rounded-5" type="button">Sign In</button>
            </div>
                </div>
                <div className="col col-md-6 text-end">
                   <p className="my-2" style={{fontSize:'13px', fontWeight:'400'}}>Don&apos;t have an account yet? <a href="#" type="button" className="link-underline-light" data-bs-target="#exampleModal1" style={{fontSize:'12px', fontWeight:'600'}} data-bs-toggle='modal'>Create new for free!</a></p> 
                   
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
        <button className="btn" style={{position:'relative',left:'7px',border:'solid 0.1px lightgrey'}}  type="button"><img style={{height: 'auto',width: '11%'}} src='../src/assets/facebook.svg'/> <span style={{fontSize:'15px', fontWeight:'600'}}>Sign in with Facebook</span></button>
        <button className="btn" style={{position:'relative',left:'7px',border:'solid 0.1px lightgrey'}} type="button"><img style={{    height: 'auto',width: '7%'}} src='../src/assets/google.svg'/> <span style={{fontSize:'15px', fontWeight:'600'}} >Sign in with Google</span></button>
        <button className="btn" style={{position:'relative',left:'7px'}} type="button"><span style={{fontSize:'11px', fontWeight:'650'}} >Forgot Password?</span></button>
        </div>
       
        
        </div>
           
       </div>
       
        
       </div>
      </div>
    </div>
  </div>
</div>

  )
}
