import {useState} from 'react'
import './App.css';
import BlogAppFull from './components/BlogAppFull/BlogAppFull';
import BlogPostForm from './components/BlogPostFrom/BlogPostForm';
import BlogReadingApp from './components/BlogReadingApp/BlogReadingApp';
import BookMarkingApp from './components/BookMarkingApp/BookMarkingApp';
import ContactForm from './components/ContactForm/ContactForm';


function App() {
  const [selection, setSelection] = useState('blogForm');

  let html;

  if (selection === 'blogForm') {
    html = <BlogPostForm />
  } else {
    html = <ContactForm />
  } else 
  }


  return (
    <div className="App">
    
    <header>
      <button type="button" onClick={() => setSelection('blogForm')}>Blog Form</button>
      <button type="button" onClick={() => setSelection('contactForm')}>Contact Form</button>
    </header>

    </div>
  );
};

export default App;
