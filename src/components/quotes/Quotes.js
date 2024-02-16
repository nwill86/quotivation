import React from "react";
import QuoteCard from "./QuoteCard";
import CategoryFrom from "./CategoryForm";

function Quotes({ addToFavorites, filteredQuotes, category, categories, handleCategoryChange, favoriteQuotes }) {

    return (
        <section className='all-quotes'>
            <div className='quotes wrapper'>
               <div className="category-header">
                <h2>Pick your Favorite Quotes Below</h2>
                <p>You have {filteredQuotes.length} {category !== "All" && category} {filteredQuotes.length === 1 ? "quote" : "quotes"}!</p>
                <CategoryFrom category={category} categories={categories} handleCategoryChange={handleCategoryChange} />
               </div> 

                {filteredQuotes.map((quote) => ( 
                <QuoteCard key={quote.id} quote={quote} addToFavorites={addToFavorites} favoriteQuotes={favoriteQuotes} />
                ))}
            </div>
            
        </section>
    );
};

export default Quotes;
