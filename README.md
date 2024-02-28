# Game Catalog

This web application allows users to search and get catalog of all Games and News. It utilizes the Rawg API for Games and their details. The NewsAPI for Game News in Industry. Deploy link: https://lonely-long-johns-toad.cyclic.app/ or https://game-catalog-final.onrender.com/
to have access to admin panel:
username: meyrambek
password:meyrambek

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/illus1um/game-catalog-final.git
   
2. Install dependencies:

   ```bash
    npm install

3. Start the server:

    ```bash
    npm start

4. Open your browser and visit
    ```bash
    http://localhost:3000.

  ## Usage
On Games page users can input name game.

Submit the form to view Games list.

You can check additional Game information by pressing details button.

The Game information includes Release Date, Rating, Genres, Platforms, Developers, Publishers and Description.

On News page users can check the latest Game Industry News. If you want more info press the button 'Read More' and redirect to the source of this News

  ## Detailed information about used API's
1. Rawg API

Description: RawgAPI is a video game database API that provides access to a vast amount of data related to video games, including information about games, platforms, developers, genres, and more.
Features:
Access to a comprehensive database of video game information.
Search functionality to find games based on various criteria such as title, platform, genre, etc.
Detailed information about each game, including descriptions, ratings, release dates, screenshots, trailers, and more.
Data about game platforms, developers, genres, and tags.
Ability to retrieve lists of popular, upcoming, and recently released games.
Integration with various platforms and services.

Usage: Developers can utilize RawgAPI to enhance their gaming-related applications, websites, or services by incorporating rich video game data, providing users with features like game discovery, recommendations, reviews, and more.

Documentation: [Rawg Api Documentation](https://rawg.io/apidocs)

2. News API
Description: NewsAPI is a JSON-based API that aggregates news articles from various sources and publishers worldwide. It allows developers to fetch news headlines, articles, and related metadata programmatically.

Features:
Access to a wide range of news articles from different sources and categories.
Search functionality to retrieve news articles based on keywords, phrases, domains, dates, and more.
Ability to filter news by language, country, or news source.
Detailed metadata for each article, including title, author, publication date, URL, thumbnail images, and more.
Support for pagination and sorting to efficiently navigate through large sets of news articles.
Integration with popular news publishers and sources.

Usage: NewsAPI is commonly used by developers to integrate news content into their applications, websites, or services. It enables features such as real-time news updates, personalized news feeds, topic-specific news aggregation, and more.

Documentation: [NewsAPI Documentation](https://newsapi.org/docs)
