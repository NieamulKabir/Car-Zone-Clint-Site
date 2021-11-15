import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { Link } from 'react-router-dom';



const Purchase = ({ service }) => {



    const { user } = useAuth();
    const { purchaseId } = useParams();
    const [placeCarOrder, setPlaceCarOrder] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/car/${purchaseId}`)
            .then(res => res.json())
            .then(data => setPlaceCarOrder(data));
    }, [purchaseId])

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);


        axios.post(`http://localhost:5000/Order`, data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Added Successfully');
                    reset();
                }
            })

    }




    return (
        <div>

            <div className="mt-4 container">
                <h2 className="text-primary">Place Order</h2>



                <div>
                    <div className="row">


                        <div className="col-md-6">
                            <div className="mt-4 pb-4">
                                <img className="w-50" src={placeCarOrder?.img} alt="" />
                            </div>
                            <h2>{placeCarOrder?.title}</h2>
                            <p> {placeCarOrder?.description} </p>

                            <p>
                                <strong> Amount :  {placeCarOrder?.ammount} </strong>
                            </p>

                            <Link to="/home">
                                <button className="btn btn-primary"> Go Back</button>
                            </Link>
                        </div>


                        <div className="col-md-6"><br />
                            <form onSubmit={handleSubmit(onSubmit)}>

                                {errors.exampleRequired && <span>This field is required</span>}
                                <input defaultValue={user.email} {...register("email", { required: true })} /> <br /><br />
                                <input defaultValue={placeCarOrder?.img} {...register("img", { required: true })} /> <br /><br />
                                <input defaultValue={placeCarOrder?.title} {...register("title", { required: true })} /> <br /><br />
                                <input defaultValue={placeCarOrder?.description} {...register("description", { required: true })} /> <br /><br />

                                <input defaultValue={placeCarOrder?.ammount} {...register("ammount", { required: true })} /> <br /><br />

                                <input className="btn btn-success" type="submit" />
                            </form>
                        </div>




                    </div>



                    <br />
                </div>



            </div>
        </div>
    );
};

export default Purchase;