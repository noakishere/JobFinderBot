
![JobFinderBot](https://raw.githubusercontent.com/vyacheslav31/JobFinderBot/main/resources/img/JobFinderBot-02.png)
<p align="center">A discord bot that helps you look for jobs on websites like Indeed and Monster.</p>
<h3 align="center"><i>Work in Progress ...</i></h3>

## Installation
### Requirements
* Adzuna API Credentials [[link]](https://developer.adzuna.com/)
* Discord Bot Token [[link]](https://discordjs.guide/preparations/setting-up-a-bot-application.html#creating-your-bot)
### Dependencies
* <b>node.js v16</b> : Needed for interacting with DiscordJS v13.
* <b>dotenv</b> : Used for loading credentials from the .env file.
* <b>discord.js</b> : A popular NodeJS Discord API wrapper (https://discord.js.org/#/docs/main/stable/general/welcome).
* <b>axios</b> : Axios is used for making requests to various job search APIs.
* <b>better-sqlite3</b> : Used for producing an in-memory database for fast retrieval of JobPostings and user registration.

#### Note
An .env file must be present in the root directory of this project containing your Discord token and API credentials. See the example .env in the root directory.

## Program Control flow
This is the principal flow of the program and the main way that users will be interacting with bot. Each invocation of the post method follows this sequence diagram.

![jobfinderbot_controlflow_sequence_diagram](https://github.com/vyacheslav31/JobFinderBot/blob/f20e7ff426d38a6a4f09c344d7e0e69d5ca7f20e/resources/img/jfb_sequence_diagram.png)

## Support
I maintain this repository for free, if you find it in your ❤️ to support me, 🌟 this repo.

## License
<i>MIT License

Copyright (c) 2021 Vyacheslav Gorbov

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.</i>
