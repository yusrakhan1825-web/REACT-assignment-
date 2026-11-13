import Header from './components/Header';
import Hero from './components/Hero';
import Cards from './components/Cards'
import img1 from './assets/images/img1.jpg'
import img2 from './assets/images/img2.jpg'
import img3 from './assets/images/img2.jpg'
import Footer from './components/Footer';

const plants = [
  {
    image: img1,
    name: 'Monstera',
    description: 'A beautiful tropical plant for your home.'
  },
  {
    image: img2,
    name: 'Snake Plant',
    description: 'A stylish plant that adds greenery to your space.'
  },
  {
    image: img3,
    name: 'Peace Lily',
    description: 'An elegant plant with beautiful green leaves.'
  }
  
];






function App() {
  return(
   <>
   <Header/>
   <Hero/>


    <div className="container my-5">
        <div className="row g-4">
          {plants.map((plant, index) => (
            <div className="col-md-4" key={index}>
              <Cards
                image={plant.image}
                name={plant.name}
                description={plant.description}
              />
            </div>
          ))}
        </div>
      </div>
       
       <Footer/>


   {/* <Cards image={img1}
   name="img1"
   description="bdhcbdisbcjbsd"
   /> */}
   
   
   </>
  );
}

export default App;