import React from "react";
import {useNavigate} from "react-router-dom";

const BookEdit = (props) => {

    const history = useNavigate();

    const [useFormData, updateUseFormData] = React.useState({
        name: "",
        category: 0,
        authorId: 0,
        availableCopies: 0
    });

    const handleChange = (event) => {
        updateUseFormData({
            ...useFormData,
            [event.target.name]: event.target.value.trim()
        });
    }

    const onFormSubmit = (event) => {

        event.preventDefault();

        const name = useFormData.name !== "" ? useFormData.name : props.book.name;
        const category = useFormData.category !== 0 ? useFormData.category : props.book.category;
        const authorId = useFormData.authorId !== 0 ? useFormData.authorId : props.book.author.id;
        const availableCopies = useFormData.availableCopies !== 0 ? useFormData.availableCopies : props.book.availableCopies;

        props.onBookEdit(props.book.id, name, category, authorId, availableCopies);
        history('/books');
    }

    return (
        <div className="container">
            <div className={"row mt-5"}>
                <div className={"col-12"}>
                    <h3>Edit book</h3>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col md-5">
                    <form onSubmit={onFormSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Book name</label>
                            <input type="text"
                                   id="name"
                                   name="name"
                                   className="form-control mb-2"
                                   placeholder={props.book.name}
                                   onChange={handleChange}/>
                            <label>Category</label>
                            <select className="form-control mb-2" id="category"
                                    name="category" onChange={handleChange}>
                                {props.categories.map((term) => {
                                        if (props.book.category !== undefined && term === props.book.category)
                                            return <option value={term}
                                                           selected={props.book.category}>{term}</option>
                                        else
                                            return <option value={term}>{term}</option>
                                    }
                                )}
                            </select>
                            <label htmlFor="authorId">Author</label>
                            <select className="form-control mb-2" id="authorId" name="authorId" onChange={handleChange}>
                                {props.authors.map((author) => {
                                        if (props.book.author !== undefined && author.id === props.book.author.id)
                                            return <option value={author.id}
                                                           selected={props.book.author.id}>{author.name} {author.surname}</option>
                                        else
                                            return <option value={author.id}>{author.name} {author.surname}</option>
                                    }
                                )}
                            </select>
                            <label htmlFor="availableCopies">Available copies</label>
                            <input type="number"
                                   id="availableCopies"
                                   name="availableCopies"
                                   className="form-control mb-2"
                                   placeholder={props.book.availableCopies}
                                   onChange={handleChange}/>
                        </div>
                        <div className="mb-2">
                            <button type="submit" id="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default BookEdit;