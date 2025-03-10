export default function Card({detail}){

    return (
        <>
            <hr />
            <h1>Name:{detail.name}</h1>
            <h1>Course:{detail.course}</h1>
            <h1>Ducat Id:{detail.id}</h1>
        </>
    )
}