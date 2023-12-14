import React from 'react'

const navigationDots = ({active}) => {
  return (
    <div className='app__navigation'>
                                {["home", 'work', "skills", "contact", "about"].map((item) => (
                <a 
                href={`#${item}`} 
                key={item }
                className='app__navigation-dot'
                style={active === item ? {background:'#313BAC'} : {}}
                    />
              
                              ))}

    </div>
  )
}

export default navigationDots
