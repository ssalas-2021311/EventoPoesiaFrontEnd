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
            <div className="container col-xxl-4 col-sm-12 formulario">
                <div className="mb-3">
                    <label className="form-label titulo">Carnet:</label>
                    <input type="text" className="form-control texto" id="formGroupExampleInput" required />
                </div>
                <div className="mb-3">
                    <label className="form-label titulo">Nombre completo:</label>
                    <input type="text" className="form-control texto" id="formGroupExampleInput2" required />
                </div>
                <div className="mb-3">
                    <label className="form-label titulo">Dirección:</label>
                    <input type="text" className="form-control texto" id="formGroupExampleInput2" required />
                </div>
                <div className="mb-3">
                    <label className="form-label titulo">Género:</label>
                    <select className="form-select" aria-label="Default select example" required>
                        <option selected>Selecciona una opcion</option>
                        <option value="1">Masculino</option>
                        <option value="2">Femenino</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label className="form-label titulo">Teléfono:</label>
                    <input type="number" className="form-control texto" id="formGroupExampleInput2" required />
                </div>
                <div className="mb-3">
                    <label className="form-label titulo">Fecha de nacimiento:</label>
                    <input type="date" className="form-control texto" id="formGroupExampleInput2" required />
                </div>
                <div className="mb-3">
                    <label className="form-label titulo">Carrera:</label>
                    <input type="text" className="form-control texto" id="formGroupExampleInput2" required />
                </div>
                <div className="mb-3">
                    <label className="form-label titulo">Género de poesía:</label>
                    <select className="form-select" aria-label="Default select example" required>
                        <option selected>Selecciona una opcion</option>
                        <option value="1">Dramático</option>
                        <option value="2">Épico</option>
                        <option value="3">Lírica</option>
                    </select>
                </div>
                <button class="btn btn-primary" type="submit">Registrarse</button>
            </div>

        </>
    )
}
