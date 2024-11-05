import React from 'react';
import BootstrapLayout from './BootstrapLayout';
import MasulineWash from './MasulineWash';

export default function PageLoader() {
  return (
    <BootstrapLayout>
      <div className="pageLoader">
        <div className="loader d-flex justify-content-center align-items-center container">
          {/* Setting loading to true to show the loader image */}
          <MasulineWash loading={true} />
        </div>
      </div>
    </BootstrapLayout>
  );
}
