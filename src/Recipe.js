import "./Recipe.css"

export default function Recipe(props) {
    const cal = (props.calories).toFixed(2)
    return(
        <div className="recipe">
            <h3>{props.title}</h3>
            <div className="image"><img src={props.image} alt=""/></div>
            <div className="ingredient">
            <ol>
                {props.ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            </div>
            <p>Calories: {cal}</p>
        </div>
    );
}