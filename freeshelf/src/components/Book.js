import React from 'react'

class Book extends React.Component {
  constructor () {
    super()
    this.state = { showingMore: false }
  }

  render () {
    const book = this.props.book
    return (
      <div className='book'>
        <div className='container'>
          <div className='flex flex-row'>
            <div className='flex flex-column'>
              <h1>{book.title}</h1>
              <h4>{book.author}</h4>
              <p>{book.shortDescription}</p>
              <a
                className='clickable'
                onClick={() => {
                  this.setState({
                    showingMore: !this.state.showingMore
                  })
                }}
              >
                {!this.state.showingMore ? '► More Information' : '▼ Less Information'}
              </a>
              <div class={!this.state.showingMore && 'hidden'}>
                <p><span class='bold'>URL:</span> <a href={book.url}>{book.url}</a></p>
                {book.publisher && <p><span class='bold'>Publisher:</span> {book.publisher}</p>}
                {book.publicationDate && <p><span class='bold'>Publication Date:</span> {book.publicationDate}</p>}
                <p><span class='bold'>Full Description:</span><br />{book.detailedDescription}</p>
              </div>
            </div>
            <img src={book.coverImageUrl} />
          </div>
        </div>
      </div>
    )
  }
}

export default Book
