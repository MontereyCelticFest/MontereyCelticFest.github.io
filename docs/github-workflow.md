# Overview of github workflow

To add any new changes, first create a branch to add your changes to:

```
$ git checkout -b <name of branch>
```



After you add your changes to the branch, you can view the changes on your branch with this command:
```
$ git diff
```

To add and push your changes up to github:
```
$ git add .
$ git commit -m 'message what the change is about'
$ git push
```

Then go to the github page and manually create a pull request
