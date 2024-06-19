export default function ArticleList({ data, removePost }) {
    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-8">
                        {data.map((d, index) => (
                            <>
                                <div key={index}>
                                    <h2>{d.title}</h2>
                                    <img src={d.image} alt={d.title} />
                                    <p>{d.description}</p>
                                    <p><b>Categoria:</b> {d.category}</p>
                                    <p>Tags:</p>
                                    <ul>
                                        {d.tags.map((t, index) => (
                                            <li key={index}>{t}</li>
                                        ))}
                                    </ul>
                                    <button onClick={() => removePost(index)}>Remove</button>
                                </div>
                            </>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}