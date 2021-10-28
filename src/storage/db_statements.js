module.exports = {
        dbCreation : [
                createUsersTable = "CREATE TABLE IF NOT EXISTS users ( user_id integer PRIMARY KEY, country text );",
                createSearchesTable = "CREATE TABLE IF NOT EXISTS searches ( search_id integer PRIMARY KEY AUTOINCREMENT, keywords text );",
                createJobPostingsTable = "CREATE TABLE IF NOT EXISTS job_postings ( id integer PRIMARY KEY, parent_search_id integer NOT NULL, title text, company text, description text, location text, post_date text, latitude text, longitude text, url text, category text, FOREIGN KEY(parent_search_id) REFERENCES searches(search_id) );",
                createPostViewsTable = "CREATE TABLE IF NOT EXISTS user_post_views ( user_id integer NOT NULL, job_post_id integer NOT NULL, FOREIGN KEY(user_id) REFERENCES users(user_id), FOREIGN KEY(job_post_id) REFERENCES job_postings(id) );",
        ],
        transactions : {
                insertNewUser : (userId, country) => { return `INSERT INTO users VALUES (${userId}, '${country}');`},
                insertJobPost : (postId, searchId, title, company, description, location, postDate, latitude, longitude, url, category) => {
                        return `INSERT INTO job_postings VALUES (${postId}, ${searchId}, '${title}', '${company}', '${description}', '${location}', '${postDate}', '${latitude}', '${longitude}', '${url}', '${category}');`
                },
                getUserRegion : (userId) => { return `SELECT country FROM users WHERE user_id = ${userId};`},
                userExists : (userId) => { return `SELECT EXISTS(SELECT 1 FROM users WHERE WHERE user_id=${userId} LIMIT 1);`},
        }
}