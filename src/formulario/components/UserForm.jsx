// import { useEffect, useState } from "react"
// import { useForm } from 'react-hook-form';
// import { formUserHelper, fromOptions } from "../helpers/formUserHelper";
// import { Link } from "react-router-dom";


export const UserForm = () => {

    // const [user, setUser] = useState(userProp)
    // // console.log(user)
    // const {
    //     register,
    //     handleSubmit,
    //     formState: { errors },
    // } = useForm(fromOptions);

    // useEffect(() => {

    //     setUser({ ...user });

    // }, [])

    // const crud = async () => {
    //     await formUserHelper(user, option);
    // };

    return (

        <>
            <div className="contenedor">
                <div className="mb-3">
                    <label for="formGroupExampleInput" className="form-label titulo">Carnet:</label>
                    <input type="text" className="form-control texto" id="formGroupExampleInput" placeholder="Example input placeholder" />
                </div>
                <div className="mb-3">
                    <label for="formGroupExampleInput2" className="form-label titulo">Nombre completo:</label>
                    <input type="text" className="form-control texto" id="formGroupExampleInput2" placeholder="Another input placeholder" />
                </div>
            </div>

        </>
    )
}
