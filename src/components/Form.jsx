import { useState, useEffect } from "react"
import ArticleList from "./ArticleList"

export default function Form() {

    const categoryList = [
        "Business",
        "Entertainment",
        "General",
        "Health",
        "Science",
        "Sports"
    ]

    const tagsList = [
        "apple",
        "google",
        "microsoft",
        "tesla",
        "facebook",
        "amazon"
    ]

    const [post, setPost] = useState([])

    let defaultData = {
        title: '',
        image: '',
        description: '',
        category: '',
        tags: [],
        isOnline: false
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

    const handleTagChange = (tag) => {
        setData(d => {
            if (d.tags.includes(tag)) {
                return { ...d, tags: d.tags.filter(t => t !== tag) };
            } else {
                return { ...d, tags: [...d.tags, tag] };
            }
        });
    };

    useEffect(() => {
        if (data.isOnline) {
            alert('test')
        }
    }, [data.isOnline])

    return (
        <>

            <div className="container">


                <div className="row justify-content-center">
                    <div className="col-8">
                        <form onSubmit={handleSubmit}>


                            <div className="form-input mb-3">
                                <label>Titolo:</label>
                                <input type="text" value={data.title} onChange={(e) => updatePost('title', e.target.value)} />
                            </div>

                            <div className="form-input mb-3">
                                <label>Immagine:</label>
                                <input type="text" value={data.image} onChange={(e) => updatePost('image', e.target.value)} />
                            </div>

                            <div className="form-input mb-3">
                                <label>Descrizione:</label>
                                <textarea name="description" id="description" value={data.description} onChange={(e) => {
                                    updatePost('description', e.target.value)
                                }}></textarea>
                            </div>

                            <div className="form-input mb-3">
                                <label htmlFor="category">Categoria:</label>
                                <select name="category" id="category" onChange={e => updatePost('category', e.target.value)}>
                                    <option value="">Seleziona una categoria</option>
                                    {categoryList.map((c, index) => (
                                        <option key={index} value={c}>{c}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="form-input mb-3">
                                <label htmlFor="tags">Tags:</label>
                                {tagsList.map((tag, index) => (
                                    <div key={tag}>
                                        <input
                                            type="checkbox"
                                            id={tag}
                                            checked={data.tags.includes(tag)}
                                            onChange={() => handleTagChange(tag)}
                                        />
                                        <label htmlFor={tag}>{tag}</label>
                                    </div>
                                ))}
                            </div>

                            <div className="form-input mb-3">
                                <input type="checkbox" name="online" id="online" checked={data.isOnline} onChange={e => updatePost('isOnline', e.target.value)} />
                                <label htmlFor="online">Is Online?</label>
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