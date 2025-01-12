import React from 'react';
import { useGetPropertiesQuery } from '../state/api';
import image1 from '../assets/Properties/image1.jpg'; 

const Properties = () => {
  const { data, isLoading } = useGetPropertiesQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="px-4 py-10">
      <h2 className="text-[30px] font-bold mb-4">Properties</h2>
      <div className='flex gap-4 mb-4'>
        <button className='bg-orange-400 px-4 py-2 rounded-xl text-sm'>Pending Properties</button>
        <button className='bg-green-400 px-4 py-2 rounded-xl text-sm'>All Properties</button>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {data.map((property, index) => (
          <div key={index} className="card flex items-start bg-white rounded-lg p-4 space-x-4 max-w-lg">
            <div className="w-[200px] h-[200px]">
              <img className="object-cover h-full w-full" src={image1} alt="property" />
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

export default Properties;
