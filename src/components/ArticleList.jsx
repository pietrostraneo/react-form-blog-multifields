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
                                    <p>{d.description}</p>
                                </div>
                            </>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}