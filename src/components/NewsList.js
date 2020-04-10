import React from 'react';
import NewsListItem from './NewsListItem';

const NewsList = ({ newsList }) => {
   const listItems = newsList.map((news) => {
      return (
         <NewsListItem
            key={news.id}
            title={news.title}
            subtitle={news.subtitle}
            text={news.text}
            image={news.image}
         />
      )
   })
   return (
      <section className="news-list">
         <ul>
            {listItems}
         </ul>
      </section>
   );
}

export default NewsList;

