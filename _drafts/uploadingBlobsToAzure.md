Upload data to Blob storage using the Azure Cross-Platform Command-Line Interface (xplat-cli)
The xplat-cli is a cross-platform utility that allows you to manage Azure services. Use the following steps to upload data to blob storage.

Install and configure the xplat-cli.

Open a command-prompt, bash, or other shell, and use the following to authenticate to your Azure subscription.

azure login
When prompted, enter the username and password for your subscription.

Enter the following command to list the storage accounts for your subscription

azure storage account list
Select the storage account that contains the Blob you wish to work with, then use the following to retrieve the key for this account.

azure storage account keys list <storage-account-name>
This should return a Primary and Secondary key. Copy the Primary key value, as it will be used in the next steps.

Use the following command to retrieve a list of blob containers within the storage account.

azure storage container list -a <storage-account-name> -k <primary-key>
Use the following to perform upload and download blobs to the container.

To upload a file to the container:

azure storage blob upload -a <storage-account-name> -k <primary-key> <source-file> <container-name> <blob-name>
To download a file from the container:

azure storage blob download -a <storage-account-name> -k <primary-key> <container-name> <blob-name> <destination-file>

http://azure.microsoft.com/en-us/documentation/articles/hdinsight-upload-data/#xplatcli

http://azure.microsoft.com/en-us/documentation/articles/xplat-cli/