
export function VideoYouTube({ url, title, id }) {

  return (

    <div >
      
      <a href={url} target={"_blank"}  >
        <iframe   src={url} title={title } width="300" height="255" ></iframe>     
        
      </a>
     
      
    </div>

  );
}


