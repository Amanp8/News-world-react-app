import React from 'react'
const Newsitem =(props)=> {
 

    let {title , description, imgurl , newsUrl , author , date , source} = props
    return (
      <div className='my-3'>
        <div className="card">
          <div style={{display:'flex', justifyContent:'flex-end', position:'absolute', right:'0'}}>

        <span className=" badge rounded-pill bg-danger">  {source} </span>
         </div>
        <img src={!imgurl?"https://images.moneycontrol.com/static-mcnews/2022/01/Stock-market-data-770x433.jpg":imgurl} className="card-img-top" alt="..."/>
        <div className="card-body">
        <h5 className="card-title">{title} 
       </h5>
        <p className="card-text">{description}...</p>
        <p className="card-text "><small className="" style={{color:"#7a3e0b"}}>By {!author? "Unknown":author} on {new Date(date).toGMTString()}</small></p>
        <a rel='noreferrer' href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Raed more</a>
  </div>
</div>
      </div>
    )
  }


export default Newsitem