import React from "react";
import {useNavigate} from "react-router-dom";

const BookAdd = (props) => {

    const history = useNavigate();

    const [useFormData, updateUseFormData] = React.useState({
        name: "",
        category: 1,
        authorId: 1,
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

        const name = useFormData.name;
        const category = useFormData.category;
        const authorId = useFormData.authorId;
        const availableCopies = useFormData.availableCopies;

        props.onAddBook(name, category, authorId, availableCopies);
        history('/books');
    }

    return (
        <div className="container">
            <div className={"row mt-5"}>
                <div className={"col-12"}>
                    <h3>Add new book</h3>
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
                                   placeholder="Book name"
                                   required
                                   onChange={handleChange}/>
                            <label htmlFor="category">Category</label>
                            <select className="form-control mb-2" id="category" name="category" onChange={handleChange}>
                                {props.categories.map((term) =>
                                    <option value={term}>{term}</option>
                                )}
                            </select>
                            <label htmlFor="authorId">Author</label>
                            <select className="form-control mb-2" id="authorId" name="authorId" onChange={handleChange}>
                                {props.authors.map((term) =>
                                    <option value={term.id}>{term.name} {term.surname}</option>
                                )}
                            </select>
                            <label htmlFor="availableCopies">Available copies</label>
                            <input type="number"
                                   id="availableCopies"
                                   name="availableCopies"
                                   className="form-control mb-2"
                                   placeholder={0}
                                   required
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

export default BookAdd;