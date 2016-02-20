
##Files for the various projects in Udemy class Modern React with Redux by Stephen Grider
---

This is my working directory as I go through this class. Each project will have it's own sub directory. I just wanted a place to keep everything.

>Note: my code may differ from Stephen's as I experiment with things as I go along. So I make no guarantees that it will perform the same way that his code does.

If you are interested in this class, you should have prior knowledge of HTML, CSS and JavaScript. From what I can tell, this class starts off right where [Web Developer Bootcamp by Colt Steele](https://www.udemy.com/the-web-developer-bootcamp) left off (currently at lecture 273 but he is adding more content so this may not always be the case). I highly recommend Colt's class if you want to get started, he does a great job and there is a very active community on his gitter channel.

For me this is perfect. Many of the other classes start off at the beginning of web development and it is hard to sit through another "this is a var" video.
In opening section, Stephen assumes:

 - You have Node.js installed because he has you run `npm install` right off the bat
 - You know what `document.querySelector('.container')` does.
If you don't know what I am talking about, go back and see Colt or hit up [FreeCodeCamp](http://freecodecamp.com)

This class, as of February 2016 looks like it is as current as I could expect it to be. It is using React 0.14.3 (latest is 0.14.7), Babel-core 6.2.1 (latest is 6.5 2) and Bootstrap 4-dev for style (which is still in beta). So although I am going to leave things just the way they are in the package.json file, all of this should be up-gradable to the latest without too much trouble. The reason I mention this is because a lot of older React tutorials out there are built on React 0.13 and Babel v5. Babel went through major changes between these two versions, the most obvious of which was breaking things out into separate components. Today, if you want to get one of these older tutorials up and running using the latest version, you will likely spend half a day just resolving issues.

Lecture 13 Deviation:
In the lecture the API key is added directly to the index.js file. Since I am saving all of this to Github, I didn't want this key included in my repo. To solve this:

 - I created an app-keys.js file one level up from the root of my repo.
 - I then exported an object with the api key in it.
```js
const apiKeys = {
  youtube: 'put_your_API_Key_here',
};

module.exports = apiKeys;
```

 - I then added an import statement to my index file and customized my API_KEY const
```js
import ApiKeys from '../../../../api-keys';

const API_KEY = ApiKeys.youtube;
```
>Notice how many ../'s there are. Each one moves us up one directory until we are just outside of this repo.

One benefit of this is that if we have to add any more keys, we can just add another line to this file. So keeping track of our own keys is neat and clean.
Another is that no other code needs to change inside of our application.
>Note: these keys will be exported with your app when it is built. If you intend to host them, they should be on your own domain and registered with Google.
