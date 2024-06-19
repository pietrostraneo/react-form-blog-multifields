import { useState } from "react"
import ArticleList from "./ArticleList"

export default function Form() {

    const [post, setPost] = useState([])

    let defaultData = {
        title: '',
        image: '',
        description: '',
        category: '',
        tags: []
    }

    const [data, setData] = useState(defaultData)

    const handleSubmit = (e) => {
        e.preventDefault();
        if (data.title.trim() !== '') {
            setPost(array => ([...array, data]));
            setData(defaultData);
        }
    };

    // Rimuove un articolo dalla lista in base all'indice
    const removePost = (indexToDelete) => {
        setPost(array => array.filter((_, i) => i !== indexToDelete));
    };

    // Aggiorna i dati del nuovo articolo
    const updatePost = (key, newValue) => {
        setData(d => ({ ...d, [key]: newValue }));
    };

    return (
        <>

            <div className="container">


                <div className="row justify-content-center">
                    <div className="col-8">
                        <form onSubmit={handleSubmit}>


                            <div className="form-input">
                                <label>Titolo:</label>
                                <input type="text" value={data.title} onChange={(e) => updatePost('title', e.target.value)} />
                            </div>
                            <div className="form-input">
                                <label>Descrizione:</label>
                                <textarea name="description" id="description" value={data.description} onChange={(e) => {
                                    updatePost('description', e.target.value)
                                }}></textarea>
                            </div>

                            <button type="submit" className="btn btn-success">Publish</button>
                        </form>
                    </div>
                </div>

                <ArticleList data={post} removePost={removePost} />
            </div>


        </>
    )
}