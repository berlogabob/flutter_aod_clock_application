# ─── Nightstand AOD Clock — Makefile ────────────────────────────────────────
#
# make release   ← THE ONE COMMAND:
#                  bumps build number in pubspec.yaml,
#                  builds web → /docs & release APK,
#                  commits, creates git tag, pushes.
#                  GitHub Actions then creates the GitHub Release.
#
# Other targets:
#   make web      Build web only (to /docs)
#   make apk      Build release APK only
#   make clean    Remove build artefacts
#   make get      flutter pub get
#   make upgrade  flutter pub upgrade --major-versions
#   make analyze  flutter analyze
#   make icons    Regenerate launcher icons
#   make version  Print current version

.PHONY: release web apk clean get upgrade analyze icons version

# ─── Helpers ─────────────────────────────────────────────────────────────────
# Extract semver and build number from pubspec.yaml  (e.g. 0.0.1+1 → 0.0.1 and 1)
PUBSPEC       := pubspec.yaml
_RAW_VERSION  := $(shell grep '^version:' $(PUBSPEC) | sed 's/version: *//')
VERSION_NAME  := $(shell echo $(_RAW_VERSION) | cut -d'+' -f1)
BUILD_NUMBER  := $(shell echo $(_RAW_VERSION) | cut -d'+' -f2)
NEW_BUILD     := $(shell echo $$(($(BUILD_NUMBER) + 1)))
NEW_VERSION   := $(VERSION_NAME)+$(NEW_BUILD)
# Tag format: v1.0.1.5 (dots only, no +) — URL-safe and consistent for GitHub Releases
TAG           := v$(VERSION_NAME).$(NEW_BUILD)

# ─── Main target: full release pipeline ──────────────────────────────────────
release: _bump-version web apk _commit-and-tag
	@echo ""
	@echo "✅  Released $(NEW_VERSION) — tag $(TAG) pushed."
	@echo "    GitHub Actions will create the GitHub Release automatically."

# ─── Manual release: create GitHub Release for existing tag ──────────────────
# Usage: make release-manual TAG=v1.0.1.5
# This triggers the workflow manually for tags that already exist
release-manual:
	@echo "→ Triggering release for existing tag: $(TAG)"
	@gh workflow run release-apk.yml --field tag=$(TAG)
	@echo "✅  Release workflow triggered for $(TAG)"

# ─── Create releases for all missing tags ────────────────────────────────────
# Usage: make create-missing-releases
# Requires: GITHUB_TOKEN environment variable with repo scope
create-missing-releases:
	@./scripts/release-existing-tags.sh

# ─── Bump build number in pubspec.yaml ───────────────────────────────────────
_bump-version:
	@echo "→ Bumping build number: $(_RAW_VERSION) → $(NEW_VERSION)"
	@sed -i.bak "s/^version: .*/version: $(NEW_VERSION)/" $(PUBSPEC) && rm -f $(PUBSPEC).bak

# ─── Web build → /docs ───────────────────────────────────────────────────────
web:
	flutter build web \
		--release \
		--base-href "/flutter_aod_clock_application/" \
		--output docs
	@echo "✅  Web build written to /docs"

# ─── Release APK ─────────────────────────────────────────────────────────────
apk:
	flutter build apk --release
	@echo "✅  APK: build/app/outputs/flutter-apk/app-release.apk"

# ─── Commit + tag + push (triggered by `release` only) ───────────────────────
_commit-and-tag:
	git add $(PUBSPEC) docs/
	git commit -m "release: $(NEW_VERSION)"
	git tag "$(TAG)"
	git push
	git push --tags

# ─── Housekeeping ─────────────────────────────────────────────────────────────
clean:
	flutter clean
	@echo "✅  Build artefacts removed"

get:
	flutter pub get

upgrade:
	flutter pub upgrade --major-versions

analyze:
	flutter analyze

icons:
	dart run flutter_launcher_icons
	@echo "✅  Launcher icons regenerated"

version:
	@echo "Current version: $(_RAW_VERSION)"
