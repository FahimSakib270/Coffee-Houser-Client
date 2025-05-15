import React from "react";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const {
    coffeename,
    _id,
    Price,
    quantity,
    supplier,
    Category,
    details,
    photo,
  } = useLoaderData();
  const handleUpdateCOffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updatedCoffee = Object.fromEntries(formData.entries());
    console.log(updatedCoffee);

    //send updated coffee to the fdb

    fetch(`http://localhost:3000/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            title: "Update successful!",
            icon: "success",
            draggable: true,
          });
          console.log(data);
        }
      });
  };
  return (
    <div className="p-14">
      <div className="p-12 text-center space-y-4">
        <h1 className="text-6xl">Update coffee</h1>
      </div>
      <form onSubmit={handleUpdateCOffee}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <label className="label">Name</label>
            <input
              defaultValue={coffeename}
              type="text"
              className="input w-full"
              placeholder="Coffee Name"
              name="coffeename"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <label className="label">Quantity</label>
            <input
              defaultValue={quantity}
              type="text"
              className="input w-full"
              placeholder="Quantity"
              name="quantity"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <label className="label">Supplier</label>
            <input
              defaultValue={supplier}
              type="text"
              className="input w-full"
              placeholder="Supplier"
              name="supplier"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <label className="label">Price</label>
            <input
              defaultValue={Price}
              type="text"
              className="input w-full"
              placeholder="price"
              name="Price"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <label className="label">Category</label>
            <input
              defaultValue={Category}
              type="text"
              className="input w-full"
              placeholder="Category"
              name="Category"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <label className="label">Details</label>
            <input
              defaultValue={details}
              type="text"
              className="input w-full"
              placeholder="Details"
              name="details"
            />
          </fieldset>
        </div>

        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box my-6  border p-4">
          <label className="label">Photo</label>
          <input
            defaultValue={photo}
            type="text"
            className="input w-full"
            placeholder="PHOTO Url"
            name="photo"
          />
        </fieldset>

        <input type="submit" value="UpdateCoffee" className="btn w-full" />
      </form>
    </div>
  );
};

export default UpdateCoffee;
