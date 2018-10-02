# GitHub

GitHub is the world's leading software development platform. With Scrumpy you're able to connect your GitHub repositories with your Scrumpy projects.

## Connect Your Project with GitHub

Scrumpy projects are connected through a Webhook.

1. Open Scrumpy and go to the project you want to connect.
3. Open the project settings, you'll need the webhook URL and the secret token.
5. Open your GitHub repository and go to Settings > Webhooks.
7. Add a new webhook with the following settings:

* Payload URL: `Scrumpy Webhook URL`
* Content type: `application/json`
* Secret: `Scrumpy Secret`
* 👉 Enable SSL verification
* 👉 Just the push event
* ✅ Active

## Mark Stories as Complete

If your repository is connected successful you are can mark stories as done with your commit messages. Here are a few examples:

> adding more cats, fix #1

> fix #1, resolve #2

> fixing this nasty bug (done #42)

You can use other keywords, too. Here is a complete list of all recognized keywords: done, fix, fixed, resolve, resolved, complete, completed, finish, finished