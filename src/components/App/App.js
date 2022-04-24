import '../../App.css';
import React, {Component} from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import LibraryService from "../../repository/libraryRepository";
import Header from "../Header/header";
import Categories from "../Categories/categories"
import Authors from "../Authors/authors";
import Books from "../Books/BookList/bookList"
import BookAdd from "../Books/BookAdd/bookAdd";
import BookEdit from "../Books/BookEdit/bookEdit";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            categories: [],
            authors: [],
            books: [],
            selectedBook: {}
        }
    }

    render() {
        return (
            <Router>
                <Header/>
                <main>
                    <div className={"container"}>
                        <Routes>
                            <Route path={"/categories"}
                                   element={<Categories categories={this.state.categories}/>}/>
                            <Route path={"/authors"}
                                   element={<Authors authors={this.state.authors}/>}/>
                            <Route path={"/books/add"}
                                   element={<BookAdd categories={this.state.categories}
                                                     authors={this.state.authors}
                                                     onAddBook={this.addBook}/>}/>
                            <Route path={"/books/edit/:id"}
                                   element={<BookEdit categories={this.state.categories}
                                                      authors={this.state.authors}
                                                      onBookEdit={this.editBook}
                                                      book={this.state.selectedBook}/>}/>
                            <Route path={"/books"}
                                   element={<Books books={this.state.books}
                                                   onDelete={this.deleteBook}
                                                   onEdit={this.getBook}
                                                   onMarkTaken={this.markTakenBook}/>}/>
                            <Route path={"/"}
                                   element={<Books books={this.state.books}
                                                   onDelete={this.deleteBook}
                                                   onEdit={this.getBook}
                                                   onMarkTaken={this.markTakenBook}/>}/>
                        </Routes>
                    </div>
                </main>
            </Router>
        );
    }

    loadCategories = () => {
        LibraryService.fetchCategories()
            .then((response) => {
                this.setState({
                    categories: response.data
                })
            });
    }

    loadAuthors = () => {
        LibraryService.fetchAuthors()
            .then((response) => {
                this.setState({
                    authors: response.data
                })
            });
    }

    loadBooks = () => {
        LibraryService.fetchBooks()
            .then((response) => {
                this.setState({
                    books: response.data
                })
            });
    }

    addBook = (name, category, authorId, availableCopies) => {
        LibraryService.addBook(name, category, authorId, availableCopies)
            .then(() => {
                this.loadBooks();
            });
    }

    deleteBook = (id) => {
        LibraryService.deleteBook(id)
            .then(() => {
                this.loadBooks();
            });
    }

    getBook = (id) => {
        LibraryService.getBook(id)
            .then((response) => {
                this.setState({
                    selectedBook: response.data
                })
            });
    }
    editBook = (id, name, category, authorId, availableCopies) => {
        LibraryService.editBook(id, name, category, authorId, availableCopies)
            .then(() => {
                this.loadBooks();
            });
    }

    markTakenBook = (id) => {
        LibraryService.markTakenBook(id)
            .then(() => {
                this.loadBooks();
            });
    }

    componentDidMount() {
        this.loadCategories();
        this.loadAuthors();
        this.loadBooks();
    }

}

export default App;