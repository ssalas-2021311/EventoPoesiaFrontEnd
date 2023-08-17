// import { Link, useNavigate } from "react-router-dom";
// import '../../styles/Styles.css';
// import { useEffect, useState } from "react";
// import { apiUser, apiUserDelete } from "../api/apiUser";
// import { User } from "../models/user.model";
// import { EditUser } from "./EditUser";
// import Swal from "sweetalert2";

export const ListUsers = () => {

    // //Estado de usuarios en la lista y de forma independiente
    // const [listUsers, setListUsers] = useState([]);
    // const [user, setUser] = useState(User)            
    // const [showModal, setShowModal] = useState(false);
    // const navigate = useNavigate();

    // const viewUserList = async () => {
    //     const a = await apiUser();
    //     setListUsers(a);
    // }

    // const handleOpenModal = (u) => {
    //     setShowModal(true)
    //     setUser(u);
    // }

    // const handleCloseModal = () => {
    //     setShowModal(false)
    // }

    // //useEffect crea efectos secundarios, en este caso al momento de renderizar 
    // //ListUser.jsx manda a llamar la funcion viewUserList();
    // useEffect(() => {
    //     viewUserList();
    // }, [ showModal ])

    // const userCreate = (user) =>{
    //     navigate("/crear", { state: { user } } )
    // }

    // const profile = (user) => {
    //     navigate("/perfil", { state: { user } } );
    // }

    // const deleteUser = async(id) => {

    //     let result = await apiUserDelete(id);

    //     if (result) {
    //                         //filter sirve para retornar los elementos de un array por medio de un callback
    //         setListUsers(listUsers.filter( (u) => u._id !== id ))
    //         Swal.fire({
    //             icon: "success", 
    //             title: "Usuario eliminado",
    //             text: "se elimino correctamente"
    //         });
    //     }else{
    //         Swal.fire({
    //             icon: "error",
    //             title: "Ocurrio un error...",
    //             text: "No se pudo eliminar el usuario"
    //         });
    //     }
    // }

    return (
        <>

            <div className="container ">
                <div class="container px-4 text-center">
                    <div class="row gx-5">
                        <div class="col">
                        <strong className="titulo-lista"><img src='https://cdn-icons-png.flaticon.com/512/6345/6345211.png' width={100} alt="..." />Lista de usuarios</strong>
                        </div>
                    </div>
                </div>
                <div className="alinear-botones">
                    <button type="button"
                        className="btn btn-success"
                    // onClick={ () => userCreate()}
                    >
                        <img src="https://cdn-icons-png.flaticon.com/512/3631/3631626.png" width={25} alt="" /> Agregar
                    </button>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="table-responsive">
                        <table className="table table-bordered border-dark">
                            <thead>
                                <tr>
                                    <th scope="col">Usuario</th>
                                    <th scope="col">Nombre</th>
                                    <th scope="col">Contraseña</th>
                                    <th scope="col">Rol</th>
                                    <th scope="col">....</th>
                                </tr>
                            </thead>
                            <tbody className="table-group-divider datos-user">

                                {/* {listUsers.map((u) => {

                                    return ( */}
                                <tr>
                                    <td>a</td>
                                    <td>a </td>
                                    <td>a </td>
                                    <td>a </td>
                                    <td>
                                        <button
                                            type="button"
                                            className="botones btn btn-info"
                                        // onClick={ () => profile(u)}
                                        >
                                            <img src="https://cdn-icons-png.flaticon.com/512/3248/3248125.png" alt="" width={20} />
                                        </button>
                                        <button
                                            type="button"
                                            className="botones btn btn-warning"
                                        // onClick={ () => handleOpenModal(u)}
                                        >
                                            <img src="https://cdn.icon-icons.com/icons2/2621/PNG/512/gui_edit_icon_157165.png" alt="" width={20} />
                                        </button>
                                        <button
                                            type="button"
                                            className="botones btn btn-danger"
                                        // onClick={ () => deleteUser(u._id)}
                                        >
                                            <img src="https://cdn-icons-png.flaticon.com/512/3405/3405244.png" alt="" width={20} />
                                        </button>
                                    </td>
                                </tr>

                                {/* })} */}

                            </tbody>
                        </table>
                    </div>
                </div>
                {/* <EditUser
                    isOpenModal={ showModal}
                    isCloseModal={ handleCloseModal}
                    userEdit={user}
                >

                </EditUser> */}
            </div>
        </>
    )
}