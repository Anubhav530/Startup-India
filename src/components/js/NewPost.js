import "./../css/NewPost.css"

const NewPost = () => {
  return (
    <div className="newPostContainer">
        <h2> Add a Post </h2>
        <form>
            <label>postTitle : </label>
            <input type="text"/>
            <label>Upload an image </label>
            <input type="image"/>
        </form>
    </div>
  )
}

export default NewPost