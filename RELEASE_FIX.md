# Release Fix Summary

## Problem
GitHub Releases page was not showing new Android releases (v0.0.1.3, v0.0.1.4, v1.0.1.5), and Obtanium couldn't fetch updated versions.

## Root Cause
- Tags were pushed successfully (`v1.0.1.5`, etc.)
- But GitHub Actions workflow didn't create corresponding GitHub Releases
- Releases page only showed very old releases (`v0.0.01`, `v0.0.02`)

## Fixes Applied

### 1. **Improved Makefile** (`Makefile`)
- Standardized tag format: `v1.0.1.5` (dots only, no `+`)
- Added `release-manual` target for triggering releases manually
- Added `create-missing-releases` target to create multiple releases at once

### 2. **Enhanced GitHub Actions Workflow** (`.github/workflows/release-apk.yml`)
- Improved APK naming (removes `v` prefix: `nightstand-clock-1.0.1.5.apk`)
- Added `fail_on_unmatched_files: false` to prevent failures on re-runs
- Better documentation and comments

### 3. **Manual Release Script** (`scripts/release-existing-tags.sh`)
- Checks which tags are missing releases
- Creates releases for missing tags via GitHub API
- Supports batch creation for multiple tags

### 4. **Updated Documentation** (`README.md`)
- Added comprehensive release process section
- Instructions for Obtanium integration
- GitHub token setup guide

## How to Fix Missing Releases NOW

### Option 1: Using the Script (Recommended)

```bash
# Get a GitHub token with 'repo' scope
# Visit: https://github.com/settings/tokens

# Export token
export GITHUB_TOKEN=ghp_your_token_here

# Create all missing releases at once
make create-missing-releases
```

### Option 2: Manual One-by-One via GitHub UI

1. Go to https://github.com/berlogabob/flutter_aod_clock_application/releases
2. Click "Draft a new release"
3. Enter tag: `v1.0.1.5` (or other missing tags)
4. Click "Generate release notes"
5. Upload APK manually (build it with `make apk`)
6. Publish release

### Option 3: Using GitHub CLI

```bash
# Install gh CLI: https://cli.github.com/
gh auth login

# Create release for specific tag
make release-manual TAG=v1.0.1.5
```

## Future Releases

For future releases, simply use:

```bash
make release
```

This will automatically:
1. ✅ Bump build number
2. ✅ Build web and APK
3. ✅ Commit and tag
4. ✅ Trigger GitHub Actions to create Release with APK

## Verification

After running the fix:

1. Check releases page: https://github.com/berlogabob/flutter_aod_clock_application/releases
2. Verify Obtanium can fetch latest version
3. Test APK download and installation

## Obtanium Configuration

For users who want to add this app to Obtanium:

- **Repository URL**: `https://github.com/berlogabob/flutter_aod_clock_application`
- **APK pattern**: `nightstand-clock-.*\.apk`
- **Version detection**: From release tags
