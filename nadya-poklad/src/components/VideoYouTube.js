import React from 'react'

export const VideoYouTube = ({url, title}) => {

  const item = [
    {
      id: 1,
      url: 'https://www.youtube.com/embed/t_ZEavuVcZ0',
      title: 'Cambiemos el aspecto visual(UI) de nuestro Sublime Text 3'
    }
  ];


  return (


    <div  className='embed-responsive embed-responsive-4by3'>
        <iframe className='embed-responsive-item' src={ url } title={ title } ></iframe>
    </div>
   
  )
}


