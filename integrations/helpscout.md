# HelpScout

## Connect Your Project with HelpScout

1. Open Scrumpy and go to the project you want to connect.
2. Open the project settings, click on integrations.
3. Click on the "Connect to HelpScout" button and authorize Scrumpy to use the HelpScout API.
4. Back in the project settings, choose the mailbox you want to use.
5. If you want, you can customize the tag that will be applied to your HelpScout conversations, e.g. `to-dev-team` or just keep `scrumpy`.

## Create a new workflow on HelpScout

To make things easier for your Support-Team, you can add a workflow to HelpScout:

1. Open HelpScout and go to the Mailbox you selected earlier.
2. Open the mailbox settings (or press the `,` key) and navigate to workflows. 
3. Add a new workflow:

* Name: `Send to Scrumpy`
* Type: `Manual`
* Select an Action: `Add Tag(s)`
* 👉 Fill in `scrumpy` or the tag from the Scrumpy project settings
* 👉 Activate Workflow

You can modify the workflow further to fit your needs. For example: You could close a conversation and send an email to the customer that this issue was reported to the dev-team.

## Create a story on Scrumpy from a HelpScout conversation

Within a HelpScout conversation you can now click on the lightning icon (or press `w`) and select `Send to Scrumpy` to create a new story in Scrumpy.

## What happens on Scrumpy doesn't stay on Scrumpy

The messages written on the linked Scrumpy story will be added as notes within HelpScout and vice versa. If the story on Scrumpy get closed, the conversation on HelpScout will be activated, so your Support-Team can continue.
