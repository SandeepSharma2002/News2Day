# Project Name - News2Day

The News Dashboard project is an admin panel designed to provide quick access to key metrics and functionalities related to managing news feeds. It includes several pages:

#### Dashboard:
This page offers an overview of key metrics and functionalities of the admin panel, such as user activity, content statistics, and quick links to manage news feeds or view performance reports.

#### Create News Feed Page: 
Administrators can easily create and publish new news feeds using this page. It features form fields for title, content, and category, along with the ability to upload images or videos. Additionally, it includes a unique mobile preview screen, enabling users to visualize how the news feed will appear on mobile devices before publishing.

#### Manage News Feeds Page: 
This page displays a list of all news feeds in a table format, with options to edit, delete, or view each feed in detail. The table includes columns for the news feed title, category, creation date, and status (published or draft).

#### Performance Reports Page: 
Dedicated to showing performance metrics of the news feeds, such as views, likes, and engagement rates. It utilizes graphs and charts to visually represent the data, facilitating easy understanding and analysis.

The project also includes functionality to fetch fake data from an API, the link to which are provided below.

## API Documentation
https://github.com/SauravKanchan/NewsAPI

BASE_URL = "https://saurav.tech/NewsAPI/" 
top_headlines_api = "<BASE_URL>/top-headlines/category/<category>/<country_code>.json"  
everything_api = "<BASE_URL>/everything/<source_id>.json"

## Dependencies

- "chart.js": "^4.4.2"
- "react": "^18.2.0"
- "react-chartjs-2": "^5.2.0"
- "react-dom": "^18.2.0"
- "react-icons": "^5.0.1"
- "react-router-dom": "^6.22.3"
- "react-toastify": "^10.0.5"

## Installation

1. Clone the repository.
2. Install dependencies using `npm install`.

## Usage

Run the application using npm start.
Access the admin panel through the provided URLs.
Explore the different pages and functionalities to manage news feeds effectively.

