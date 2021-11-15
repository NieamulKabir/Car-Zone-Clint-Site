import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddProduct.css'

const AddProduct = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);


        axios.post(`http://localhost:5000/car`, data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Added Successfully');
                    reset();
                }
            })

    }

    return (
        <div className="add">
            <h1 className="addproduct_title  p-4"> Add Product</h1>

            <form className="container w-100" onSubmit={handleSubmit(onSubmit)}>

                <input className="p-2 m-3"  {...register("title")} placeholder="Title" /> <br />


                <input className="p-2 m-3" type="number"  {...register("ammount", { required: true })} placeholder="Amount" /> <br />

            

                <input className="p-2 m-3" {...register("img", { required: true })} placeholder="img" />
                <br />
                <input className="p-2 m-3" {...register("description", { required: true })} placeholder="description" />
                <br />

                {errors.exampleRequired && <span>This field is required</span>}
                <input className="btn btn-success " type="submit" />

                <br />


            </form>
            <br /><br /><br />

        </div>
    );
};

export default AddProduct;