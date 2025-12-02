import { useState } from "react"

export default function Recipe()
{

    const [recipename,setRecipeName]=useState("");
    const [ingredients,setIngredients]=useState("");
    const [instructions,setInstructions]=useState("");
    const [recipes,setRecipes]=useState([]);

    //Save recipes to localstorage
    const saveRecipes=(updatedRecipes)=>{
        localStorage.setItem("recipes",JSON.stringify(updatedRecipes));
        setRecipes(updatedRecipes);
    }

    //Load Recipes

    //Add Recipes
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!recipename || !ingredients || !instructions)
        {
            alert("Please fill all the fields");
        }
        else
        {
            const newRecipe={
                id:Date.now(),
                name:recipename,
                ingredients,
                instructions
            }
            saveRecipes([...recipes,newRecipe]);
        }
        setRecipeName("");
        setIngredients("");
        setInstructions("");
    }

    return(
        <>
        <div style={{maxWidth:"600px",margin:"20px auto"}}>
            <h1 style={{marginBottom:"20px",border:"2px solid #030303ff",padding:"20px", textAlign:"center",color:"black",backgroundColor:"#F54927",}}>Recipe Book</h1>
            
            <form>

            <div style={{marginBottom:"10px"}}>
            <label>Name:</label><br />
            <input type="text" style={{width:"100%",padding:"5px",border:"1.2px solid #030303ff"}} />
            </div>

            <div style={{marginBottom:"10px"}}>
            <label>Ingredients:</label><br />
            <input type="text" style={{width:"100%",padding:"5px",border:"1.2px solid #030303ff"}} />
            </div>

            <div style={{marginBottom:"10px"}}>
            <label>Instructions:</label><br />
            <input type="text" style={{width:"100%",padding:"5px",border:"1.2px solid #030303ff"}} />
            </div>

            <button style={{padding:"5px 10px",border:"1.2px solid #030303ff"}} type="submit">
            Add Recipe
            </button>

            </form>
        </div>
        </>
    )
}