import { connect } from "react-redux"


const Likes = ({ 
    id,
    likesCount,   
    isLiked,
    addLike,
    removeLike,
}) => {    
    return (
        
        <div onClick={() => isLiked ? removeLike(id) : addLike(id)}>           
            <span>{
                isLiked ? <i className="fas fa-heart"></i> : <i className="far fa-heart"></i>
            }</span>                            
            <span> {
                isLiked ? likesCount + 1 : likesCount
            }</span>                             
        </div>
    )
}

const mapStateToProps = (state, {id}) => ({
    isLiked: state[id]
})

const mapDispatchToProps = (dispatch, {id}) => ({
    addLike:() => dispatch({
        type:"LIKE",
        id,
    }),
    removeLike:() => dispatch({
        type:"DISLIKE",
        id,
    })
})

export default connect (
mapStateToProps,
mapDispatchToProps
) (Likes)