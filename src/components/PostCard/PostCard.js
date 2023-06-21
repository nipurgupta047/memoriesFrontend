import React from 'react'

export default function PostCard({imageUrl, place, desc, date, user, uploadDate} ) {
    
  return (
    <div>
        <div className="col">
            <div className="card h-100 " id='memory_card_body'>
                <img src={imageUrl} className="card-img-top" id="memory_card_image" alt="..." />
                    <div>
                        <small style={{'marginLeft':'5px'}}>@ {user} </small> 
                        <small style={{'float':'right', 'marginRight':'8px', 'marginTop':'1px'}}> {uploadDate}</small>
                    </div>
                    <div className="card-body">
                        <h6 className="card-title"><b> {place}</b> </h6>
                        <p className="card-text" > {desc} </p>
                    </div>
                    <div className="card-footer" id='memory_card_date'>
                            <small className="text-body-secondary">{date}</small>
                        </div>
            </div>
        </div>
    </div>
  )
}
