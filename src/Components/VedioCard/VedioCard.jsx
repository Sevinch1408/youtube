import React from 'react';
import "./VedioCard.scss"
const VedioCard = () => {
    return (
        <div className='vedios'>
           
             <div class="video">
            <div class="video__thumbnail">
              <img src="https://img.youtube.com/vi/PpXUTUXU7Qc/maxresdefault.jpg" alt="" />
            </div>
            <div class="video__details">
              <div class="author">
                <img src="http://aninex.com/images/srvc/web_de_icon.png" alt="" />
              </div>
              <div class="title">
                <h3>
                  Top 5 Programming Languages to Learn in 2021 | Best Programming Languages to Learn
                </h3>
                <a href="">FutureCoders</a>
                <span>10M Views • 3 Months Ago</span>
              </div>
            </div>
          
             </div>
        </div>
    );
}

export default VedioCard;
