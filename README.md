# What is this?

This is my little example of using redux-offline with an IndexedDB. It uses the IndexedDB to store the whole state of the app. This gives the cappability of using the app offline.

# How can I see something?

To start it, clone it and run `npm i`. Then you start the app with `npm start`.

Now you see a stupid UI. Open the developer console. Watch what is in the IndexedDB. You will see the whole state of the app there. When you add an item you will see the state grow.

This is not yet amazing. Set your browser to offline mode and see how the IndexedDB bahaves when you add items. It keeps network actions there and executes them as soon as you go back online.

# TODOs

- Get rid of the enthusiasm stuff from react template.

- Explain what is going on at the UI instead of making people read this README.md.

- Add buttons to remove items

- Organize the files better
