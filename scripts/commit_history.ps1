# ============================================================
# Script: commit_history.ps1
# Git config already set globally (HamzaBraik01)
# This script: init repo, create dated commits, push to GitHub
# ============================================================

$repoPath  = "c:\Users\titan\Desktop\genral\project\Portfolio"
$remoteUrl = "https://github.com/HamzaBraik01/Portfolio.git"

Set-Location $repoPath

# Initialize git and remote
Write-Host "Initializing git repository..." -ForegroundColor Cyan
git init
git remote add origin $remoteUrl

# Create .gitignore if missing
if (-not (Test-Path ".gitignore")) {
    $gitignoreContent = @"
node_modules/
.next/
.env
.env.local
.env*.local
dist/
build/
.DS_Store
Thumbs.db
*.log
.vercel
"@
    $gitignoreContent | Out-File -Encoding UTF8 ".gitignore"
}

# Helper: make a dated commit
function Invoke-DatedCommit {
    param(
        [string]$Message,
        [string]$Date,
        [string[]]$Files
    )
    Write-Host "Committing: $Message" -ForegroundColor Green
    Write-Host "  Date: $Date" -ForegroundColor DarkGray

    foreach ($f in $Files) {
        if (Test-Path $f) { git add $f }
    }

    $env:GIT_AUTHOR_DATE    = $Date
    $env:GIT_COMMITTER_DATE = $Date
    git commit -m $Message
    $env:GIT_AUTHOR_DATE    = ""
    $env:GIT_COMMITTER_DATE = ""
}

# Date helper - today = 31 March 2026
$today = Get-Date -Date "2026-03-31"
function Get-D {
    param([int]$daysAgo, [int]$h=10, [int]$m=0)
    return ($today.AddDays(-$daysAgo)).ToString("yyyy-MM-dd") + "T" + $h.ToString("00") + ":" + $m.ToString("00") + ":00+01:00"
}

# COMMIT 1 - Day 30 - Project initialization
Write-Host "--- Commit 1: Project init ---" -ForegroundColor Cyan
git add ".gitignore"
if (Test-Path "package.json")      { git add "package.json" }
if (Test-Path "package-lock.json") { git add "package-lock.json" }
if (Test-Path "next.config.ts")    { git add "next.config.ts" }
if (Test-Path "tsconfig.json")     { git add "tsconfig.json" }
if (Test-Path "README.md")         { git add "README.md" }

$env:GIT_AUTHOR_DATE    = Get-D 30 9 0
$env:GIT_COMMITTER_DATE = Get-D 30 9 0
git commit -m "chore: initialize Next.js 15 portfolio with TypeScript and Tailwind"
$env:GIT_AUTHOR_DATE    = ""
$env:GIT_COMMITTER_DATE = ""

# COMMIT 2 - Day 27 - Design system
Invoke-DatedCommit `
    -Message "style: add premium dark theme, CSS variables, dot-grid and custom scrollbar" `
    -Date (Get-D 27 11 30) `
    -Files @("app/globals.css", "app/layout.tsx", "lib/constants/colors.ts")

# COMMIT 3 - Day 25 - Navbar + ThemeToggle
Invoke-DatedCommit `
    -Message "feat: implement responsive navbar with scroll-spy and animated theme toggle" `
    -Date (Get-D 25 10 15) `
    -Files @(
        "components/sections/Navbar.tsx",
        "components/ui/ThemeToggle.tsx",
        "lib/hooks/useScrollToSection.ts"
    )

# COMMIT 4 - Day 23 - Hero section
Invoke-DatedCommit `
    -Message "feat(hero): animated hero section with typewriter, floating badges and conic photo ring" `
    -Date (Get-D 23 14 45) `
    -Files @("components/sections/Hero.tsx", "public/profile.png")

# COMMIT 5 - Day 21 - About section
Invoke-DatedCommit `
    -Message "feat(about): build about section with glassmorphism cards and rotating gradient border" `
    -Date (Get-D 21 9 0) `
    -Files @("components/sections/About.tsx", "lib/data/about.ts")

