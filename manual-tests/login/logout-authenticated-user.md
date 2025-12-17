# Logout – Authenticated User

## Intent
Verify that an authenticated user can log out successfully and that the session is fully terminated.

## Feature
Authentication

## Page / Area
Global navigation / Account menu

## User Type
Authenticated user

## Risk Areas
- Session invalidation
- Security
- Navigation
- Back-button behavior

## Preconditions
- User is logged in

## Expected Outcome
- User is logged out
- User is redirected to a non-authenticated page
- Protected pages are no longer accessible

## Automation Status
Planned

## Notes
Logout failures can lead to serious security and session persistence issues.
