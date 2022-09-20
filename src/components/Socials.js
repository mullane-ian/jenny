import React from 'react';
import { SocialIcons } from 'react-social-icons';



export default function Socials() {
    let urls = [
        'http://twitter.com/',
        'http://www.facebook.com',
        'http://www.instagram.com'
      ];
    return(
        <SocialIcons urls={urls} color="white" />
    )

}