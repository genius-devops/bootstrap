s
adams@DESKTOP-A0K3OOI MINGW64 ~/Documents/projects/plp/bootstrap (main)
$ git status
On branch main
Your branch is up to date with 'origin/main'.

nothing to commit, working tree clean

adams@DESKTOP-A0K3OOI MINGW64 ~/Documents/projects/plp/bootstrap (main)
$ git branche
git: 'branche' is not a git command. See 'git --help'.

The most similar command is
        branch

adams@DESKTOP-A0K3OOI MINGW64 ~/Documents/projects/plp/bootstrap (main)
$ git branch
* main

adams@DESKTOP-A0K3OOI MINGW64 ~/Documents/projects/plp/bootstrap (main)
$ git checkout -b feature-update
Switched to a new branch 'feature-update'

adams@DESKTOP-A0K3OOI MINGW64 ~/Documents/projects/plp/bootstrap (feature-update)
$ git status
On branch feature-update
Untracked files:
  (use "git add <file>..." to include in what will be committed)
        plpweb.html

nothing added to commit but untracked files present (use "git add" to track)

adams@DESKTOP-A0K3OOI MINGW64 ~/Documents/projects/plp/bootstrap (feature-update)
$ git status
On branch feature-update
Untracked files:
  (use "git add <file>..." to include in what will be committed)
        plpweb.html

nothing added to commit but untracked files present (use "git add" to track)

adams@DESKTOP-A0K3OOI MINGW64 ~/Documents/projects/plp/bootstrap (feature-update)
$ git branch
* feature-update
  main

adams@DESKTOP-A0K3OOI MINGW64 ~/Documents/projects/plp/bootstrap (feature-update)
$ ls
CODE_OF_CONDUCT.md  build/         js/                package.json
LICENSE             composer.json  nuget/             plpweb.html
README.md           dist/          package-lock.json  scss/
SECURITY.md         hugo.yml       package.js         site/

adams@DESKTOP-A0K3OOI MINGW64 ~/Documents/projects/plp/bootstrap (feature-update)
$ cd js

adams@DESKTOP-A0K3OOI MINGW64 ~/Documents/projects/plp/bootstrap/js (feature-update)
$ ls
dist/  index.esm.js  index.umd.js  src/  tests/

adams@DESKTOP-A0K3OOI MINGW64 ~/Documents/projects/plp/bootstrap/js (feature-update)
$ cd src

adams@DESKTOP-A0K3OOI MINGW64 ~/Documents/projects/plp/bootstrap/js/src (feature-update)
$ ls
alert.js           carousel.js  dropdown.js   popover.js    toast.js
base-component.js  collapse.js  modal.js      scrollspy.js  tooltip.js
button.js          dom/         offcanvas.js  tab.js        util/

adams@DESKTOP-A0K3OOI MINGW64 ~/Documents/projects/plp/bootstrap/js/src (feature-update)
$ git status
On branch feature-update
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   ../../scss/_alert.scss

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        ../../plpweb.html

no changes added to commit (use "git add" and/or "git commit -a")

adams@DESKTOP-A0K3OOI MINGW64 ~/Documents/projects/plp/bootstrap/js/src (feature-update)
$ git add plpweb.html
fatal: pathspec 'plpweb.html' did not match any files

adams@DESKTOP-A0K3OOI MINGW64 ~/Documents/projects/plp/bootstrap/js/src (feature-update)
$ git add plpweb.html
fatal: pathspec 'plpweb.html' did not match any files

adams@DESKTOP-A0K3OOI MINGW64 ~/Documents/projects/plp/bootstrap/js/src (feature-update)
$ git add .

adams@DESKTOP-A0K3OOI MINGW64 ~/Documents/projects/plp/bootstrap/js/src (feature-update)
$ git status
On branch feature-update
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   ../../scss/_alert.scss

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        ../../plpweb.html

no changes added to commit (use "git add" and/or "git commit -a")

adams@DESKTOP-A0K3OOI MINGW64 ~/Documents/projects/plp/bootstrap/js/src (feature-update)
$ git commit -a "new file added and changes have been made on alert file"
fatal: paths 'new file added and changes have been made on alert file ...' with
-a does not make sense

adams@DESKTOP-A0K3OOI MINGW64 ~/Documents/projects/plp/bootstrap/js/src (feature-update)
$ git commit -am "new file added and changes have been made on alert file"
[feature-update 5f1e93fa5] new file added and changes have been made on alert fi
le
 1 file changed, 1 insertion(+)

adams@DESKTOP-A0K3OOI MINGW64 ~/Documents/projects/plp/bootstrap/js/src (feature-update)
$ git status
On branch feature-update
Untracked files:
  (use "git add <file>..." to include in what will be committed)
        ../../plpweb.html

nothing added to commit but untracked files present (use "git add" to track)

