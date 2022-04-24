import React from "react";

const categories = (props) => {
    return (
        <div className={"container mt-4"}>
            <div className={"row mb-4 text-center"}>
                <div className={"col-12"}>
                    <h3>Book Categories</h3>
                </div>
            </div>
            <div className={"d-flex justify-content-center"}>
                <div className={"col-10"}>
                    <table className={"table table-hover"}>
                        <thead>
                        <tr>
                            <th className={"text-center"} scope={"col"}>Book category</th>
                        </tr>
                        </thead>
                        <tbody>
                        {props.categories.map((term) => {
                            return (
                                <tr>
                                    <td className={"text-center"}>{term}</td>
                                </tr>
                            );
                        })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default categories;