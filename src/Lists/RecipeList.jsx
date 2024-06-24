import './RecipeList.css';
import { Link } from 'react-router-dom';

function RecipeList({ recipes }) {

  if (!recipes || recipes.length === 0) {
    return <p>No articles available.</p>;
  }

  const handleImageError = (e) => {
    console.error(`Failed to load image: ${e.target.src}`);
    e.target.src = 'path/to/placeholder-image.jpg'; // Replace with the path to your placeholder image
  };

  return (
    <div className='recipe-list'>
      {recipes.map(recipe => (
              console.log(recipe),

        <div key={recipe.videoId} className='card'>
          <img 
            src={recipe.thumbnail} 
            alt={recipe.title} 
            className="card-img" 
            onError={handleImageError} // Handle image load errors
          />
          <h3 className='recipelist-title'>{recipe.thumbnail}</h3>
          {recipe.tags && <h4 className='recipelist-subtitle'>{recipe.tags.join(', ')}</h4>}
          <p className='recipe-description'>{recipe.description}</p>
          <Link className='link' to={`/videos/${recipe.videoId}`}>
            <button className='btn btn-secondary read-more-btn'>Read more</button>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default RecipeList;
