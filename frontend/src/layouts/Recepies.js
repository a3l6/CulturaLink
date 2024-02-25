import React from 'react';
import './Recipes.css';
import Navbar from './Navbar';

const Recipes = () => {

    const recipes =[
        {
            name: 'Jollof Rice',
            image: 'https://www.chefspencil.com/wp-content/uploads/Jollof-Rice-1-1.jpg.webp',
            definition: 'Jollof, or jollof rice, is a rice dish from West Africa. The dish is typically made with long-grain rice, tomatoes, chilies, onions, spices, although its ingredients and preparation methods vary',
            writer: 'Ifeoma Adekunle'
        },
        {
            name: 'Garri',
            image: 'https://www.chefspencil.com/wp-content/uploads/Garri-3.jpg.webp',
            definition: 'In West Africa, garri is the flour of the fresh starchy cassava root. In the Hausa language, garri can also refer to the flour of guinea corn, maize, rice, yam, plantain and millet',
            writer: 'Chinedu Okafor'
        },
        {
            name: 'Pounded Yam',
            image: 'https://www.chefspencil.com/wp-content/uploads/Pounded-Yam-4-1.jpg.webp',
            definition: 'Pounded yam or Iyán or Ruam-Yo is a Nigerian swallow food native to the Yoruba, Igbo Edo, Tiv and Ebira ethnic groups. It is a traditional food.',
            writer: 'Olamide Adebayo' 
        },
        {
            name: 'Egusi Soup',
            image: 'https://www.chefspencil.com/wp-content/uploads/Egusi-Soup-1-1.jpg.webp',
            definition: 'Egusi is the name for the protein-rich seeds of certain cucurbitaceous plants, which, after being dried and ground, are used as a major ingredient in West African cuisine. ',        
            writer: 'Adaeze Nwankwo'
        },
        {
            name: 'Suya',
            image: 'https://www.chefspencil.com/wp-content/uploads/Suya.jpg',
            definition: 'Suya or tsire or chinchinga is traditional smoked spiced meat skewer which originates in Hausaland, and is a popular food item across West Africa',
            writer: 'Obinna Eze',
        },
        {
            name: 'Akara',
            image: 'https://www.chefspencil.com/wp-content/uploads/Akara-Beans-Cake.jpg.webp',
            definition: 'Àkàrà in Nigeria, Togo and Benin. It is found throughout West African, Caribbean, and Brazilian cuisines. The dish is traditionally encountered in Brazil\'s northeastern state of Bahia',
            writer: 'Chinwe Okonkwo',
        },
        {
            name: 'Moi Moi',
            image: 'https://www.chefspencil.com/wp-content/uploads/Nigerian-Moi-Moi.jpg.webp',
            definition: 'Moin-moin or moi-moi is a steamed or boiled bean pudding made from a mixture of washed and peeled beans and onions, fresh red peppers, spices, and often fish, eggs, and/or crayfish',
            writer: 'Ngozi Nwachukwu',
        },
        {
            name: 'Nkwobi',
            image: 'https://www.chefspencil.com/wp-content/uploads/Nkwobi.jpg.webp',
            definition: 'Nkwobi (which means spicy cow foot) is an Igbo meat delicacy made of palm oil, ugba, pepper, fresh utazi leaves or bitter leaf, ehuru seeds, edible potash and cow foot.',
            writer: 'Oluwafemi Adeleke',
        },
        {
            name: 'Ewa Agoyin',
            image: 'https://www.chefspencil.com/wp-content/uploads/Ewa-Agoyin.jpg.webp',
            definition: 'Ewa aganyin is a Yoruba dish commonly eaten in Nigeria. It is also popular as street food. The dish consists of beans cooked until extremely soft and then mashed. ',
            writer: 'Temitope Oladipo',
        },
    ];

    return (
        <>
            <Navbar/>
            <div>
                <h1>Discover traditional recipes!</h1>
                <div className="recipe-container">
                    {recipes.map((recipe, index) => (
                        <div className="recipe-card" key={index}>
                            <div className="recipe-details">
                                <h3>{recipe.name}</h3>
                            </div>
                            <img src={recipe.image} alt={recipe.name} />
                            <div className="recipe-details">
                                <p>{recipe.definition}</p>
                                <p style={{fontSize:'20px', marginTop:'5px'}}><b>Uploaded By:</b> {recipe.writer}</p>
                            </div>
                        </div>
                    ))}
                </div>
         </div>

        </>
    );
}

export default Recipes;