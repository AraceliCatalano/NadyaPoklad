import React, {useState} from 'react'

export default function UpcomingEventItems() {
    const [upcomingEventsPosts, setUpcomingEventPosts ] = useState([]);

  return (
    <div>
        {
            upcomingEventsPosts.length === 0 ? (
               
                <p> No Posts Found. Consider upload some one. </p>
            ): (
                <div> upcoming Events Posts </div>
            )
        
        }
    
    
    </div>
  )
}
