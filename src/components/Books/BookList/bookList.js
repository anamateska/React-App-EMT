import React, {Component} from "react";
import ReactPaginate from "react-paginate";
import BookTerm from "../BookTerm/bookTerm";
import {Link} from "react-router-dom";


class Books extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 0,
            size: 5
        }
    }

    render() {
        const offset = this.state.size * this.state.page;
        const nextPageOffset = offset + this.state.size;
        const pageCount = Math.ceil(this.props.books.length / this.state.size);
        const books = this.getBooksPage(offset, nextPageOffset);
        console.log(books, pageCount)


        return (
            <div className={"container mt-4"}>
                <div className={"row mb-4 text-center"}>
                    <div className={"col-12"}>
                        <h3>List of all books in the library</h3>
                    </div>
                </div>
                <div className={"row"}>
                    <div className={"d-flex justify-content-center"}>
                    <div className={"col-10"}>
                        <table className={"table table-hover"}>
                            <thead>
                            <tr>
                                <th scope={"col"}>Name</th>
                                <th scope={"col"}>Category</th>
                                <th scope={"col"}>Author</th>
                                <th scope={"col"}>Available copies</th>
                                <th scope={"col"}>Book Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            {books}
                            </tbody>
                        </table>
                    </div>
                    </div>
                </div>
                <div className={"d-flex justify-content-center"}>
                        <Link className={"col-10 btn btn-block btn-success"} to={"/books/add"}>
                            Add book
                        </Link>
                </div>
                <ReactPaginate
                    pageCount={pageCount}
                    onPageChange={this.handlePageClick}
                    previousLabel={"Previous"}
                    nextLabel={"Next"}
                    breakLabel={<a href="/#">...</a>}
                    breakClassName={"break-me"}
                    pageClassName={"ml-1"}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    containerClassName={"pagination m-4 justify-content-center"}
                    activeClassName={"active"}
                    pageLinkClassName={"page-link"}
                    previousLinkClassName={"page-link"}
                    nextLinkClassName={"page-link"}
                    disabledClassName={"page-item disabled"}/>
            </div>
        );
    }

    handlePageClick = (data) => {
        let selected = data.selected;
        console.log(selected)
        this.setState({
            page: selected
        })
    }

    getBooksPage = (offset, nextPageOffset) => {
        console.log(offset, nextPageOffset)
        return this.props.books.sort((a, b) => a.id - b.id).map((term) => {
            return (
                <BookTerm term={term}
                          onDelete={this.props.onDelete}
                          onEdit={this.props.onEdit}
                          onMarkTaken={this.props.onMarkTaken}/>
            );
        }).filter((product, index) => {
            return index >= offset && index < nextPageOffset;
        })
    }
}

export default Books;