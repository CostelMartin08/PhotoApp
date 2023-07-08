import React from "react";



const Manage = () => {




    return (
        <section>
            <div className="modal modal-sheet position-static d-block p-4 py-md-5" tabIndex="-1" role="dialog" id="modalSheet">
                <div className="modal-dialog" role="document">
                    <div className="modal-content rounded-4 shadow text-center">
                        <div className="modal-header border-bottom-0 mt-3">
                            <h1 className="fs-5">Conținutul a fost încărcat cu succes!</h1>
                        </div>
                        <div className="modal-footer flex-column align-items-stretch w-100 gap-2 pb-3 border-top-0">
                            <a href="/controlPanel" type="button" className="btn btn-md btn-primary">Încarcă conținut</a>
                            <a href="/" type="button" className="btn btn-md btn-secondary" data-bs-dismiss="modal">Acasă</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}


export default Manage;