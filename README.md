# InControl

Made with ReactJs, Typescript & Firebase, InControl is a webapp that facilities you to manage your expenses and entries. You
can add new money entries and new money spent, and see how much you can still spend according to your entries.

<img src="https://user-images.githubusercontent.com/92704272/209273054-e93b3604-d850-4060-931a-7799aa68e3cb.png" />

## Requirements to run on your computer

- You need to have [NodeJs](https://nodejs.org/en/) installed.
- You need to create a [Firebase](https://firebase.google.com/) app and add the Firebase config in .env file, following the .env.example, and set your Firestore and Authentication on firebase.
- On .env, you need to set a password on VITE_CREATE_PASSWORD to access the create new post page (/post/create).

To clone this project write in the console:

```console
git clone https://github.com/jaoincode/incontrol-app.git
```

And if you successfully cloned and all the requirements open the frontend file and run in the console:

```console
npm run dev
```

## Usage

- Create an account using Google Auth.
- Add your spents/entries clicking on +Entry or +Spent button.
- You can delete your spents/entries clicking on X button on the list.
- If you open the menu you can access a complete big list of your spents and entries.

## Resources that can help you

- [How To Add Firebase To Your Webapp](https://firebase.google.com/docs/web/setup)
- [How To Create And Use Firestore](https://firebase.google.com/docs/firestore)
- [How To Create and Use Firebase Auth](https://firebase.google.com/docs/auth/web/start)
- [How To Clone a Github Repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository)
