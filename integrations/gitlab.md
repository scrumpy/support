# GitLab

GitLab is the first single application for all stages of the DevOps lifecycle for Product, Development, QA, Security, and Operations teams to work concurrently on the same project. With Scrumpy you're able to connect your GitLab repositories with your Scrumpy projects.

## Connect Your Project with GitLab

Scrumpy projects are connected through a Webhook.

1. Open Scrumpy and go to the project you want to connect.
3. Open the project settings, you'll need the webhook URL and the secret token.
5. Open your GitLab repository and go to Settings > Integrations.
7. Add a new webhook with the following settings:

* URL: `Scrumpy Webhook URL`
* Secret Token: `Scrumpy Secret`
* ✅ **Push Events** and **Merge request events**
* ✅ Enable SSL verification

## Reference a Story in Your Commit Message

If your repository is connected successfully, you can mark stories as done with your commit messages. Here are a few examples:

> working on the feature, see #1

> references #1, see #2

> work on this nasty bug (ref #42)

You can use other keywords, too. Here is a complete list of all recognized keywords to link your commits to stories:

* addresses, re, references, ref, refs, see

## Mark Stories as Complete

If your repository is connected successfully, you can mark stories as done with your commit messages. Here are a few examples:

> adding more cats, fix #1

> fix #1, resolve #2

> fix this nasty bug (implement #42)

You can use other keywords, too. Here is a complete list of all recognized keywords to mark a story as done:
* close, closes, closed, closing
* fix, fixes, fixed, fixing
* resolve, resolves, resolved, resolving
* implement, implements, implemented, implementing
