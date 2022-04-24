import React from "react";

const authors = (props) => {
    return (
        <div className={"container mt-4"}>
            <div className={"row mb-4 text-center"}>
                <div className={"col-12"}>
                    <h3>Book Authors</h3>
                </div>
            </div>
            <div className={"row"}>
                <div className={"d-flex justify-content-center"}>
                <div className={"col-10"}>
                    <table className={"table table-hover"}>
                        <thead>
                        <tr>
                            <th scope={"col"}>Name</th>
                            <th scope={"col"}>Surname</th>
                            <th scope={"col"}>Country</th>
                        </tr>
                        </thead>
                        <tbody>
                        {props.authors.map((term) => {
                            return (
                                <tr>
                                    <td>{term.name}</td>
                                    <td>{term.surname}</td>
                                    <td>{term.country.name}</td>
                                </tr>
                            );
                        })}
                        </tbody>
                    </table>
                </div>
                </div>
            </div>
        </div>
    );
}

export default authors;