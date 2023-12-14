import React from 'react'
import {BsTwitter,BsInstagram} from "react-icons/bs"
import { CiFacebook } from "react-icons/ci";


const SocialMedia = () => {
  return (
    <div className="app__social">
        <div>
            <BsInstagram/>
        </div>
        <div>
            <BsTwitter/>
        </div>
        <div>
            <CiFacebook/>
        </div>
      
    </div>
  )
}

export default SocialMedia
