const React = require('react')
const Def = require('../default')

function show (data) {
  let comments = (
    <h3 className="inactive">
      No comments yet!
    </h3>
  )
  if (data.place.comments.length) {
    comments = data.place.comments.map(c => {
      return (
        <div className="border">
          <h2 className="rant">{c.rant ? 'Rant! ðŸ˜¡' : 'Rave! ðŸ˜»'}</h2>
          <h4>{c.content}</h4>
          <h3>
            <stong>- {c.author}</stong>
          </h3>
          <h4>Rating: {c.stars}</h4>
        </div>
      )
    })
  }
    return (
      <Def>
      <main>
        <div className="row">
          <div className="col-sm-6">
            <img src={data.place.pic} alt={data.place.name} />
            <h3>
              Located in {data.place.city}, {data.place.state}
            </h3>
          </div>
          </div>
          <div className="col-sm-6">
            <h2>
              Description
            </h2>
            <h3>
              {data.place.showEstablished()}
            </h3>
            <h4>
              Serving {data.place.cuisines}
            </h4>

            <a href={`/places/${data.id}/edit`} className="btn btn-warning">
                Edit
            </a> 

            <form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
                <button type="submit" className="btn btn-danger">Delete</button>
            </form>                 
        </div>
        <h2>Comments</h2>    
            {comments}
            <form method="POST" action={`${data.place.id}/comment`}>
                <div className="form-group">
                    <label htmlFor="content">Content</label>
                    <input className="form-control" id="content" name="content" />
                </div>
                <div className="form-group">
                    <label htmlFor="author">Author</label>
                    <input className="form-control" id="author" name="author" />
                </div>
                <div className="form-group">
                    <label htmlFor="stars">Star Rating</label>
                    <input type="number" className="form-control" id="stars" name="stars" min={0.5} max={5} step={0.5} value={5} />
                 </div>
                 <div className="form-group">
                    <label htmlFor="rant">Rant?</label>
                    <input id="rant" name="rant" type="checkbox" value={true}/>
                </div>
                    <input className="btn btn-primary" type="submit" value="Add Comment" />
            </form>
      </main>
    </Def>
    )
}
module.exports = show
