# test401

# EXAM 301 STEPS

## Create 2 new repositories on your GitHub:-

- One for the **front** end: use this template as the starter code,
- One for the **backend**: create it from scratch.

## Requirements:-

- Please, follow the provided wireframe structure in your web app.

1. Complete the **auth0** stuff (follow the steps in the README file that is in our template). <span style="color:red">(3 points)</span>

2. In the **Home Component**, the user wants to view all **Fruits** that are  retrieved from the **Fruits API** using this [endpoint](https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic) , which should be displayed as cards,
and each **Fruit** should have its own card that will contain (**name**, **image**, **price**, **and Add-To-Fav button**). <span style="color:red">(15 points)</span>

   - You should get the API data from the server-side.

   - You will be creating here a separate component for each Fruit.

   - You will be using the card Bootstrap component for redering each Fruit.

   - **Hint**:-

   ```js
   // You will use Function:
    componentDidMount()
    ```

3. When the user clicks on the **'Add-To-Favorite'** button, the selected **Fruit** should be added to the database (with the owner email [logged-in user]). <span style="color:red">(15 points)</span>

4. In the **FavFruit Component**, the user wants to view his favorite fruits that were retrieved from the database and displayed them as cards,
   (each **Fruit** should have it own card that will contain (**Name**, **Image**, **Price**, **Update** and **Delete** buttons)) <span style="color:red">(15 points)</span>

      - **Hint**:-

   ```js
   // You will use Function:
    componentDidMount()
    ```

5. When the user clicks on the **Delete** button, it will delete the selected **Fruit** that is related to the logged-in user from the database and the deleted card should disapper. <span style="color:red">(10 points)</span>

6. When the user clicks on the **Update** button, it will show a (bootstrap Modal) that contains an **update form** containing the Fruit's
informaiton. after the user updates the data you should update the database with the new data and re-render the component with the newly updated data. <span style="color:red">(19 points)</span>

   - You should create a separate component for the Update-Form.

7. **Deploy** your App (using Netlify, Heroku & MongoDB Atlas). <span style="color:red">(5 points)</span>

8. Keep your **code clean**, also use proper naming for both variables and functions (idiomatic style) and proper indentation.  <span style="color:red">(3 points)</span>

9. Full run app.  <span style="color:red">(5 points)</span>

- - -

## Resources:-

- You can use **any technology** you've learned during code 301 course to achieve the above requirements.

- Auth0: https://manage.auth0.com/dashboard/

- React Bootstrap: https://react-bootstrap.netlify.app/getting-started/introduction/

- Mongoose: https://mongoosejs.com/docs/index

- You can use this NoSQL cheat sheet

- If you face any connection issues to the database. don't forget to start your MongoDB server: `sudo service mongodb start`

- if you use `wsL` and have weird issues with server, you can use this command `killall -s KILL node`. **keep using** **`ctrl+c`**

### For the server-side:-

```js
const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();
const server = express();
server.use(cors());
server.use(express.json());
