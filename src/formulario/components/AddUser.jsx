import '../../styles/Styles.css';

export const AddUser = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div>
                        <br />
                        <button className="btn btn-secondary botones-cuenta">
                            <img src="https://cdn-icons-png.flaticon.com/512/150/150519.png" alt="" width={25} /> Regresar
                        </button>
                    </div>
                    <br />
                    <br />
                    <div class="container px-4 text-center" >
                        <div class="row gx-5">
                            <div class="col">
                                <strong className="titulo-addUser"><img src='https://cdn-icons-png.flaticon.com/512/2891/2891642.png' width={70} alt="..." /> Agregar Usuario</strong>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
