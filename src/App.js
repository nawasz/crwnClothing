import logo from './logo.svg';
import './App.css';

function App() {
  const categories = [
    {
      id:1,
      title:'Hats'
    },
    {
      id:2,
      title:'Jackets'
    },
    {
      id:3,
      title:'SNEAKERS'
    },
    {
      id:4,
      title:'WOMENS'
    },
    {
      id:5,
      title:'MENS'
    }

  ]
  return (
   <div className="categories-container">

{categories.map(({title}) => (<div className="category-container">
              <div className="background-image"></div>
                <div className ="category-body-container">
                  <h2>{title}</h2>
                  <p>Shop Now</p>
                </div>
          </div>))}
          
    
          
         
          

   </div>
  );
}

export default App;
