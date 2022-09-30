import React from 'react'
import Skeleton from 'react-loading-skeleton';


const SkeletonGame = ({id}) => {
  return (
    <div className="games__item" key={id}>
    <Skeleton height={170}/> 
    <div className="games__item-row">
        <h3 className="games__item-title"><Skeleton/></h3>
        <div className="games__item-genres">
            <Skeleton width={40} height={15}  />
            <Skeleton width={40} height={15}  />
            <Skeleton width={40} height={15}  />
        </div>
        <div className="games__item-info">
            <div className="games__item-price"><Skeleton width={30} height={15 } /> </div>
            <Skeleton width={80} height={25} />
        </div>
    </div>
</div>
  )
}

export default SkeletonGame;