import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';

import CarouselPart from './CarouselPart';
import DescriptionCard from './DescriptionCard';

export default function HomeBody() {
    return (
        <div className="d-flex flex-column justify-content-center">
            <div>
                <CarouselPart />
            </div>
            <div className="m-3">
                <DescriptionCard />
            </div>
        </div>
    )
}
