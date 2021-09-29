import {useState} from 'react'
import './App.css';
import BlogAppFull from './components/BlogAppFull/BlogAppFull';
import BlogPostForm from './components/BlogPostForm/BlogPostForm';
import BlogReadingApp from './components/BlogReadingApp/BlogReadingApp';
import BookMarkingApp from './components/BookMarkingApp/BookMarkingApp';
import ContactForm from './components/ContactForm/ContactForm';


function App() {
  const [selection, setSelection] = useState('blogForm');
  // const [selection, setSelection] = useState('contactForm');


  let html

  if (selection === 'blogForm') {
    html = <BlogPostForm />
  } else if (selection === 'contactForm') {
    html = <ContactForm />
  } else if (selection === 'blogReadingApp') {
    html = <BlogReadingApp />
  } else if (selection === 'bookMarkingApp') {
    html = <BookMarkingApp />
  } else if (selection === 'blogFullApp') {
    html = <BlogAppFull />
  };

  
  return (
    <div className="App">
    
    <header>
      <h1>Land of Buttons</h1>
      <button type="button" onClick={() => setSelection('blogForm')}>Blog Form</button>
      <button type="button" onClick={() => setSelection('contactForm')}>Contact Form</button>
      <button type="button" onClick={() => setSelection('blogReadingApp')}>Blog Reading App</button>
      <button type="button" onClick={() => setSelection('bookMarkingApp')}>Book Marking App</button>
      <button type="button" onClick={() => setSelection('blogFullApp')}>Blog Full App</button>
    </header>
    {html}

    </div>
  );
};

export default App;
