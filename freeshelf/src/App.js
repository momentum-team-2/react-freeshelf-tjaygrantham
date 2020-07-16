import React from 'react'
import Book from './components/Book'
import books from './books.json'
import './App.css'

class App extends React.Component {
  constructor () {
    super()
    this.state = { books: books }
  }

  render () {
    return (
      <div className='App'>
        {books.map((book, idx) => {
          return <Book key={idx} book={book} id={idx} />
        })}
      </div>
    )
  }
}

export default App
