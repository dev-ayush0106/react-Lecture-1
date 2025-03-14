import Write from "./Write"

const c=function msg(){
    console.log("clicked")
}
export default function Events(){
    return(
        <>
            <button onMouseEnter={c} style={{"width":"150px","height":"70px","border":"2px solid white","borderRadius":"20px"}}>
                Click Here
            </button>
        </>
    )
}