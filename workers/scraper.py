import json
import os

import requests
from bs4 import BeautifulSoup as bsoup
from dotenv import load_dotenv


class JobScraper:
    """
    The purpose of this class is to make various API requests to obtain job postings.
    """

    _base_url = "http://api.adzuna.com/v1/api/jobs/{country}/search/1?" \
                "app_id={app_id}" \
                "&app_key={app_key}" \
                "&results_per_page={results_qty}" \
                "&what={query}" \
                "&content-type=application/json"

    def __init__(self):
        load_dotenv()
        self.app_id = os.getenv('ADZUNA_APP_ID')
        self.app_key = os.getenv('ADZUNA_APP_KEY')
        self.html_parser = "html.parser"

    def get_jobs(self, country, results_qty, query):
        """
        User-initiated API search which will return the results based on a query.
        """
        response = requests.get(self._base_url.format(
            country=country,
            app_id=self.app_id,
            app_key=self.app_key,
            results_qty=results_qty,
            query=query.replace(" ", "%20")
        ))

        results = json.loads(response.text)["results"]
        job_posts = []

        # Convert data from JSON to <list>
        for result in results:
            job_post = {
                "ID": result["id"],
                "Title": bsoup(result["title"], self.html_parser).text,
                "Company": bsoup(result["company"]["display_name"], self.html_parser).text,
                "Description": bsoup(result["description"], self.html_parser).text,
                "Location": result["location"]["display_name"],
                "Post Date": result["created"],
                "Latitude": result["latitude"],
                "Longitude": result["longitude"],
                "URL": result["redirect_url"],
                "Category": result["category"]["label"]
            }
            job_posts.append(job_post)

        return job_posts[0]
