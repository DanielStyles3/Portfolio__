import React from 'react'
import NavigationDots from "../component/navigationDots"
import SocialMedia from "../component/SocialMedia"

const AppWrap = (Component,idName,className) => function HOC(){
  return (
    <div id={idName} className={`app__container ${className}`}>
      <SocialMedia />

      <div className='app__wrapper app__flex'>
        <Component />

        <div className='copyright'>
        <p className='p-text'>©DanielStyles2023</p>
      </div>

      </div>
      <NavigationDots active={idName}/>
    </div>
  )

}


export default AppWrap
