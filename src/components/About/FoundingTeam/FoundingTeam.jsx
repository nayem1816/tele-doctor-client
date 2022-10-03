import React from 'react';
import './FoundingTeam.css';
import doctor2 from '../../../images/img/foundTeamDe2.jpg';
import { FaFacebookF } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';

const FoundingTeam = () => {
    return (
        <div className='container bottom-height'>
            <h2 class="card-title fw-bold text-center m-3">Founding Team</h2>
            <div class="row row-cols-1 row-cols-md-3 g-4 ">

          <div class="col p-5">
          <div class="card border-0"> 
          <img src={doctor2} class="card-img-top" alt="..."/>
          <div class="card-footer bg-color">
            <h4 className='text-center fw-bold'>Dr. Subah</h4>
            <div className='d-flex justify-content-evenly p-2'>
            <FaFacebookF size="1.5em"/>
            <FaLinkedinIn size="1.5em"/>
            <AiOutlineTwitter size="1.5em" weight="49px"/>
            </div>
          </div>
          </div>
          </div>
          <div class="col p-5">
          <div class="card border-0">
          <img src={doctor2} class="card-img-top" alt="..."/>
          <div class="card-footer bg-color">
            <h4 className='text-center fw-bold'>Dr. Subah</h4>
            <div className='d-flex justify-content-evenly p-2'>
            <FaFacebookF size="1.5em"/>
            <FaLinkedinIn size="1.5em"/>
            <AiOutlineTwitter size="1.5em" weight="49px"/>
            </div>
          </div>
          </div>
          </div>
          <div class="col p-5">
          <div class="card border-0">
          <img src={doctor2} class="card-img-top" alt="..."/>
          <div class="card-footer bg-color">
            <h4 className='text-center fw-bold'>Dr. Subah</h4>
            <div className='d-flex justify-content-evenly p-2'>
            <FaFacebookF size="1.5em"/>
            <FaLinkedinIn size="1.5em"/>
            <AiOutlineTwitter size="1.5em" weight="49px"/>
            </div>
          </div>
          </div>
          </div>
          <div class="col p-5">
          <div class="card border-0">
          <img src={doctor2} class="card-img-top" alt="..."/>
          <div class="card-footer bg-color">
            <h4 className='text-center fw-bold'>Dr. Subah</h4>
            <div className='d-flex justify-content-evenly p-2'>
            <FaFacebookF size="1.5em"/>
            <FaLinkedinIn size="1.5em"/>
            <AiOutlineTwitter size="1.5em" weight="49px"/>
            </div>
          </div>
          </div>
          </div>
          <div class="col p-5">
          <div class="card border-0">
          <img src={doctor2} class="card-img-top" alt="..."/>
          <div class="card-footer bg-color">
            <h4 className='text-center fw-bold'>Dr. Subah</h4>
            <div className='d-flex justify-content-evenly p-2'>
            <FaFacebookF size="1.5em"/>
            <FaLinkedinIn size="1.5em"/>
            <AiOutlineTwitter size="1.5em" weight="49px"/>
            </div>
          </div>
          </div>
          </div>
          <div class="col p-5">
          <div class="card border-0">
          <img src={doctor2} class="card-img-top" alt="..."/>
          <div class="card-footer bg-color">
            <h4 className='text-center fw-bold'>Dr. Subah</h4>
            <div className='d-flex justify-content-evenly p-2'>
            <FaFacebookF size="1.5em"/>
            <FaLinkedinIn size="1.5em"/>
            <AiOutlineTwitter size="1.5em" weight="49px"/>
            </div>
          </div>
          </div>
          </div>

           </div>
        </div>
    );
};

export default FoundingTeam;