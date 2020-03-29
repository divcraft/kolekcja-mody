import React from 'react';
import { Link } from 'react-router-dom';
import HeaderTitle1 from './HeaderTitle1'
import HeaderTitle2 from './HeaderTitle2'
import MediaIcons from './MediaIcons'
import BannerImage from './BannerImage'

const Banner = () => {
   return (
      <div className="banner wrapper">
         <HeaderTitle1 />
         <HeaderTitle2 />
         <Link className='banner-btn' to='/news'>Zacznij zakupy</Link>
         <MediaIcons />
         <BannerImage />
      </div>
   );
}

export default Banner;