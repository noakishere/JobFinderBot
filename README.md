### <i>Work in Progress</i>
# JobFinderBot
JobFinderBot is a discord bot that helps you look for job on websites like Indeed and Monster. 
![JobFinderBot](https://raw.githubusercontent.com/vyacheslav31/JobFinderBot/main/resources/img/JobFinderBot-02.png)
# Installation
### Dependencies
* <b>dotenv</b> : Used for loading credentials from the .env file.
* <b>discord</b> : Discord Python API (https://discordpy.readthedocs.io/en/latest/index.html).
* <b>bs4</b> : BeautifulSoup is used for sanitizing the job detail output of any HTML tags.

### Note
An .env file must be present in the root directory of this project containing your Discord token and API credentials.

# Program Control flow
This is the principal flow of the program and the main way that users will be interacting with bot. Each invocation of the post method follows this sequence diagram.

![jobfinderbot_controlflow_sequence_diagram](https://user-images.githubusercontent.com/43866398/134757591-a65a5448-d7a3-49bf-b446-a458e0a4b77a.png)

# Support
I maintain this repository for free, if you find it in your ❤️ to support me, 🌟 this repo.

# License
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

