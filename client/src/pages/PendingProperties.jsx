import { useGetPropertiesQuery } from '../state/api';

// Import all images
import image1 from '../assets/Properties/image1.jpg';
import image2 from '../assets/Properties/image2.jpg';
import image3 from '../assets/Properties/image3.jpg';
import image4 from '../assets/Properties/image4.jpg';
import image5 from '../assets/Properties/image5.jpg';
import image6 from '../assets/Properties/image6.jpg';
import { useEffect, useState } from 'react';

// Create an image map
const imageMap = {
  'image1.jpg': image1,
  'image2.jpg': image2,
  'image3.jpg': image3,
  'image4.jpg': image4,
  'image5.jpg': image5,
  'image6.jpg': image6,
};

const PendingProperties = () => {
  const { data, isLoading } = useGetPropertiesQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="px-4 py-10">
      <div className="grid grid-cols-2 gap-6">
        {data.map((property) => (
          <div key={property.property_id} className="card flex items-start bg-white rounded-lg p-4 space-x-4 max-w-lg">
            <div className="w-[200px] h-[200px]">
              <img 
                className="object-cover h-full w-full rounded-lg" 
                src={property.image_urls && property.image_urls.length > 0 
                  ? imageMap[property.image_urls[0]]
                  : image1}
                alt={property.title}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = image1;
                }}
              />
            </div>

            <div className="flex-1 bg-white">
              <h2 className="text-lg font-semibold bg-white">{property.title}</h2>
              <p className="text-sm text-gray-600 bg-white">{property.property_type} located at a beautiful destination.</p>
              <p className="text-sm mt-3 text-primary bg-white">Hosted By: {property.hosted_by}</p>

              <div className="mt-3">
                <p className="text-lg font-bold bg-white">NRP {property.price}/night</p>
              </div>

              <div className="mt-2 flex gap-2 bg-white">
                <button className="bg-green-500 text-white py-1 px-4 rounded-lg hover:bg-green-600">
                  Accept
                </button>
                <button className="bg-red-500 text-white py-1 px-4 rounded-lg hover:bg-red-600">
                  Decline
                </button>
              </div>
            </div>
          </div>
        ))}
        
      </div>
    </div>
  );
};

export default PendingProperties;
