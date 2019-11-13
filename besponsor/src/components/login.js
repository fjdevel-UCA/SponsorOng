import React, { Component } from 'react';


export default class login extends React.Component {

    constructor(props) {

        super(props);

    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <h3>LOGIN</h3>
                    <hr />
                    <form action="" method="post">
                        <div>
                            <label for="name">User:</label>
                            <input type="text" id="name" name="nombre_donante" />
                        </div>
                        <div>
                            <label for="org">Password:</label>
                            <input type="text" id="org" name="org_financiar" />
                        </div>

                        <div class="button">
                            <button type="submit">login </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }

}