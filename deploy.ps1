# Ensure you have the required modules installed:
# Install-Module -Name AWSPowerShell -Scope CurrentUser
# Install-Module -Name AWS.Tools.S3 -Scope CurrentUser
# Install-Module -Name AWS.Tools.CloudFront -Scope CurrentUser

param(
    [string]$LocalFolder = "./dist",
    [string]$BucketName = "xsware-portfolio-website",
    [string]$CloudFrontDistId = "E2FYD7JUI2GKGS"
)

Import-Module AWS.Tools.S3
Import-Module AWS.Tools.CloudFront

# Upload all files to the bucket
Write-Host "Uploading files from $LocalFolder to S3 bucket $BucketName..."
Write-S3Object -BucketName $BucketName -Folder $LocalFolder -KeyPrefix "/" -Recurse -CannedACLName public-read
Write-Host "All files uploaded with public-read ACL."

# Invalidate CloudFront cache
$timestamp = Get-Date -Format "yyyyMMddHHmmss"
$invalidationBatch = @{
    DistributionId  = $CloudFrontDistId
    Paths_Quantity  = 1
    Paths_Item      = @("/*")
    InvalidationBatch_CallerReference = "invalidation-$timestamp"
}

Write-Host "Creating CloudFront invalidation..."
New-CFInvalidation @invalidationBatch | Out-Null

Write-Host "CloudFront cache invalidation requested for distribution $CloudFrontDistId"
