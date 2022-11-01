import React from 'react';
import "./MedicalQA.css"
import QansPageCard from"../../components/MedicalQA/QansPageCard/QansPageCard";
import DiseasesCategory from '../../components/MedicalQA/DiseasesCategory/DiseasesCategory';
const MedicalQA = () => {
    return (
      <div className="container py-5">
      <div className="row">
          <div className="col-lg-3 col-md-12  pt-5">
              <DiseasesCategory />
          </div>
          <div className="col-lg-9 col-md-12 mt-lg-0 mt-md-4 mt-4">
             <QansPageCard/>
             <div class="d-grid gap-2 d-md-flex justify-content-md-between">
  <button class="btn btn-clr  me-md-2" type="button">Previous</button>
  <button class="btn btn-clr" type="button">Next Page</button>
</div>
          </div>
          
      </div>
  </div>
    );
};

export default MedicalQA;