# 🧙 Week 1 - Axios Exercise

(This is a markdown .MD file, if you are reading this in vs-code, right click the file and select `Open Preview`)

#### Rules for this exercise

- You are allowed to consult the Reader, previous exercises and search on the internet
- You are not allowed to ask your colleagues for help
- You are not allowed to make this public in any ways

#### Duration

- This exercise ends at 11.00h

#### How to make and submit your homework

- Navigate to the directory called `end-of-day-exercises` with your terminal
- Open it in VScode using `code .`
- Once you finish or the deadline time is reached:

  - open [gist](https://gist.github.com/)
  - copy/paste all your code there
  - click `Create secret gist`
  - fill in [THIS FORM](https://forms.gle/3iU4MAEGgQMoM3U97)

  [_Here is a screen recording on how to do this_](https://s3.eu-west-1.amazonaws.com/cd.sseu.re/items/z8uLGBBQ/2f304d6d-8128-422c-845a-527c29f4353e.gif?v=a85c67f08eb0ab3795f2f113b6bb1a5a)

## Learning goals & some tips

For transparency and clarity, these are the learning goals we will be testing:

- Writing Javascript (using variables, functions, return values, parameters)
- Working with arrays and objects
- Using array methods (.find, .filter, .map)
- Using npm packages (axios)
- Using axios to interact with your server from a different file/script

**TIP: Read the assignment carefully!** It is easy to accidentally deviate from an assignment, resulting in a frustrating experience. Taking the time to read the exercise can save you time and effort.

**TIP: Don't get stuck!** If you feel stuck, try taking a small walk, continuing on to a next step, or talking out loud about the problem you're facing (programmers call this "rubber-ducking"). Everybody can get stuck, but don't let it stop you. You are also allowed to ask for help if you're really stuck, just try to avoid it.

**TIP: Break problems up into smaller problems!** Before writing code make yourself a 'to-do list' or 'battleplan'. Use `console.log()` to help you with debugging!

### ❗ Axios

**IMPORTANT NOTE**: You will need the server you built in yesterday's exercise! If what you built is not fully functional, we will provide you with a fully functional version of it!

**Setup**:

1. Create a directory called `client`
2. `npm init -y` inside of it.
3. Create a new file called `client.js`.
4. run `npm install axios`
5. Import (require) axios at the top.
6. Don't forget to start your server before trying each exercise

**Required**

**A** Create a function that makes an axios call to GET - `/` endpoint, and log ONLY the relevant data.

**B** Make a function that takes NO params and makes and axios request to our server to get all characters and logs them (only relevant data).

**C** Make a function that takes 1 parameter (blood) and makes and axios call to your GET - `/char/:blood` endpoint. You need to log the characters with that `blood`.

**Bonus**

**D** Write a function that makes a request to `https://api.quotable.io/random` and only logs the quote (note: not the entire object, just the quote)

> You can learn more about the quote api here: `https://github.com/lukePeavey/quotable`

**E** Write a function that takes a 1 paramenter `name` and makes a request to `https://pokeapi.co/api/v2/pokemon/${name}`. You need to log the pokemon object on the console