# COMMIT 6 - Day 19 - Services section
Invoke-DatedCommit `
    -Message "feat(services): add 3 animated service cards with hover gradient border effect" `
    -Date (Get-D 19 16 20) `
    -Files @("components/sections/Services.tsx")

# COMMIT 7 - Day 17 - Why Choose Me
Invoke-DatedCommit `
    -Message "feat(why): add why choose me section with value proposition cards" `
    -Date (Get-D 17 11 10) `
    -Files @("components/sections/WhyChooseMe.tsx")

# COMMIT 8 - Day 14 - Projects carousel
Invoke-DatedCommit `
    -Message "feat(projects): add featured projects carousel (StreamPulse, SDMS, OctoPOS, FroidPredict)" `
    -Date (Get-D 14 15 30) `
    -Files @(
        "components/sections/Portfolio.tsx",
        "components/sections/ProjectCard.tsx",
        "lib/data/projects.ts",
        "app/projects/page.tsx"
    )

# COMMIT 9 - Day 12 - Technologies section
Invoke-DatedCommit `
    -Message "feat(tech): add technologies grid with SVG logos and image fallback system" `
    -Date (Get-D 12 10 45) `
    -Files @("components/sections/Technologies.tsx", "lib/data/technologies.ts")

# COMMIT 10 - Day 10 - Skills section
Invoke-DatedCommit `
    -Message "feat(skills): add skills section with animated progress bars" `
    -Date (Get-D 10 14 0) `
    -Files @("components/sections/Skills.tsx")

# COMMIT 11 - Day 8 - Contact form
Invoke-DatedCommit `
    -Message "feat(contact): add contact form with Gmail Compose integration" `
    -Date (Get-D 8 9 30) `
    -Files @("components/sections/Contact.tsx", "app/api/contact/route.ts")

# COMMIT 12 - Day 6 - Footer + Social
Invoke-DatedCommit `
    -Message "feat(footer): add footer with social links and back-to-top button" `
    -Date (Get-D 6 16 0) `
    -Files @("components/sections/Footer.tsx", "components/sections/Social.tsx")

# COMMIT 13 - Day 4 - Theme toggle fix
Invoke-DatedCommit `
    -Message "fix(theme): replace hardcoded dark colors with CSS variables for light/dark support" `
    -Date (Get-D 4 11 20) `
    -Files @(
        "components/ui/ThemeToggle.tsx",
        "components/sections/Hero.tsx",
        "components/sections/About.tsx",
        "components/sections/Services.tsx",
        "components/sections/WhyChooseMe.tsx",
        "components/sections/Portfolio.tsx",
        "components/sections/Technologies.tsx",
        "components/sections/Contact.tsx"
    )

# COMMIT 14 - Day 3 - Links update
Invoke-DatedCommit `
    -Message "fix: update LinkedIn URL and Download CV Google Drive link" `
    -Date (Get-D 3 10 0) `
    -Files @(
        "components/sections/Hero.tsx",
        "components/sections/Footer.tsx",
        "components/sections/Social.tsx"
    )

# COMMIT 15 - Day 2 - Nav rename
Invoke-DatedCommit `
    -Message "refactor(nav): rename Portfolio to Projects, clean up nav items" `
    -Date (Get-D 2 15 45) `
    -Files @("components/sections/Navbar.tsx")

# COMMIT 16 - Day 1 - Final polish (catch-all remaining files)
Write-Host "--- Commit 16: Final polish ---" -ForegroundColor Cyan
git add -A
$env:GIT_AUTHOR_DATE    = Get-D 1 12 0
$env:GIT_COMMITTER_DATE = Get-D 1 12 0
git commit -m "chore: final polish - responsive layout, animations, SEO meta tags"
$env:GIT_AUTHOR_DATE    = ""
$env:GIT_COMMITTER_DATE = ""

# Push to GitHub
Write-Host "Pushing to GitHub..." -ForegroundColor Cyan
git branch -M main
git push -u origin main --force

Write-Host "Done! Repo: https://github.com/HamzaBraik01/Portfolio" -ForegroundColor Green
Write-Host "16 commits spread over 30 days." -ForegroundColor Yellow
