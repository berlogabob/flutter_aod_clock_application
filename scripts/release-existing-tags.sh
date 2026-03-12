#!/bin/bash
# ─── Manual Release Trigger for Existing Tags ────────────────────────────────
# Creates GitHub Releases for tags that already exist but don't have releases
#
# Usage: ./scripts/release-existing-tags.sh
# ─────────────────────────────────────────────────────────────────────────────

set -e

REPO="berlogabob/flutter_aod_clock_application"
GITHUB_TOKEN="${GITHUB_TOKEN:-}"

# Tags that should have releases but might be missing
TAGS=(
    "v0.0.1.3"
    "v0.0.1.4"
    "v1.0.1.5"
)

echo "🔍 Checking for missing releases..."

for TAG in "${TAGS[@]}"; do
    # Check if release already exists
    RESPONSE=$(curl -s -o /dev/null -w "%{http_code}" \
        "https://api.github.com/repos/$REPO/releases/tags/$TAG")
    
    if [ "$RESPONSE" = "404" ]; then
        echo "⚠️  Release missing for tag: $TAG"
        
        if [ -z "$GITHUB_TOKEN" ]; then
            echo "   Skipping - set GITHUB_TOKEN environment variable to create releases"
        else
            echo "   Creating release..."
            curl -L -X POST \
                "https://api.github.com/repos/$REPO/releases" \
                -H "Authorization: Bearer $GITHUB_TOKEN" \
                -H "Accept: application/vnd.github+json" \
                -H "X-GitHub-Api-Version: 2022-11-28" \
                -d "{
                    \"tag_name\": \"$TAG\",
                    \"name\": \"Nightstand Clock $TAG\",
                    \"generate_release_notes\": true
                }" > /dev/null
            echo "   ✅ Release created for $TAG"
        fi
    else
        echo "✅ Release exists for tag: $TAG"
    fi
done

echo ""
echo "💡 To create releases, run:"
echo "   export GITHUB_TOKEN=your_token_here"
echo "   ./scripts/release-existing-tags.sh"
echo ""
echo "📝 Get a token at: https://github.com/settings/tokens (repo scope)"
