import React from 'react';
import Tile from './Tile';

const Tiles = ({ tiles, images }) => {
   const tile = tiles.map(tile => {
      const img = images.filter(img => images.indexOf(img) + 1 === tile.id)
      return <Tile key={tile.id} title={tile.title} imgSrc={img} text={tile.text} />
   })
   return (
      <div className="tiles">
         {tile}
      </div>
   );
}

export default Tiles;