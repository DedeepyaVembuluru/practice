import React from 'react'

const WomaenCollections = (props) => {
    const { title, image1, image2, image3, image4 } = props.ladiesFashion
    return (
        <div className='collectionSection'>
            <h2>{title}</h2>
            <img src='assets/ladiesBanner.jpg' />
            <div className="menSection">
                <img src={image1} />
                <img src={image2} />
                <img src={image3} />
                <img src={image4} />

            </div>
        </div>
    )
}

export default WomaenCollections
