import Link from "daisyui/components/link";
import React from "react";
import { Links, NavLink } from "react-router";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, setCoffes, coffees }) => {
  const { photo, Price, coffeename, quantity, _id } = coffee;

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/coffee/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);

            if (data.deletedCount) {
              Swal.fire({
                position: "top",
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 1500,
              });
              //remove coffee from state
              const remaingCoffee = coffees.filter((cof) => cof._id !== _id);
              setCoffes(remaingCoffee);
            }
          });
      }
    });

    console.log(id);
  };

  return (
    <div className="card card-side bg-base-100 shadow-md border border-base-300 hover:shadow-xl transition-all duration-300">
      <figure className="w-48 p-2">
        <img
          src={photo}
          alt={coffeename}
          className="object-cover rounded-md  h-full w-full"
        />
      </figure>

      <div className="card-body p-4">
        <h2 className="card-title text-xl">{coffeename}</h2>
        <p className="text-sm">
          Price: <span className="font-semibold">${Price}</span>
        </p>
        <p className="text-sm">
          Available Quantity: <span className="font-semibold">{quantity}</span>
        </p>

        <div className="card-actions justify-end mt-auto">
          <div className="join join-vertical md:join-horizontal gap-2">
            <NavLink to={`/coffee/${_id}`}>
              <button className="btn btn-outline btn-primary btn-sm">
                View
              </button>
            </NavLink>
            <NavLink to={`/updateCoffee/${_id}`}>
              <button className="btn btn-outline btn-warning btn-sm">
                Edit
              </button>
            </NavLink>
            <button
              onClick={() => {
                handleDelete(_id);
              }}
              className="btn btn-outline btn-error btn-sm"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
