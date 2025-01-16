import React from 'react';
import MasulineWash from './MasulineWash';

export default function PageLoader() {
  return (
    <>
      <div className="pageLoader">
        <div className="loader flex justify-center items-center container">
          {/* Setting loading to true to show the loader image */}
          <MasulineWash loading={true} />
        </div>
      </div>
    </>
  );
}
