import React from 'react';
import AppContainer from './AppContainer';

const Home = () =>{
    return (
            <AppContainer
            title="list of"
            >
                <div class="card-body">
                    <div className="table-responsive">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>ID.</th>
                                    <th>Title</th>
                                    <th>Description</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>title example</td>
                                    <td>A short descritopn</td>
                                    <td>
                                        <a href="#" className="btn btn-danger">Delete</a>
                                        <a href="#" className="btn btn-warning">Edite</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <a href="#" class="btn btn-primary">Add book</a>
                </div>
            </AppContainer>
        );
}
export default Home;