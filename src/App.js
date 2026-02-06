import Header from './components/Header.js';
import MainSection from './components/MainSection.js';
import Footer from './components/Footer.js';
import FetchOneProduct from './components/FetchOneProduct.js';

var App = async function () {
  return `
${Header()}
${await FetchOneProduct()}
${await MainSection()}
${Footer()}
`;
};

export default App;
