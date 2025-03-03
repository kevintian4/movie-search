import { useState } from 'react';
import { TVCard } from "./TVCard";

function TVList({ items }) {
  const [displayedItems, setDisplayedItems] = useState(items.slice(0, 12));
  const [nextIndex, setNextIndex] = useState(12);

  const loadMoreItems = () => {
    const newNextIndex = nextIndex + 12;
    setDisplayedItems(items.slice(0, newNextIndex));
    setNextIndex(newNextIndex);
  };

  const loadAllItems = () => {
    setDisplayedItems(items);
    setNextIndex(items.length)
  }

  return (
    <div className="search-results-list-container">
      {items.length > 0 && 
        <>  
          <h2 className="search-results-list-header" id="search-results-tv-list-header">TV</h2> 
          <hr />
        </>
      }
      <div className="search-results-item-list" id="search-results-tv-list">
        {displayedItems.length === 0 ? (
          <></>
        ) : (
          displayedItems.map((tv) => (
            <TVCard key={tv.id} tv={tv} />
          ))
        )}
      </div>
      {nextIndex < items.length && (
        <>
          <div className="load-results-button-container">
            <button onClick={loadMoreItems} className="load-results-button button" id="load-more-button">
              Show More...
            </button>
            <button onClick={loadAllItems} className="load-results-button button" id="load-all-button">
              Show All ({items.length} results)
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default TVList;
