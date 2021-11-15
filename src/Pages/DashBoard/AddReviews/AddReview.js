import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import './AddReviews.css'


const AddReview = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);


        axios.post(`http://localhost:5000/Reviews`, data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Added Successfully');
                    reset();
                }
            })

    }
    return (
        <div className="add">
            <form className="container" onSubmit={handleSubmit(onSubmit)}>
                <h1 className="text-success p-4"> Drop Your Reviews </h1>
                <input className="p-2 m-3 w-75"  {...register("name")} placeholder="Name" />
                <textarea className="p-2 m-3 w-75"  {...register("review")} placeholder="Write Your Review" />
                <br />
                <input className="p-2 m-3 w-75"  {...register("rating")} placeholder="rating" /> <br />

                {errors.exampleRequired && <span>This field is required</span>}

                <input className="btn btn-success mb-3" type="submit" />
            </form>
        </div>
    );
};

export default AddReview;