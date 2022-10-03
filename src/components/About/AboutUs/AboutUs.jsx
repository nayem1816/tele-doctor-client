import React from 'react';
import './AboutUs.css';
import aboutDcotor from '../../../images/img/homeDoctor.jpg';

const AboutUs = () => {
    return (
        <div class="card mb-3 border-0" >
           <div class="row g-0 space">
                    <div class="col-md-6">
                    <div class="card-body m-5">
                    <h5 class="card-title fw-bold fs-4">Who we are?</h5>
                    <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit praesentium eum officiis. Ullam quo, delectus nisi magnam sed nobis impedit eaque minus quas nesciunt eos magni pariatur atque reiciendis voluptatem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit praesentium eum officiis. Ullam quo, delectus nisi magnam sed nobis impedit eaque minus quas nesciunt eos magni pariatur atque reiciendis voluptatem. Ullam quo, delectus nisi magnam sed nobis impedit eaque minus quas nesciunt eos magni pariatur atque reiciendis voluptatem.</p>
                    </div>
                    </div>
 
                    <div class="col-md-6">
                    <img src={aboutDcotor} class="img-fluid w-100" alt="..."/>
                    </div>
            </div>
        </div>
    ); 
};

export default AboutUs;