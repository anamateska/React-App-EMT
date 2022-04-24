import React from "react";
import {Link} from "react-router-dom";

const BookTerm = (props) => {
    return (
        <tr>
            <td>{props.term.name}</td>
            <td>{props.term.category}</td>
            <td>{props.term.author.name} {props.term.author.surname}</td>
            <td>{props.term.availableCopies}</td>
            <td>
                <div>
                    <Link title={"edit"}
                          className={"btn btn-sm btn-primary m-1"}
                          onClick={() => props.onEdit(props.term.id)}
                          to={`/books/edit/${props.term.id}`}>
                        Edit book
                    </Link>
                    <a title={"delete"}
                       className={"btn btn-sm btn-danger m-1"}
                       onClick={() => props.onDelete(props.term.id)}>
                        Delete book
                    </a>
                    <a
                        className={`btn btn-sm btn-secondary m-1 ${props.term.availableCopies > 0 ? "" : "disabled"}`}
                        onClick={() => props.onMarkTaken(props.term.id)}>
                        Mark as taken
                    </a>
                </div>
            </td>
        </tr>
    );
}

export default BookTerm;