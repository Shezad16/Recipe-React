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

    //Delete Recipe
    const handleDelete=(id)=>{
        const updatedRecipes=recipes.filter((r)=>r.id!==id)
        saveRecipes(updatedRecipes);
    }

    return(
        <>
        <div style={{maxWidth:"600px",margin:"20px auto"}}>
            <h1 style={{marginBottom:"20px",border:"2px solid #030303ff",padding:"20px", textAlign:"center",color:"black",backgroundColor:"#F54927",}}>Recipe Book</h1>
            
            <form onSubmit={handleSubmit}> 

            <div style={{marginBottom:"10px"}}>
            <label>Name:</label><br />
            <input type="text" style={{width:"100%",padding:"5px",border:"1.2px solid #030303ff"}} value={recipename} onChange={(e)=>setRecipeName(e.target.value)} />
            </div>

            <div style={{marginBottom:"10px"}}>
            <label>Ingredients:</label><br />
            <input type="text" style={{width:"100%",padding:"5px",border:"1.2px solid #030303ff"}} value={ingredients} onChange={(e)=>setIngredients(e.target.value)} />
            </div>

            <div style={{marginBottom:"10px"}}>
            <label>Instructions:</label><br />
            <input type="text" style={{width:"100%",padding:"5px",border:"1.2px solid #030303ff"}} value={instructions} onChange={(e)=>setInstructions(e.target.value)} />
            </div>

            <button style={{padding:"5px 10px",border:"2px solid #030303ff"}} type="submit">
            Add Recipe
            </button>

            </form>
        </div><br />

        <div style={{maxWidth:"600px",margin:"14px auto"}}>
            <h3>All Recipe</h3>
            {recipes.length===0 && <p>No recipes added yet</p>}

            {recipes.map((r)=>(
                <div key={r.id} style={{border:"1.2px solid #030303ff",padding:"7px",marginBottom:"17px"}}>
                    <h4>Recipe Name:&nbsp;{r.name}</h4>
                    <p><strong>Ingredients:</strong></p>
                    <ul>{r.ingredients}</ul>
                    <p><strong>Instructions:&nbsp;{r.instructions}</strong></p>
                    <button style={{padding:"3px 8px",marginRight:"5px",border:"1.8px solid #030303ff"}}>Edit</button>&nbsp;&nbsp;
                    <button onClick={()=>handleDelete(r.id)} style={{padding:"3px 8px",border:"1.8px solid #030303ff"}}>Delete</button>
                </div>
            ))}
        </div>
        </>
    )
}