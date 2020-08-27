# 301 Final Exam

## You have been hired to create application that has the following features

1. Retrieve the list of Pokemon from an API
1. Sort the list
1. Allow a user to add Pokemon from that list to their "Favorites" (storing them in a database)
1. Viewing the list of favorites

### Before you begin

- Install your dependencies
- Build your server to start on port 3002

#### Windows Users

In order for your tests to to run properly, you'll need to install an additional dependency: **Chromium**. Please run these commands, in order, from your Ubuntu shell

```bash
sudo add-apt-repository ppa:saiarcot895/chromium-beta
sudo apt remove chromium-browser
sudo apt install chromium-browser
```

## Application Requirements

### As a user, I want to be able to easily see a list of Pokemon characters in alphabetic order

  1. Gather Pokemon information from the [PokeApi](https://pokeapi.co/).
  1. Sort the Pokemon in alphabetical order by name.
  1. Display the name of each Pokemon on the `show.ejs` view.
  1. Render this on the `/` route.
  
### As a user, I want to be able to save my favorite Pokemon so that I can come back later and find them

  1. Render each Pokemon result from the API inside of a `<form>` element with an action of `/pokemon`.

- Make sure that there is a button inside of that `<form>` with the text "Add to Favorites".
- Place the name of each character inside of the `<form>` in an `<h2>` 
- You will need a hidden `<input>` tag to send the name to the server. 

The structure MUST look like this:

    ```html
    <form action="/add">
      <h2>...</h2>
      <input ...>
      <button>Add to Favorites</button>
    </form>
    ```

  1. When a user clicks on the "Add to Favorites" button, your application should save that Pokemon in the database and redirect them back to the `/` route.

### As a user, I want to be able to see my favorite Pokemon

  1. When the user visits the `/favorites` route, a list of their favorite saved Pokemon from the database will render to the `favorites.ejs` page.
  1. Create this list by putting each name in an `<li>` tag in the `favorites.ejs` page.

### As a user, I want this information to be displayed in a way that is aesthetically pleasing

  1. Style this site using either grid or flex. Be creative, but make it look good!

## To Run The Tests

  1. Start with an empty database table
  1. Start your server using `npm start`
  1. In another terminal shell run the command: `npm test`
