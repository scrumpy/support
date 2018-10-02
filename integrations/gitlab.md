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
* ✅ Push Events
* ✅ Enable SSL verification

## Mark Stories as Complete

If your repository is connected successful you are can mark stories as done with your commit messages. Here are a few examples:

> adding more cats, fix #1

> fix #1, resolve #2

> fixing this nasty bug (done #42)

You can use other keywords, too. Here is a complete list of all recognized keywords: done, fix, fixed, resolve, resolved, complete, completed, finish, finished