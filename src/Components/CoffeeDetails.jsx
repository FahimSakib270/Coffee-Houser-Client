import React from "react";
import { useLoaderData } from "react-router";

const CoffeeDetails = () => {
  const coffee = useLoaderData();
  console.log(coffee);
  const { photo, Price, coffeename, quantity, _id } = coffee;

  return (
    <div className="min-h-screen bg-base-200 py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="card lg:card-side bg-base-100 shadow-xl rounded-lg overflow-hidden">
          <figure className="lg:w-1/2 w-full">
            <img
              src={photo}
              alt={coffeename}
              className="h-full w-full object-cover"
            />
          </figure>
          <div className="card-body p-6 md:p-10">
            <h2 className="card-title text-3xl mb-4">{coffeename}</h2>

            <div className="space-y-3 text-base-content opacity-80">
              <p>
                <span className="font-semibold">Price:</span> ${Price}
              </p>
              <p>
                <span className="font-semibold">Available Quantity:</span>{" "}
                {quantity}
              </p>
              <p>
                <span className="font-semibold">Coffee ID:</span>{" "}
                <code className="bg-base-300 px-2 py-1 rounded">{_id}</code>
              </p>
            </div>

            <div className="divider my-6"></div>

            <div className="card-actions justify-start mt-auto">
              <button className="btn btn-primary">Buy Now</button>
              <button className="btn btn-outline btn-secondary">
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        {/* Optional Description or Extra Info */}
        <div className="mt-6 text-center text-sm text-base-content opacity-70">
          <p>Brewed with love and roasted to perfection. ☕</p>
        </div>
      </div>
    </div>
  );
};

export default CoffeeDetails;
