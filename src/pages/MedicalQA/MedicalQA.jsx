import React from 'react';
import Footer from '../../components/common/Footer/Footer';
import Header from '../../components/common/Header/Header';

const MedicalQA = () => {
    return (
        // <div>
        //     <h2>Medical qns</h2>
        // </div>
        <div className="body-container d-flex flex-column">
            <div className="header">
                <Header />
            </div>
            {/* <div className="main">
                <h2>Medical qsn</h2>
            </div> */}


            {/* <div class="row justify-content-evenly">
    <div class="col-4">
      One of two columns
    </div>
    <div class="col-4">
      One of two columns
    </div>
  </div> */}
  
<div class="container ">
  
<div class="row">
    <div class="col-4">
    <div class="card">
  <div class="card-body">
    
    <h5 class="card-title">Catagories</h5>
    
    
    {/* <h6 class="card-subtitle mt-4 mb-2 text-primary">Medicine</h6>
    <h6 class="card-subtitle mb-2 ">Orthopaedic</h6>
    <h6 class="card-subtitle mb-2 text-muted">Skin</h6>
    <h6 class="card-subtitle mb-2 text-muted">Covid-19</h6><h6 class="card-subtitle mb-2 text-muted">Nutritionest</h6><h6 class="card-subtitle mb-2 text-muted">Psychology</h6><h6 class="card-subtitle mb-2 text-muted">Medicine</h6><h6 class="card-subtitle mb-2 text-muted">Skin</h6><h6 class="card-subtitle mb-2 text-muted">Skin</h6><h6 class="card-subtitle mb-2 text-muted">Skin</h6><h6 class="card-subtitle mb-2 text-muted">Skin</h6><h6 class="card-subtitle mb-2 text-muted">Skin</h6> */}
  </div>
</div>
    </div>





    <div class="col-8">col-8</div>
  </div>
  
</div>

            




            <div className="footer mt-auto p-2">
                <Footer />
            </div>
            
        </div>
        
        
    );
};

export default MedicalQA;