adams@DESKTOP-A0K3OOI MINGW64 ~/Documents/projects/plp/bootstrap/js/src (feature-update)

PS C:\Users\adams\Documents\projects\plp\bootstrap> git branch
* feature-update
  main
PS C:\Users\adams\Documents\projects\plp\bootstrap> git status
On branch feature-update
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        new file:   plpweb.html

PS C:\Users\adams\Documents\projects\plp\bootstrap> git commit -m "added new file "
[feature-update 0e90b4301] added new file
 create mode 100644 plpweb.html
PS C:\Users\adams\Documents\projects\plp\bootstrap> git push
fatal: The current branch feature-update has no upstream branch.
To push the current branch and set the remote as upstream, use

    git push --set-upstream origin feature-update

To have this happen automatically for branches without a tracking
upstream, see 'push.autoSetupRemote' in 'git help config'.

PS C:\Users\adams\Documents\projects\plp\bootstrap> git push --set-upstream origin feature-update 
Enumerating objects: 10, done.
Counting objects: 100% (10/10), done.
Delta compression using up to 2 threads
Writing objects: 100% (7/7), 1.69 KiB | 192.00 KiB/s, done.
Total 7 (delta 4), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (4/4), completed with 3 local objects.
remote:
remote:      https://github.com/genius-devops/bootstrap/pull/new/feature-update
remote:
 * [new branch]          feature-update -> feature-update
PS C:\Users\adams\Documents\projects\plp\bootstrap> git status
On branch feature-update

nothing to commit, working tree clean
* feature-update
  main
PS C:\Users\adams\Documents\projects\plp\bootstrap> git branch main
fatal: a branch named 'main' already exists
Switched to branch 'main'
Your branch is up to date with 'origin/main'.
PS C:\Users\adams\Documents\projects\plp\bootstrap> git branch
  feature-update
PS C:\Users\adams\Documents\projects\plp\bootstrap> git status
On branch main

nothing to commit, working tree clean
PS C:\Users\adams\Documents\projects\plp\bootstrap> git status
On branch main
Your branch is up to date with 'origin/main'.

nothing to commit, working tree clean
PS C:\Users\adams\Documents\projects\plp\bootstrap> git branch
PS C:\Users\adams\Documents\projects\plp\bootstrap> git status     
On branch main
Your branch is up to date with 'origin/main'.

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        plpweb.html
nothing added to commit but untracked files present (use "git add" to track)
PS C:\Users\adams\Documents\projects\plp\bootstrap> git add .
PS C:\Users\adams\Documents\projects\plp\bootstrap> git status
Your branch is up to date with 'origin/main'.

Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        new file:   plpweb.html

PS C:\Users\adams\Documents\projects\plp\bootstrap> git commit -m "added new file"
[main 3e8c63af2] added new file
 1 file changed, 105 insertions(+)
PS C:\Users\adams\Documents\projects\plp\bootstrap> git push
Enumerating objects: 4, done.
Counting objects: 100% (4/4), done.
Delta compression using up to 2 threads
Writing objects: 100% (3/3), 1.35 KiB | 689.00 KiB/s, done.
Total 3 (delta 1), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (1/1), completed with 1 local object.
   4f1fb5094..3e8c63af2  main -> main
PS C:\Users\adams\Documents\projects\plp\bootstrap> git status 
Your branch is up to date with 'origin/main'.

PS C:\Users\adams\Documents\projects\plp\bootstrap> git merge feature-update
Merge made by the 'ort' strategy.
 scss/_alert.scss | 1 +
 1 file changed, 1 insertion(+)
Switched to branch 'feature-update'
Your branch is up to date with 'origin/feature-update'.
PS C:\Users\adams\Documents\projects\plp\bootstrap> git branch
* feature-update
  main
PS C:\Users\adams\Documents\projects\plp\bootstrap> git status
On branch feature-update
Your branch is up to date with 'origin/feature-update'.
nothing to commit, working tree clean
On branch feature-update
Your branch is up to date with 'origin/feature-update'.

        1-promise.js

nothing added to commit but untracked files present (use "git add" to track)
PS C:\Users\adams\Documents\projects\plp\bootstrap> git add .
warning: in the working copy of '1-promise.js', CRLF will be replaced by LF the next time Git touches it
PS C:\Users\adams\Documents\projects\plp\bootstrap> git commit -m "added js file"
[feature-update bc45199c8] added js file
 1 file changed, 13 insertions(+)
 create mode 100644 1-promise.js
PS C:\Users\adams\Documents\projects\plp\bootstrap> git push
Enumerating objects: 4, done.
Counting objects: 100% (4/4), done.
Compressing objects: 100% (3/3), done.
Writing objects: 100% (3/3), 479 bytes | 239.00 KiB/s, done.
remote: Resolving deltas: 100% (1/1), completed with 1 local object.
To https://github.com/genius-devops/bootstrap.git
   0e90b4301..bc45199c8  feature-update -> feature-update
