# Module Federation: Fallback to local module or dependency

The purpose of this repo is to figure out a way to configure a remote module with a fallback to both these alternatives:
 - a local module implementation
 - a dependency package inside node_modules

## Folder setup

There are two entities in this repo.
 - `app` => Application (host)
 ```
    cd app
    yarn && yarn serve

    # app should be running on port 3000
 ```
 - `components` => Library of components that exposes modules for the app to consume
 ```
    cd components
    yarn && yarn serve

    # components should be served at port 3001
 ```

`app` --(depends on `CrazyHeader` component)--> `components`

## Goal
The goal is to configure the remote `CrazyHeader` vue component to fallback to the `BasicHeader` vue component implemented/available within the app.

Although not included in the setup, we would like to find a way to configure a node_module dependency as a fallback as well.
