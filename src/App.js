import { Routes, Route } from 'react-router-dom';
import HomePage from "./components/pages/HomePage/HomePage";
import SinglePost from "./components/pages/SInglePost/SinglePost";
import AddPost from "./components/pages/AddPost/AddPost";
import EditPost from "./components/pages/EditPost/EditPost";
import NotFound from "./components/pages/NotFound/NotFound";
import About from "./components/pages/About/About";
import Header from "./components/views/Header/Header";
import Footer from "./components/views/Footer/Footer";
import { Container } from 'react-bootstrap'


function App() {
  return (
      <Container>
          <Header />
          <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/post/:id" element={<SinglePost />} />
              <Route path="/post/add" element={<AddPost />} />
              <Route path="/post/edit/:id" element={<EditPost />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
      </Container>
  );
}

export default App;