PS C:\Users\adams\Documents\projects\plp\bootstrap> git switch main
Your branch is ahead of 'origin/main' by 3 commits.
  (use "git push" to publish your local commits)
  feature-update
PS C:\Users\adams\Documents\projects\plp\bootstrap> git merge feature-update
Merge made by the 'ort' strategy.
 1-promise.js | 13 +++++++++++++
 1 file changed, 13 insertions(+)
 create mode 100644 1-promise.js
PS C:\Users\adams\Documents\projects\plp\bootstrap> git branch
  feature-update
* main
PS C:\Users\adams\Documents\projects\plp\bootstrap> git merge feature-update
Already up to date.
Your branch is ahead of 'origin/main' by 5 commits.
  (use "git push" to publish your local commits)
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
        modified:   1-promise.js

no changes added to commit (use "git add" and/or "git commit -a")
PS C:\Users\adams\Documents\projects\plp\bootstrap> git add .
[main 23bdf1761] added comment
 1 file changed, 2 insertions(+)
PS C:\Users\adams\Documents\projects\plp\bootstrap> git switch feature-update
Switched to branch 'feature-update'
Your branch is up to date with 'origin/feature-update'.
PS C:\Users\adams\Documents\projects\plp\bootstrap> git status
On branch feature-update
Your branch is up to date with 'origin/feature-update'.

nothing to commit, working tree clean
PS C:\Users\adams\Documents\projects\plp\bootstrap> git pull
remote: Enumerating objects: 11, done.
remote: Compressing objects: 100% (6/6), done.
remote: Total 6 (delta 4), reused 0 (delta 0), pack-reused 0
Unpacking objects: 100% (6/6), 1.92 KiB | 82.00 KiB/s, done.
From https://github.com/genius-devops/bootstrap
   3e8c63af2..8f25112f5  main           -> origin/main
Updating bc45199c8..b98671683
Fast-forward
 1 file changed, 1 insertion(+), 1 deletion(-)
PS C:\Users\adams\Documents\projects\plp\bootstrap> git switch main
Your branch and 'origin/main' have diverged,
and have 6 and 1 different commits each, respectively.
  (use "git pull" to merge the remote branch into yours)
PS C:\Users\adams\Documents\projects\plp\bootstrap> git pull
 plpweb.html | 4 ++--
 1 file changed, 2 insertions(+), 2 deletions(-)
PS C:\Users\adams\Documents\projects\plp\bootstrap> git branch
  feature-update
* main
PS C:\Users\adams\Documents\projects\plp\bootstrap> git merge feature-update
Auto-merging 1-promise.js
Merge made by the 'ort' strategy.
 1-promise.js | 2 +-
 1 file changed, 1 insertion(+), 1 deletion(-)
On branch main
Your branch is ahead of 'origin/main' by 9 commits.
  (use "git push" to publish your local commits)

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   plpweb.html

no changes added to commit (use "git add" and/or "git commit -a")
PS C:\Users\adams\Documents\projects\plp\bootstrap> git pull
remote: Enumerating objects: 5, done.
remote: Compressing objects: 100% (3/3), done.
remote: Total 3 (delta 2), reused 0 (delta 0), pack-reused 0
From https://github.com/genius-devops/bootstrap
   8f25112f5..322dfd09b  main       -> origin/main
error: Your local changes to the following files would be overwritten by merge:
        plpweb.html
Please commit your changes or stash them before you merge.
Aborting
Merge with strategy ort failed.
[main 45bc27675] new update
 1 file changed, 1 insertion(+), 1 deletion(-)
PS C:\Users\adams\Documents\projects\plp\bootstrap> git push
To https://github.com/genius-devops/bootstrap.git
error: failed to push some refs to 'https://github.com/genius-devops/bootstrap.git'
hint: Updates were rejected because the tip of your current branch is behind
hint: its remote counterpart. Integrate the remote changes (e.g.
hint: 'git pull ...') before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.
PS C:\Users\adams\Documents\projects\plp\bootstrap> git pull
Auto-merging plpweb.html
Merge made by the 'ort' strategy.
 plpweb.html | 2 +-
 1 file changed, 1 insertion(+), 1 deletion(-)
PS C:\Users\adams\Documents\projects\plp\bootstrap> git push
Enumerating objects: 30, done.
Counting objects: 100% (27/27), done.
Delta compression using up to 2 threads
Compressing objects: 100% (16/16), done.
Writing objects: 100% (16/16), 1.83 KiB | 134.00 KiB/s, done.
Total 16 (delta 9), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (9/9), completed with 3 local objects.
To https://github.com/genius-devops/bootstrap.git
   322dfd09b..4826828b7  main -> main
PS C:\Users\adams\Documents\projects\plp\bootstrap>
